// pages/contact.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - InstaDownloader",
  description: "Contact the InstaDownloader.cloud team with your questions or concerns.",
  keywords: ["Contact", "Support", "InstaDownloader"],
};

const ContactPage = () => {
  return (
    <div style={{minHeight:'75vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className="my-4 flex flex-col rounded-lg border p-8 max-w-xl mx-auto" >
      <h1 className="mb-4 text-2xl font-bold">Contact Us</h1>
      <p className="text-sm mb-4">
        If you have any questions, feedback, or concerns, feel free to reach out to us at:
      </p>
      <a
        href="mailto:support@multishells.com"
        className="text-blue-600 font-medium hover:underline"
      >
        support@multishells.com
      </a>
    </div>
    </div>
  );
};

export default ContactPage;
