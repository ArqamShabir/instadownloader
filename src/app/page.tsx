import { Metadata } from "next";

import { AdSlot } from "@/components/ad-slot";
import { InstagramVideoForm } from "@/features/instagram/components/form";
import Faq from "@/features/instagram/components/Faq";
import {
  BadgeCheck,
  Clock3,
  CloudDownload,
  Globe2,
  Headphones,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Instagram Reels Downloader | Fast HD Downloads Without Redirects",
  description:
    "Paste any Instagram Reel link and save the MP4 in HD without pop ups, redirects, or watermarks. Mobile friendly and free.",
  keywords: [
    "Instagram Reels downloader",
    "Download Instagram Reels HD",
    "Save Instagram videos",
    "Insta reel saver",
    "Instagram video downloader",
    "Free reel download tool",
    "Instagram reel download no redirect",
    "Reels downloader without watermark",
    "Fast Instagram download",
    "Download Instagram reels on mobile",
  ],
  authors: [{ name: "InstaDownloader.cloud" }],
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "Instagram Reels Downloader | Fast HD Downloads Without Redirects",
    description:
      "Save Instagram Reels in HD with a single click. No login required and no new tab redirects.",
    url: "https://instadownloader.cloud",
    type: "website",
    images: [
      {
        url: "https://instadownloader.cloud/images/Snapshot.jpg",
        width: 1200,
        height: 630,
        alt: "InstaDownloader quick reel download interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Reels Downloader - Fast, HD, No Watermark",
    description:
      "Free Instagram reels and video downloader with one-click MP4 downloads and monetisation friendly layout.",
    images: ["https://instadownloader.cloud/images/Snapshot.jpg"],
  },
  alternates: {
    canonical: "https://instadownloader.cloud",
  },
  other: {
    "script:ld+json-1": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Instagram Reels Downloader",
      url: "https://instadownloader.cloud",
      description:
        "Free Instagram Reels downloader with secure server-side delivery, HD MP4 output, and no redirect pages.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1578",
      },
      author: {
        "@type": "Organization",
        name: "InstaDownloader.cloud",
        url: "https://instadownloader.cloud",
      },
    }),
    "script:ld+json-2": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Download Instagram Reels",
      description: "Grab the MP4 file from any public Instagram Reel in less than a minute.",
      image: "https://instadownloader.cloud/images/Snapshot.jpg",
      totalTime: "PT1M",
      tool: [
        {
          "@type": "WebApplication",
          name: "Instagram Reels Downloader",
          url: "https://instadownloader.cloud",
        },
      ],
      step: [
        {
          "@type": "HowToStep",
          name: "Copy the reel link",
          text: "Open Instagram, tap the share icon, and copy the link to the reel.",
        },
        {
          "@type": "HowToStep",
          name: "Paste the URL",
          text: "Paste the link into the downloader field and wait for the video data to load.",
        },
        {
          "@type": "HowToStep",
          name: "Download the MP4",
          text: "Click download to save the reel directly on your device in HD.",
        },
      ],
    }),
  },
};

const highlightCards = [
  {
    title: "Lightning fast",
    description:
      "Edge routing keeps download speeds sharp, even during viral reel spikes.",
    icon: Zap,
  },
  {
    title: "HD with no watermark",
    description:
      "Always fetches the highest quality audio and video Instagram exposes publicly.",
    icon: CloudDownload,
  },
  {
    title: "Ad network friendly",
    description:
      "Clean layout and zero pop ups help maximise AdSense and premium RPMs.",
    icon: ShieldCheck,
  },
];

const secondaryHighlights = [
  {
    title: "Global delivery",
    description:
      "Optimised to work with Instagram CDNs worldwide to keep 200 response times low.",
    icon: Globe2,
  },
  {
    title: "Creator ready",
    description:
      "Social teams repurpose reels, clip audio, and archive campaigns without quality loss.",
    icon: Headphones,
  },
  {
    title: "SEO structured",
    description:
      "Semantic markup, FAQ schema, and Core Web Vitals help pages outrank competitors.",
    icon: BadgeCheck,
  },
];

const howItWorks = [
  {
    title: "Copy the reel URL",
    description: "Tap the share icon on Instagram and copy the link to any public reel.",
  },
  {
    title: "Paste into the downloader",
    description: "Drop the link into the form above and let the server fetch the MP4 stream.",
  },
  {
    title: "Download instantly",
    description: "Save the file straight to your device without jumping to a new tab.",
  },
];

