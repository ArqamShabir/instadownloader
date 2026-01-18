import { Metadata } from "next";

import { InstagramProfileViewer } from "@/features/instagram/components/profile-viewer";
import { Eye, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Instagram Profile Viewer | View Public Profile Stats Instantly",
  description:
    "Check public Instagram profile stats, follower counts, and profile pictures instantly. Free profile viewer with no login required.",
  keywords: [
    "Instagram profile viewer",
    "Instagram profile lookup",
    "Instagram profile stats",
    "View Instagram profile",
    "Instagram public profile",
    "Instagram profile picture",
    "Instagram profile search",
  ],
  openGraph: {
    title: "Instagram Profile Viewer | View Public Profile Stats Instantly",
    description:
      "See public Instagram profile details, follower counts, and profile pictures in seconds. No login required.",
    url: "https://instadownloader.cloud/profile-viewer",
    type: "website",
    siteName: "InstaDownloader",
    images: [
      {
        url: "https://instadownloader.cloud/images/Snapshot.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Profile Viewer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Profile Viewer | View Public Profile Stats Instantly",
    description:
      "Check public Instagram profile stats and profile pictures in seconds.",
    images: ["https://instadownloader.cloud/images/Snapshot.jpg"],
  },
  alternates: {
    canonical: "https://instadownloader.cloud/profile-viewer",
  },
};

export default function ProfileViewerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-md">
              <Eye className="h-4 w-4" />
              Free Instagram profile viewer
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              View Instagram Profile Stats
              <span className="block text-blue-600 dark:text-blue-400">
                Without Logging In
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Check public profile insights, follower counts, and profile photos
              in seconds. Paste a username or profile URL to get started.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                <span className="font-medium">No login required</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Public stats only</span>
              </div>
            </div>

            <InstagramProfileViewer />
          </div>
        </div>
      </section>
    </main>
  );
}
