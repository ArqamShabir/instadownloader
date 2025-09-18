"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Download, Loader2, PlayCircle, ShieldCheck, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { getHttpErrorMessage } from "@/lib/http";
import { downloadFile } from "@/lib/utils";

import { useVideoInfo } from "@/services/api/queries";
import { VideoInfo } from "@/types";

const formSchema = z.object({
  postUrl: z.string().url({
    message: "Provide a valid Instagram post link",
  }),
});

const numberFormatter = new Intl.NumberFormat();

const formatDuration = (duration?: number) => {
  if (!duration && duration !== 0) {
    return "--";
  }
  const totalSeconds = Math.max(0, Math.round(duration));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export function InstagramVideoForm() {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [hasRequested, setHasRequested] = useState(false);
  const [snapshotUrl, setSnapshotUrl] = useState<string | null>(null);
  const [isGeneratingSnapshot, setIsGeneratingSnapshot] = useState(false);
  const [snapshotError, setSnapshotError] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postUrl: "",
    },
  });

  const { error, isPending, mutateAsync: getVideoInfo } = useVideoInfo();

  const httpError = getHttpErrorMessage(error);

  const downloadHref = useMemo(() => {
    if (!videoInfo) return "";
    const params = new URLSearchParams({
      videoUrl: videoInfo.videoUrl,
      filename: videoInfo.filename,
    });
    return `/api/video/download?${params.toString()}`;
  }, [videoInfo]);

  const streamSrc = useMemo(() => {
    if (!videoInfo) return "";
    const params = new URLSearchParams({
      videoUrl: videoInfo.videoUrl,
    });
    return `/api/video/stream?${params.toString()}`;
  }, [videoInfo]);

  useEffect(() => {
    setSnapshotUrl(null);
    setSnapshotError(null);
    setIsGeneratingSnapshot(false);

    if (!videoInfo || videoInfo.thumbnailUrl) {
      return;
    }

    let disposed = false;
    const video = document.createElement("video");
    const handleCleanup = () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    };

    const handleLoadedData = () => {
      if (disposed) {
        handleCleanup();
        return;
      }

      try {
        const width = video.videoWidth || 720;
        const height = video.videoHeight || 1280;
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("Unable to access canvas context");
        }
        context.drawImage(video, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
        if (!disposed) {
          setSnapshotUrl(dataUrl);
        }
      } catch (thumbError) {
        if (!disposed) {
          setSnapshotError("Could not generate thumbnail preview.");
        }
      } finally {
        if (!disposed) {
          setIsGeneratingSnapshot(false);
        }
        handleCleanup();
      }
    };

    const handleError = () => {
      if (!disposed) {
        setSnapshotError("Unable to load video for preview.");
        setIsGeneratingSnapshot(false);
      }
      handleCleanup();
    };

    setIsGeneratingSnapshot(true);
    video.crossOrigin = "anonymous";
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.src = streamSrc;

    video.addEventListener("loadeddata", handleLoadedData, { once: true });
    video.addEventListener("error", handleError, { once: true });

    return () => {
      disposed = true;
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      handleCleanup();
    };
  }, [streamSrc, videoInfo]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const postUrl = values.postUrl.trim();
    form.setValue("postUrl", postUrl);
    setHasRequested(true);
    setVideoInfo(null);
    setSnapshotUrl(null);
    setSnapshotError(null);

    try {
      const info = await getVideoInfo({ postUrl });
      setVideoInfo(info);
      window.setTimeout(() => {
        previewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } catch (requestError) {
      console.error(requestError);
    }
  }

  function handleImmediateDownload() {
    if (!videoInfo || !downloadHref) return;
    downloadFile(downloadHref, { filename: videoInfo.filename, target: "_self" });
  }

  const previewThumbnail = videoInfo?.thumbnailUrl || snapshotUrl;

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-xl shadow-blue-200/40 backdrop-blur dark:border-blue-900/40 dark:bg-slate-950/80 dark:shadow-blue-900/30 sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="postUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="url"
                          inputMode="url"
                          autoComplete="off"
                          spellCheck={false}
                          placeholder="https://www.instagram.com/reel/..."
                          className="h-14 rounded-2xl border-blue-200 bg-white px-4 text-base shadow-inner focus-visible:border-blue-500 focus-visible:ring-blue-400 disabled:opacity-70 dark:border-blue-900/60 dark:bg-slate-900/70 dark:text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-2 text-sm" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                disabled={isPending}
                type="submit"
                size="lg"
                className="h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-8 text-base font-semibold shadow-lg shadow-blue-300/50 transition hover:-translate-y-0.5 hover:shadow-blue-400/60 focus-visible:ring-blue-600 dark:from-blue-500 dark:to-sky-400 dark:shadow-blue-900/40"
              >
                {isPending ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Download className="mr-2 h-5 w-5" />
                )}
                Fetch Video
              </Button>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-blue-50/80 p-4 text-sm text-blue-900 shadow-inner dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-100 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="h-4 w-4 text-blue-500" />
                Fast server-side download, no pop up windows.
              </div>
              <span className="text-xs sm:text-sm">
                Paste the reel link, wait a moment, then save the MP4 directly from this page.
              </span>
            </div>

            {httpError && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-sm dark:border-red-500/40 dark:bg-red-950/30 dark:text-red-200">
                {httpError}
              </div>
            )}

            {!httpError && !isPending && videoInfo && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                Video details fetched successfully. Use the download button below.
              </div>
            )}

            {snapshotError && !isPending && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 shadow-sm dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-200">
                {snapshotError}
              </div>
            )}
          </div>
        </form>
      </Form>

      <div ref={previewRef} className="w-full max-w-4xl">
        {isPending && (
          <div className="w-full animate-pulse rounded-3xl border border-blue-100 bg-white/70 p-6 shadow-sm dark:border-blue-900/40 dark:bg-slate-900/70">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="h-64 w-full rounded-2xl bg-gradient-to-br from-blue-200 via-blue-100 to-blue-200 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 md:w-72" />
              <div className="flex flex-1 flex-col gap-4">
                <div className="h-6 w-2/3 rounded-full bg-blue-200/80 dark:bg-blue-800/60" />
                <div className="h-4 w-full rounded-full bg-blue-100/80 dark:bg-blue-900/60" />
                <div className="h-4 w-5/6 rounded-full bg-blue-100/80 dark:bg-blue-900/60" />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="h-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/50" />
                  <div className="h-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/50" />
                  <div className="h-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/50" />
                </div>
                <div className="h-12 w-full rounded-2xl bg-blue-200/80 dark:bg-blue-900/60" />
              </div>
            </div>
          </div>
        )}

        {!isPending && videoInfo && (
          <article className="w-full rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-xl shadow-blue-200/40 backdrop-blur dark:border-blue-900/40 dark:bg-slate-950/80 dark:shadow-blue-950/30 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-black/80 md:w-72 dark:border-blue-900/50">
                {previewThumbnail ? (
                  <img
                    src={previewThumbnail}
                    alt={videoInfo.title || "Instagram reel thumbnail"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : isGeneratingSnapshot ? (
                  <div className="flex h-full min-h-[250px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-200 to-blue-100 text-blue-800 dark:from-blue-900/40 dark:to-blue-700/40 dark:text-blue-100">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <p className="text-sm font-medium">Preparing preview...</p>
                  </div>
                ) : (
                  <div className="flex h-full min-h-[250px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-200 to-blue-100 text-blue-800 dark:from-blue-900/40 dark:to-blue-700/40 dark:text-blue-100">
                    <video
                      src={streamSrc}
                      controls
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-100">
                      <PlayCircle className="h-4 w-4" /> Reel details
                    </span>
                    {videoInfo.authorUsername && (
                      <span className="inline-flex items-center gap-1 text-xs sm:text-sm">
                        <UserRound className="h-4 w-4 text-muted-foreground" />
                        @{videoInfo.authorUsername}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {videoInfo.title || "Instagram reel"}
                  </h3>
                  {videoInfo.caption && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {videoInfo.caption.length > 260
                        ? `${videoInfo.caption.slice(0, 260)}...`
                        : videoInfo.caption}
                    </p>
                  )}
                </div>

                <dl className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-3 shadow-inner dark:border-blue-900/40 dark:bg-blue-950/40">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-blue-500 dark:text-blue-200">
                      Resolution
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-blue-900 dark:text-blue-100">
                      {videoInfo.width && videoInfo.height
                        ? `${videoInfo.width} x ${videoInfo.height}`
                        : "HD"}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-3 shadow-inner dark:border-blue-900/40 dark:bg-blue-950/40">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-blue-500 dark:text-blue-200">
                      Duration
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-blue-900 dark:text-blue-100">
                      {formatDuration(videoInfo.durationSeconds)}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-3 shadow-inner dark:border-blue-900/40 dark:bg-blue-950/40">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-blue-500 dark:text-blue-200">
                      Views
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-blue-900 dark:text-blue-100">
                      {videoInfo.viewCount ? numberFormatter.format(videoInfo.viewCount) : "--"}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    File name: <span className="font-medium text-foreground">{videoInfo.filename}</span>
                  </p>
                  <Button
                    size="lg"
                    onClick={handleImmediateDownload}
                    className="h-12 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-8 text-base font-semibold shadow-lg shadow-blue-300/50 transition hover:brightness-105 focus-visible:ring-blue-600 dark:from-blue-500 dark:to-sky-400 dark:shadow-blue-900/40 sm:w-auto"
                  >
                    <Download className="mr-2 h-5 w-5" /> Download MP4
                  </Button>
                </div>
              </div>
            </div>
          </article>
        )}

        {hasRequested && !isPending && !videoInfo && !httpError && (
          <div className="rounded-3xl border border-blue-100 bg-white/85 p-6 text-sm text-muted-foreground shadow-sm dark:border-blue-900/40 dark:bg-slate-900/80">
            Paste a public Instagram reel link above and click Fetch Video to load details.
          </div>
        )}
      </div>
    </div>
  );
}
