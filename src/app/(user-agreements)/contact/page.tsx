import { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - InstaDownloader",
  description: "Contact the InstaDownloader.cloud team with your questions or partnership ideas.",
  keywords: ["Contact", "Support", "InstaDownloader"],
};

const ContactPage = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:p-12">
        <h1 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl">
          Get in touch
        </h1>
        <p className="mt-3 text-center text-sm text-slate-600 dark:text-slate-300">
          We would love to hear from you. Whether you have a question, feedback, or media request, reach out any time.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/50">
            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Email support</h2>
            <a
              href="mailto:quote.fiction1@gmail.com"
              className="text-blue-600 transition hover:underline dark:text-blue-400"
            >
              quote.fiction1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
