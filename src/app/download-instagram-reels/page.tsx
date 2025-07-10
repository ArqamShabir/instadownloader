import { InstagramVideoForm } from "@/features/instagram/components/form";
import Faq from "@/features/instagram/components/Faq.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Reels Downloader | Save Reels in HD for Free",
  description:
    "Fast & free Instagram Reels downloader. Paste the reel link and download in HD quality. No login needed. Use it on any device!",
  keywords: [
    "Instagram Reels downloader",
    "Download Instagram Reels",
    "Insta Reels saver",
    "Instagram Reels video download",
    "How to download Instagram Reels online",
    "Download Instagram Reels without watermark",
    "Free Instagram Reels downloader HD",
    "Insta Reels download tool without login",
    "Download Instagram Reels",
    "Save Instagram Videos",
    "Instagram Story Downloader",
    "Instagram IGTV Downloader",
    "Instagram Photo Downloader",
    "Download Instagram Album",
    "Fast Instagram Downloader"
  ],
  authors: [{ name: "InstaDownloader.cloud" }],
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "Instagram Reels Downloader | Save Reels in HD for Free",
    description:
      "Fast & free Instagram Reels downloader. Paste the reel link and download in HD quality. No login needed. Use it on any device!",
    url: "https://instadownloader.cloud",
    type: "website",
    images: [
      {
        url: "https://instadownloader.cloud/images/Snapshot.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Downloader Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Downloader - Download Videos, Reels & IGTV",
    description:
      "Fast & free Instagram video downloader. Save IG videos, reels, stories, IGTV, and albums in HD.",
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
        "Fast & free Instagram Reels downloader. Paste the reel link and download in HD quality. No login needed. Works on all devices!",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "All",
      browserRequirements: "Requires web browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1578"
      },
      author: {
        "@type": "Organization",
        name: "InstaDownloader.cloud",
        url: "https://instadownloader.cloud"
      }
    }),
    "script:ld+json-2": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Download Instagram Reels",
      description: "Learn how to easily download Instagram Reels using our free online tool.",
      image: "https://instadownloader.cloud/images/Snapshot.jpg",
      totalTime: "PT1M",
      tool: [
        {
          "@type": "WebApplication",
          name: "Instagram Reels Downloader",
          url: "https://instadownloader.cloud"
        }
      ],
      step: [
        {
          "@type": "HowToStep",
          name: "Open Instagram",
          text: "Open Instagram on your browser or mobile app."
        },
        {
          "@type": "HowToStep",
          name: "Find the reel",
          text: "Find the Instagram reel you want to download."
        },
        {
          "@type": "HowToStep",
          name: "Copy the link",
          text: "Tap the three-dot menu and select 'Copy Link'."
        },
        {
          "@type": "HowToStep",
          name: "Paste the link",
          text: "Paste the copied link into our Reels Downloader input box."
        },
        {
          "@type": "HowToStep",
          name: "Download the reel",
          text: "Click the 'Download' button and wait a few seconds to get the high-quality MP4 file."
        }
      ]
    })
  }
};




export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-8 text-center text-4xl font-extrabold">
  Instagram Reels Downloader – Download Reels in HD Without Watermark
</h1>

<section className="flex flex-col items-center justify-center gap-4">
  <InstagramVideoForm />
</section>

<section className="flex flex-col items-center justify-center gap-4">
  <div className="my-6 p-6 max-w-[1200px]">
    <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
      Free Instagram Reels Downloader (MP4 HD) – No App, No Login!
    </h2>

    <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
      Looking for a fast and free way to <strong>download Instagram Reels</strong>? Our advanced <strong>Instagram Reels Downloader</strong> lets you save any reel video in HD quality (MP4 format) without watermark. No software. No signup. Just copy, paste, and download!
    </p>

    <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
      <strong>100K+ users</strong> trust us for hassle-free <strong>Instagram video downloading</strong>. Whether it’s for offline viewing, saving memories, reposting content (with credit), or building collections — we’ve got you covered!
    </p>

    <img 
      src="/images/insta-reels-downloader.png" 
      alt="Instagram Reels HD Downloader Preview" 
      className="w-full mx-auto my-8 rounded-lg shadow-md max-w-[800px]"
    />

    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Why Our Instagram Reels Video Downloader Stands Out</h3>
    <ul className="list-disc pl-6 text-md text-gray-700 dark:text-gray-300 space-y-2">
      <li><strong>100% Free Forever:</strong> Unlimited access. No hidden costs.</li>
      <li><strong>HD MP4 Format:</strong> Download Reels in the highest available resolution.</li>
      <li><strong>No Watermark:</strong> Clean, professional quality videos.</li>
      <li><strong>Works on All Devices:</strong> Mobile, iOS, Android, Windows, Mac, tablets.</li>
      <li><strong>Ultra Fast:</strong> Download reels within seconds using our lightning-fast servers.</li>
      <li><strong>Safe & Private:</strong> No account required. No login. No user data stored.</li>
      <li><strong>Browser-Based:</strong> Just use your browser — no apps or extensions needed.</li>
    </ul>

    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white mt-6">
      How to Download Instagram Reels (Step-by-Step)
    </h3>
    <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
      Anyone can use our <strong>Insta Reels downloader</strong> — no tech skills needed:
    </p>
    <ol className="list-decimal pl-6 text-md text-gray-700 dark:text-gray-300 space-y-2">
      <li>Open Instagram and find the Reel you want to save.</li>
      <li>Tap the <strong>three dots</strong> and select <strong>"Copy Link"</strong>.</li>
      <li>Paste the link into the downloader box above.</li>
      <li>Click <strong>“Download”</strong> and wait a few seconds.</li>
      <li>Your Reel will be saved to your device in HD MP4 format.</li>
    </ol>

    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white mt-6">
      Reels Downloader – More Features Coming Soon
    </h3>
    <ul className="list-disc pl-6 text-md text-gray-700 dark:text-gray-300 space-y-2">
      <li>Instagram Story & Highlights Downloader</li>
      <li>IGTV & Live Video Downloads</li>
      <li>Download Instagram Carousel (Multiple Photos/Videos)</li>
      <li>Batch Download Support</li>
    </ul>

    
  </div>
</section>

<section className="flex flex-col items-center justify-center gap-4">
  <Faq />
</section>

    </div>
  );
}