const useCases = [
  {
    title: "Content repurposing",
    description:
      "Curate community highlights, cross post reels on other platforms, or build inspiration boards.",
  },
  {
    title: "Social media teams",
    description:
      "Save campaign assets in HD, archive UGC submissions, and collaborate faster.",
  },
  {
    title: "Educators and analysts",
    description:
      "Collect reel examples for workshops, research, and reporting without juggling phones.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-100 via-white to-white dark:from-slate-950/40 dark:via-slate-950 dark:to-slate-950" />
        <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/30" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <AdSlot
            label="Hero Leaderboard"
            size="728 x 90"
            description="Perfect for AdSense leaderboard creatives with top viewability."
            className="mx-auto mb-8 w-full max-w-4xl"
          />
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-100">
              <Sparkles className="h-4 w-4" /> Updated workflow keeps everything on your domain
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Download Instagram Reels in HD without redirects
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
              Paste a reel link, click fetch, and save the MP4 directly. No intrusive ads, no external tabs, and ready for your monetised landing pages.
            </p>
          </div>
          <div className="mx-auto mt-10 w-full max-w-4xl">
            <InstagramVideoForm />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-sm text-slate-500 dark:text-slate-400">
            Tip: Target long tail queries like "download Instagram reels HD" or "save reels without watermark" to capture high intent traffic while keeping bounce rates low.
          </p>
        </div>
      </header>

      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {highlightCards.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-200/40 dark:border-blue-900/50 dark:bg-blue-950/20 dark:hover:shadow-blue-900/40"
              >
                <item.icon className="mb-4 h-8 w-8 text-blue-500 transition group-hover:scale-105" />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>

          <AdSlot
            label="In-content Rectangle"
            size="336 x 280"
            description="Drop a responsive display block here for high viewability."
            className="mx-auto w-full max-w-2xl"
          />

          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
            <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/70 p-8 shadow-lg dark:border-slate-800 dark:from-slate-950 dark:to-blue-950/20">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Built for rankings, retention, and revenue
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Every section is structured for SEO and monetisation. Semantic headings, FAQ schema, and quick server responses help you compete for reel downloader keywords. Clear copy and immediate download actions keep users engaged, while curated ad slots improve viewability scores for AdSense and premium networks.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-blue-500" /> GDPR friendly: no Instagram login or cookies stored.
                </li>
                <li className="flex items-start gap-2">
                  <Clock3 className="mt-0.5 h-4 w-4 text-blue-500" /> Server proxy keeps downloads on your domain, avoiding risky redirects.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-blue-500" /> Structured data and long-form copy covering reels, stories, and IGTV queries.
                </li>
              </ul>
            </article>

            <div className="grid gap-6">
              {secondaryHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm transition hover:shadow-md dark:border-blue-900/50 dark:bg-slate-900/60"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-blue-500" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-blue-50/50 to-white py-16 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How it works</h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Copy, paste, download. The workflow cuts pogo sticking and keeps visitors on site, which is great for search engines and ad partners alike.
              </p>
              <div className="mt-8 space-y-6">
                {howItWorks.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-base font-semibold text-white shadow-md">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <article className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-950/80">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Who uses this tool?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Designed for creators, agencies, and publishers who need reliable reel downloads and a clean interface.
              </p>
              <ul className="mt-6 space-y-4">
                {useCases.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-900/50 dark:bg-blue-950/30">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                  </li>
                ))}
              </ul>
              <AdSlot
                label="Sidebar Skyscraper"
                size="300 x 600"
                description="Reserve this slot for sticky desktop placements."
                className="mt-6"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <article className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Optimise your Instagram downloader for SEO and AdSense
            </h2>
            <p>
              Long form copy helps search engines understand the topical authority of this page. Use keyword clusters around Instagram reels, video downloaders, and watermark free saving. Combine that with fast Core Web Vitals scores, schema markup, and human friendly formatting to earn higher ad bid density.
            </p>
            <p>
              For monetisation, keep intrusive interstitials away from the primary interaction area. The ad slots highlighted above follow Google "better ads" guidance and maintain strong viewability metrics. Experiment with native ads or affiliate placements below the download card to diversify revenue.
            </p>
            <p>
              Finally, update FAQs and support copy whenever Instagram ships UX changes. Fresh content signals help you retain rankings and reassure visitors that the downloader still works with the newest reel formats.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-white to-blue-50/40 pb-20 pt-10 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950/20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Faq />
        </div>
      </section>

      <footer className="bg-white pb-16 dark:bg-slate-950">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Ready to serve fast reel downloads on every campaign?
          </h2>
          <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Embed this tool on your site or link to it from high intent landing pages. For partnership or support, email <a className="font-medium text-blue-600 dark:text-blue-400" href="mailto:quote.fiction1@gmail.com">quote.fiction1@gmail.com</a>.
          </p>
          <div className="w-full max-w-3xl">
            <InstagramVideoForm />
          </div>
        </div>
      </footer>
    </main>
  );
}

