// pages/terms-of-service.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - InstaDownloader",
  description: "Read the terms and conditions for using InstaDownloader.cloud. Know your rights and responsibilities.",
  keywords: ["Terms of Service", "Terms and Conditions", "InstaDownloader", "Legal Agreement"],
};

const TermsOfServicePage = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 dark:bg-gray-900 py-12 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Terms of Service
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          These Terms of Service ("Terms") govern your use of the website https://instadownloader.cloud ("Site"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with these Terms, you may not use our Site.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">1. Use of the Site</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          InstaDownloader.cloud provides a tool to download public content from supported social platforms. You agree to use the Site only for lawful purposes and in compliance with all applicable laws.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">2. Intellectual Property</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          All content on this Site, including but not limited to text, graphics, logos, and software, is the property of InstaDownloader.cloud or its content suppliers and is protected by copyright and other intellectual property laws.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">3. User Responsibilities</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          You are responsible for ensuring that your use of the Site does not violate any laws or regulations, including copyright laws. You agree not to download or distribute copyrighted content without proper authorization.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">4. Third-Party Content</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Site may contain links to third-party websites. We are not responsible for the content, accuracy, or opinions expressed on such websites, and such websites are not investigated, monitored, or checked for accuracy or completeness.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">5. Limitation of Liability</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          InstaDownloader.cloud shall not be liable for any damages resulting from the use or inability to use the Site, including but not limited to indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">6. Termination</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We reserve the right to suspend or terminate your access to the Site at any time without prior notice if we suspect any violation of these Terms.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">7. Changes to Terms</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We may update or change these Terms at any time. Any changes will be posted on this page. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">8. Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions about these Terms, you may contact us at:{" "}
          <a href="mailto:quote.fiction1@gmail.com" className="text-blue-500 underline">
            quote.fiction1@gmail.com
          </a>
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          These Terms of Service were last updated on <strong>July 10, 2025</strong>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

