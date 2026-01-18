"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ExternalLink, ImageIcon, Loader2, Search, Users } from "lucide-react";

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
import { normalizeInstagramUsername } from "@/features/instagram/profile-utils";
import { useProfileInfo } from "@/services/api/queries";
import { ProfileInfo } from "@/types";

const formSchema = z.object({
  profileQuery: z.string().min(2, {
    message: "Enter a username or profile URL",
  }),
});

const numberFormatter = new Intl.NumberFormat();

const formatCount = (value?: number) => {
  if (!value && value !== 0) return "--";
  return numberFormatter.format(value);
};

export function InstagramProfileViewer() {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null);
  const [hasRequested, setHasRequested] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileQuery: "",
    },
  });

  const { error, isPending, mutateAsync: getProfileInfo } = useProfileInfo();
  const httpError = getHttpErrorMessage(error);

  const profileImage = useMemo(() => {
    if (!profileInfo?.profileImageUrl) return "";
    const params = new URLSearchParams({
      imageUrl: profileInfo.profileImageUrl,
    });
    return `/api/image/proxy?${params.toString()}`;
  }, [profileInfo?.profileImageUrl]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const trimmed = values.profileQuery.trim();
    const username = normalizeInstagramUsername(trimmed);
    form.setValue("profileQuery", trimmed);
    setHasRequested(true);
    setProfileInfo(null);

    if (!username) {
      form.setError("profileQuery", {
        message: "Enter a valid Instagram username or profile URL",
      });
      return;
    }

    try {
      const info = await getProfileInfo({ username });
      setProfileInfo(info);
    } catch (requestError) {
      console.error(requestError);
    }
  }

  const profileUrl =
    profileInfo?.profileUrl ??
    (profileInfo?.username
      ? `https://www.instagram.com/${profileInfo.username}/`
      : "#");
  const profileBio = profileInfo?.bio ?? profileInfo?.summary;

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-blue-100 bg-transparent p-6 shadow-xl shadow-blue-200/40 backdrop-blur dark:border-blue-900/40 dark:shadow-blue-900/30 sm:bg-white/90 sm:p-8 dark:sm:bg-slate-950/80"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="profileQuery"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="text"
                          inputMode="text"
                          autoComplete="off"
                          spellCheck={false}
                          placeholder="@username or https://www.instagram.com/username"
                          className="h-14 rounded-2xl border-blue-200 bg-transparent px-4 text-base shadow-inner focus-visible:border-blue-500 focus-visible:ring-blue-400 disabled:opacity-70 dark:border-blue-900/60 dark:text-white sm:bg-white dark:sm:bg-slate-900/70"
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
                  <Search className="mr-2 h-5 w-5" />
                )}
                View Profile
              </Button>
            </div>

            {httpError && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-sm dark:border-red-500/40 dark:bg-red-950/30 dark:text-red-200">
                {httpError}
              </div>
            )}

            {!httpError && !isPending && profileInfo && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                Profile details loaded. Public accounts only.
              </div>
            )}
          </div>
        </form>
      </Form>

      {isPending && (
        <div className="w-full max-w-4xl animate-pulse rounded-3xl border border-blue-100 bg-white/70 p-6 shadow-sm dark:border-blue-900/40 dark:bg-slate-900/70">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="h-56 w-full rounded-2xl bg-gradient-to-br from-blue-200 via-blue-100 to-blue-200 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 md:w-56" />
            <div className="flex flex-1 flex-col gap-4">
              <div className="h-6 w-2/3 rounded-full bg-blue-200/80 dark:bg-blue-800/60" />
              <div className="h-4 w-full rounded-full bg-blue-100/80 dark:bg-blue-900/60" />
              <div className="grid grid-cols-3 gap-3">
                <div className="h-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/50" />
                <div className="h-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/50" />
                <div className="h-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/50" />
              </div>
              <div className="h-12 w-full rounded-2xl bg-blue-200/80 dark:bg-blue-900/60" />
            </div>
          </div>
        </div>
      )}

      {!isPending && profileInfo && (
        <article className="w-full max-w-4xl rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-xl shadow-blue-200/40 backdrop-blur dark:border-blue-900/40 dark:bg-slate-950/80 dark:shadow-blue-950/30 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-slate-900/90 text-white dark:border-blue-900/50 md:w-56">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt={`${profileInfo.username} profile`}
                  fill
                  sizes="(max-width: 768px) 100vw, 224px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-sm text-slate-200">
                  <ImageIcon className="h-6 w-6" />
                  <span>No preview</span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                  Instagram profile
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  {profileInfo.fullName || `@${profileInfo.username}`}
                </h3>
                <p className="text-sm text-muted-foreground">
                  @{profileInfo.username}
                </p>
              </div>

              {profileBio && (
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-muted-foreground dark:border-blue-900/50 dark:bg-blue-950/30">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                    Bio
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
                    {profileBio}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-3 py-3 text-sm dark:border-blue-900/50 dark:bg-blue-950/40">
                  <div className="text-lg font-semibold text-foreground">
                    {formatCount(profileInfo.followers)}
                  </div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-3 py-3 text-sm dark:border-blue-900/50 dark:bg-blue-950/40">
                  <div className="text-lg font-semibold text-foreground">
                    {formatCount(profileInfo.following)}
                  </div>
                  <div className="text-xs text-muted-foreground">Following</div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-3 py-3 text-sm dark:border-blue-900/50 dark:bg-blue-950/40">
                  <div className="text-lg font-semibold text-foreground">
                    {formatCount(profileInfo.posts)}
                  </div>
                  <div className="text-xs text-muted-foreground">Posts</div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  Public profile data only. We never ask for passwords.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 text-base font-semibold shadow-lg shadow-blue-300/50 transition hover:brightness-105 focus-visible:ring-blue-600 dark:from-blue-500 dark:to-sky-400 dark:shadow-blue-900/40"
                >
                  <a href={profileUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> Open on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </article>
      )}

      {hasRequested && !isPending && !profileInfo && !httpError && (
        <div className="w-full max-w-4xl rounded-3xl border border-blue-100 bg-white/85 p-6 text-sm text-muted-foreground shadow-sm dark:border-blue-900/40 dark:bg-slate-900/80">
          Enter a public Instagram username to load profile details.
        </div>
      )}

      <div className="flex w-full max-w-4xl flex-col gap-4 rounded-3xl border border-blue-100 bg-white/70 p-6 text-sm text-muted-foreground shadow-sm dark:border-blue-900/40 dark:bg-slate-900/70">
        <div className="flex items-center gap-2 text-foreground">
          <Users className="h-4 w-4 text-blue-500" />
          <span className="font-medium">Profile viewer tips</span>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm">
          <li>Works only for public Instagram accounts.</li>
          <li>Paste a profile URL or just type the username.</li>
          <li>Stats update based on what Instagram exposes publicly.</li>
        </ul>
      </div>
    </div>
  );
}
