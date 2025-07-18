// pages/disclaimer.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - InstaDownloader",
  description:
    "Read our disclaimer to understand the limitations and responsibilities of using InstaDownloader.cloud.",
  keywords: ["Disclaimer", "Terms", "Legal", "InstaDownloader"],
};

const DisclaimerPage = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 dark:bg-gray-900 py-12 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Disclaimer
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The information provided by InstaDownloader.cloud is for general
          informational purposes only. All information on the Site is provided
          in good faith, however we make no representation or warranty of any
          kind, express or implied, regarding the accuracy, adequacy,
          validity, reliability, availability, or completeness of any
          information on the Site.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">External Links Disclaimer</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Site may contain (or you may be sent through the Site) links to
          other websites or content belonging to or originating from third
          parties. Such external links are not investigated, monitored, or
          checked for accuracy, adequacy, validity, reliability, availability,
          or completeness by us.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Downloads Disclaimer</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          InstaDownloader.cloud does not host any of the videos or media you
          download. All rights belong to their respective owners. Users are
          solely responsible for how they use the downloaded content. Make sure
          to comply with the terms and policies of the respective platforms.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Limitation of Liability</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          In no event shall InstaDownloader.cloud be liable for any direct,
          indirect, incidental, special, or consequential damages of any kind
          that arise out of or are in any way connected with the use of the
          Site or the content provided.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Consent</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Update</h2>
        <p className="text-gray-700 dark:text-gray-300">
          This disclaimer was last updated on <strong>July 10, 2025</strong>. If we update or make changes to this
          document, those changes will be posted here.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;
