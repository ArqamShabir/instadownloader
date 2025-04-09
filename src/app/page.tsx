import { InstagramVideoForm } from "@/features/instagram/components/form";
import Faq from "@/features/instagram/components/Faq.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Video Downloader - Fast & Private",
  description:
    "Download Instagram videos, reels, and stories in HD quality. Our Instagram Video Downloader is fast, free, and easy to use. You can securly download and use the reels. Try it now!",
  keywords: [
    "Instagram Video Downloader",
    "Download Instagram Reels",
    "Save Instagram Videos",
    "Instagram Story Downloader",
    "HD Instagram Videos",
  ],
  authors: [{ name: "InstaDownloader.cloud" }],
  robots: "index, follow",
  openGraph: {
    title: "Instagram Video Downloader - Fast & Private",
    description:
      "Easily download Instagram videos, reels, and stories in HD quality. Fast, secure, and free!",
    url: "https://instadownloader.cloud",
    type: "website",
  },
  alternates: {
    canonical: "https://instadownloader.cloud",
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
      <div className="my-6 p-6" style={{maxWidth:'1200px'}}>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Overview
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
      Our tool is specifically designed to assist you in downloading videos and images that you have uploaded to your own account. However, we reserve the right to deny service if our tools are used to violate others privacy or intellectual property.      </p>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
      Please carefully review these Terms of Service (ToS) before using our website and application. For the complete details, refer to our full Terms of Service. Below are the key highlights for your convenience:
      </p>

      <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-2">
        <li>
          <span className="font-semibold">InstagramDownloader.cloud</span> is a self-developed and independent application/website. <span className="font-semibold">WE ARE NOT AFFILIATED WITH INSTAGRAM OR META.</span>
        </li>
        <li>
          We respect trademark rights and comply with trademark laws and regulations. Our trademark, <span className="font-semibold">InstagramDownloader.cloud™</span>, is created by our team and should be used only for and in relation to our Services, App, and Web.
        </li>
        <li>
          We accept advertisements (Ads) on our website and application to maintain and support our own research and development for non-commercial purposes. Ads appearing on our website and application may be delivered to Users by advertising partners who may set cookies.
        </li>
        <li>
          You may dismiss the use of cookies or cease access to our application and website at any time as you are not required to accept the Ads.
        </li>
      </ul>

      <p className="text-sm text-gray-700 dark:text-gray-300 mt-4">
        By accessing and using our application and website, you signify your acceptance of our policy and ToS, including any updates. If you do not agree with any content, please do not use our application and website.
      </p>
    </div>  
    </section>
    <section className="flex flex-col items-center justify-center gap-4">
    <Faq/>    
    </section>
    </div>
  );
}
