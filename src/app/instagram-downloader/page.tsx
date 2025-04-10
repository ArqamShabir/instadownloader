import { InstagramVideoForm } from "@/features/instagram/components/form";
import Faq from "@/features/instagram/components/Faq.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Downloader - Download Reels, Videos, Stories & IGTV",
  description:
    "Download Instagram videos, reels, stories, IGTV, and photos for free in HD quality. Fast, secure, and easy to use Instagram downloader. Try it now!",
  keywords: [
    "Instagram Video Downloader",
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
    title: "Instagram Downloader - Download Reels, Videos, Stories & IGTV",
    description:
      "Easily download Instagram videos, reels, IGTV, and photos in HD. 100% free and private Instagram downloader!",
    url: "https://instadownloader.cloud/instagram-downloader",
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
    canonical: "https://instadownloader.cloud/instagram-downloader",
  },
};



export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-8 text-center text-4xl font-extrabold">
        Instagram Video Downloader
      </h1>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
      </section>
      <section className="flex flex-col items-center justify-center gap-4">
  <div className="my-6 p-6 max-w-[1200px]">
    <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
      Welcome to the Best Insta Reels Downloader!
    </h2>
    <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
      <strong>Insta Reels Downloader</strong> allows you to download Instagram reels in high quality without installing any software or application. With just a few clicks, you can save your favorite reels directly to your device in MP4 format. 
    </p>
    
    <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
      Did you know? More than 100 million videos and reels are uploaded to Instagram daily. But Instagram does not provide an official option to download them. That’s where our <strong>Insta Reels Downloader</strong> comes in handy! Now you can save Instagram reels easily and watch them offline anytime.
    </p>

    <img 
      src="/images/insta-reels-downloader.png" 
      alt="Instagram Reels Downloader" 
      className="w-full mx-auto my-8 rounded-lg shadow-md max-w-[800px]"
    />

    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Why Use Our Instagram Reels Downloader?</h3>
    <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
      There are many reasons why users prefer downloading Instagram reels instead of taking screenshots or screen recordings:
    </p>
    <ul className="list-disc pl-6 text-md text-gray-700 dark:text-gray-300 space-y-2">
      <li><strong>No Watermarks:</strong> Save high-quality reels without any watermarks.</li>
      <li><strong>100% Free:</strong> Use our tool for unlimited downloads without any cost.</li>
      <li><strong>Fast & Easy:</strong> Download reels instantly with a simple copy-paste method.</li>
      <li><strong>High-Quality MP4:</strong> Get videos in original resolution without losing quality.</li>
      <li><strong>No Sign-In Required:</strong> Unlike other services, you don’t need to log in or provide personal data.</li>
      <li><strong>Works on All Devices:</strong> Download Instagram reels on Android, iPhone, Windows, and Mac.</li>
    </ul>

    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white mt-6">How to Download Instagram Reels?</h3>
    <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
      Follow these simple steps to save Instagram reels to your device:
    </p>
    <ul className="list-decimal pl-6 text-md text-gray-700 dark:text-gray-300 space-y-2">
      <li><strong>Step 1:</strong> Open Instagram on your browser or mobile app.</li>
      <li><strong>Step 2:</strong> Find the reel you want to download.</li>
      <li><strong>Step 3:</strong> Tap the <strong>three-dot menu</strong> and select <strong>"Copy Link"</strong>.</li>
      <li><strong>Step 4:</strong> Paste the copied link into our Reels Downloader input box.</li>
      <li><strong>Step 5:</strong> Click the <strong>"Download"</strong> button and wait a few seconds.</li>
      <li><strong>Step 6:</strong> Your Instagram reel will be saved in high quality on your device.</li>
    </ul>

    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white mt-6">Important Notice</h3>
    <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
      Our tool is designed for **personal use only**. Please respect Instagram's copyright policies and do not download content without the creator’s permission.
    </p>
    <p className="text-md text-gray-700 dark:text-gray-300">
      We update our downloader regularly to ensure it works with Instagram’s latest updates. If you like our service, please share it with friends and support us!
    </p>
  </div>  
</section>
    <section className="flex flex-col items-center justify-center gap-4">
    <Faq/>    
    </section>
    </div>
  );
}
