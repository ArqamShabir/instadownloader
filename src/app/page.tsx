import { Metadata } from "next";
import Link from "next/link";

import { InstagramVideoForm } from "@/features/instagram/components/form";
import Faq from "@/features/instagram/components/Faq";
import {
  CheckCircle,
  Download,
  Eye,
  FileText,
  Heart,
  Instagram,
  Play,
  Shield,
  Smartphone,
  Star,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Instagram Video Downloader | Download Reels, Stories & IGTV HD Free 2025",
  description:
    "Download Instagram videos in HD quality without watermark. Free Instagram Reels, Stories, and IGTV downloader. No registration required. Works on all devices. Fast and secure.",
  keywords: [
    "Instagram downloader",
    "Instagram Reels downloader",
    "Download Instagram videos",
    "Instagram Stories downloader",
    "IGTV downloader",
    "Free Instagram downloader",
    "Instagram video saver",
    "Download Instagram Reels HD",
    "Instagram downloader 2025",
    "Save Instagram videos",
    "Instagram video download HD",
    "Instagram downloader no watermark",
    "Download Instagram videos online",
    "Instagram reel downloader",
    "Instagram video downloader free",
    "Download Instagram content",
    "Instagram media downloader",
    "Instagram video grabber",
    "Instagram download tool",
    "Best Instagram downloader",
  ],
  authors: [{ name: "InstaDownloader" }],
  creator: "InstaDownloader",
  publisher: "InstaDownloader",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
  openGraph: {
    title: "Instagram Video Downloader | Download Reels, Stories & IGTV HD Free 2025",
    description:
      "Download Instagram videos in HD quality without watermark. Free Instagram Reels, Stories, and IGTV downloader. No registration required. Works on all devices.",
    url: "https://instadownloader.cloud",
    type: "website",
    siteName: "InstaDownloader",
    locale: "en_US",
    images: [
      {
        url: "https://instadownloader.cloud/images/Snapshot.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Video Downloader - Download Reels, Stories & IGTV HD Free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Video Downloader | Download Reels, Stories & IGTV HD Free",
    description:
      "Download Instagram videos in HD quality without watermark. Free Instagram Reels, Stories, and IGTV downloader. No registration required.",
    images: ["https://instadownloader.cloud/images/Snapshot.jpg"],
    creator: "@instadownloader",
  },
  alternates: {
    canonical: "https://instadownloader.cloud",
  },
  other: {
    "script:ld+json-1": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Instagram Video Downloader",
      url: "https://instadownloader.cloud",
      description:
        "Download Instagram videos in HD quality without watermark. Free Instagram Reels, Stories, and IGTV downloader. No registration required. Works on all devices.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript",
      softwareVersion: "2025",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1578",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Organization",
        name: "InstaDownloader",
        url: "https://instadownloader.cloud",
      },
      featureList: [
        "Download Instagram Reels in HD",
        "Download Instagram Stories",
        "Download IGTV videos",
        "No watermark on downloads",
        "No registration required",
        "Works on mobile and desktop",
        "Fast download speeds",
        "Secure and private",
        "Free to use",
        "High quality downloads",
      ],
    }),
    "script:ld+json-2": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Download Instagram Reels Without Watermark",
      description: "Step-by-step guide to download Instagram Reels, Stories, and IGTV videos in HD quality without watermark.",
      image: "https://instadownloader.cloud/images/Snapshot.jpg",
      totalTime: "PT1M",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: "0",
      },
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
          name: "Copy the Instagram link",
          text: "Open Instagram app or website, find the Reel/Story/IGTV you want to download, tap the share icon, and copy the link.",
          image: "https://instadownloader.cloud/images/Snapshot.jpg",
        },
        {
          "@type": "HowToStep",
          name: "Paste the URL",
          text: "Paste the Instagram link into the downloader field above and click 'Download' to fetch the video data.",
          image: "https://instadownloader.cloud/images/Snapshot.jpg",
        },
        {
          "@type": "HowToStep",
          name: "Download the video",
          text: "Click the download button to save the video directly to your device in HD quality without watermark.",
          image: "https://instadownloader.cloud/images/Snapshot.jpg",
        },
      ],
    }),
    "script:ld+json-3": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How to download Instagram Reels without watermark?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply paste the Instagram Reel link into our downloader and click download. Our tool automatically removes watermarks and provides HD quality downloads.",
          },
        },
        {
          "@type": "Question",
          name: "Is it free to download Instagram videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our Instagram video downloader is completely free to use. No registration, no hidden fees, and no watermarks on downloaded videos.",
          },
        },
        {
          "@type": "Question",
          name: "Can I download Instagram Stories and IGTV?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our downloader supports Instagram Reels, Stories, and IGTV videos. All downloads are in HD quality without watermarks.",
          },
        },
        {
          "@type": "Question",
          name: "Does this work on mobile devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our Instagram downloader works perfectly on both mobile devices and desktop computers. The interface is optimized for all screen sizes.",
          },
        },
      ],
    }),
  },
};


