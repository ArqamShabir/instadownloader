// pages/disclaimer.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - InstaDownloader",
  description: "Disclaimer for InstaDownloader.cloud regarding affiliation, copyright, and fair use.",
  keywords: [
    "Disclaimer",
    "Instagram Video Downloader Legal",
    "InstaDownloader.cloud",
  ],
  authors: [{ name: "InstagramDownloader.cloud" }],
  robots: "index, follow",
  openGraph: {
    title: "Disclaimer - InstaDownloader",
    description: "Disclaimer for InstaDownloader.cloud regarding affiliation, copyright, and fair use.",
    url: "https://instadownloader.cloud/disclaimer",
    type: "website",
  },
  alternates: {
    canonical: "https://instadownloader.cloud/disclaimer",
  },
};

const DisclaimerPage = () => {
  return (
    <div style={{minHeight:'75vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className="my-4 flex flex-col rounded-lg border p-8">
      <h1 className="mb-4 text-2xl font-bold">Disclaimer</h1>

      <section className="text-sm mb-4">
        <p>
          InstaDownloader.cloud is an independent tool that allows users to download public content from Instagram. 
          We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Instagram or Meta Platforms, Inc.
        </p>
      </section>

      <section className="text-sm mb-4">
        <h2 className="text-xl font-semibold mb-2">Copyright Content</h2>
        <p>
          All content downloaded using this tool is the intellectual property of its respective owners. 
          Users are solely responsible for ensuring they have the right to download or reuse such content. 
          InstaDownloader.cloud does not host or store any Instagram content on its servers.
        </p>
      </section>

      <section className="text-sm mb-4">
        <h2 className="text-xl font-semibold mb-2">Fair Use Notice</h2>
        <p>
          This website may contain copyrighted material. Such material is made available for educational, informational, or commentary purposes only. 
          We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the U.S. Copyright Law.
        </p>
      </section>

      <section className="text-sm">
        <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
        <p>
          InstaDownloader.cloud is not liable for any misuse of the content downloaded using our service. 
          The user is fully responsible for compliance with applicable laws and usage rights.
        </p>
      </section>
    </div>
    </div>
  );
};

export default DisclaimerPage;