const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Download videos in seconds with our optimized servers",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: Download,
    title: "HD Quality",
    description: "Get the highest quality videos without watermarks",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your privacy is protected with enterprise-grade security",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    icon: Smartphone,
    title: "All Devices",
    description: "Works perfectly on mobile, tablet, and desktop",
    color: "text-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-950/20",
  },
];

const stats = [
  { number: "1M+", label: "Downloads" },
  { number: "50K+", label: "Happy Users" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
];

const steps = [
  {
    step: "01",
    title: "Copy Link",
    description: "Copy the Instagram video link from the app or website",
    icon: Instagram,
  },
  {
    step: "02", 
    title: "Paste & Process",
    description: "Paste the link and let our system fetch the video data",
    icon: Play,
  },
  {
    step: "03",
    title: "Download HD",
    description: "Get your video in HD quality without any watermarks",
    icon: Download,
  },
];

const extraTools = [
  {
    icon: Eye,
    title: "Instagram Profile Viewer",
    description: "Check public profile stats and profile pictures instantly.",
    href: "/profile-viewer",
    cta: "View profiles",
  },
  {
    icon: FileText,
    title: "Reels Download Guide",
    description: "Follow a step-by-step tutorial to save reels in HD.",
    href: "/blog",
    cta: "Read the guide",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Professional Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20" />
        
        <div className="relative z-10 mx-auto max-w-6xl py-16">
          <div className="text-center">
            {/* Download Form - Priority Position */}
            <div className="mx-auto mb-12 max-w-2xl px-4 sm:px-0">
              <div className="rounded-2xl bg-transparent p-4 shadow-lg border border-gray-200 dark:border-gray-700 sm:bg-white sm:p-8 dark:sm:bg-gray-800">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:text-3xl">
                    Download Instagram Videos
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Paste your Instagram link below and get HD videos instantly
                  </p>
                </div>
                <InstagramVideoForm />
              </div>
            </div>
            
            {/* Professional Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow-md text-xs">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">100% Free - No Registration - HD Quality</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="mb-6 px-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Download Instagram Videos
              <span className="block text-blue-600 dark:text-blue-400">
                Without Watermark
              </span>
            </h1>
            
            {/* Professional Subtitle */}
            <p className="mx-auto px-4 mb-12 max-w-3xl text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Get Instagram Reels, Stories, and IGTV videos in HD quality without watermarks. 
              Fast, secure, and completely free. Works on all devices.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium">No Registration Required</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                <span className="font-medium">100% Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">Lightning Fast</span>
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Downloader?
              </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the best Instagram video downloading with our advanced features
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className={`rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 ${feature.bgColor}`}>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Download Instagram videos in just 3 simple steps. No complicated processes, no waiting.
            </p>
                    </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <step.icon className="h-8 w-8" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-1/2 hidden h-0.5 w-full bg-blue-600 md:block" />
                  )}
                </div>
                <div className="mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  STEP {step.step}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Tools Section */}
      <section className="py-10 bg-white dark:bg-gray-900 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              More Instagram Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore more features to get the most out of Instagram content.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {extraTools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="group rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-lg shadow-blue-200/20 transition hover:-translate-y-1 hover:shadow-blue-300/30 dark:border-blue-900/40 dark:bg-slate-950/70 dark:shadow-blue-950/30"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-200">
                  <tool.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {tool.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
                  {tool.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about downloading Instagram videos
            </p>
          </div>
          <Faq />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-blue-600 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Download Instagram Videos?
          </h2>
          <p className="mb-12 text-xl text-blue-100">
            Join thousands of users who trust our Instagram video downloader. 
            Fast, free, and reliable.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>50K+ Happy Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              <span>Loved by Creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Need Help?
            </h3>
            <p className="mb-8 text-gray-400">
              Contact us at{" "}
              <a 
                href="mailto:quote.fiction1@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                quote.fiction1@gmail.com
              </a>
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                Copyright 2025 InstaDownloader.cloud - We are not affiliated with Instagram or Meta.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

