// pages/privacy-policy.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - InstaDownloader",
  description: "Read our privacy policy to understand how InstaDownloader.cloud handles your data.",
  keywords: ["Privacy Policy", "Data Protection", "InstaDownloader", "User Data", "Security"],
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 dark:bg-gray-900 py-12 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Privacy Policy
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          At <strong>InstaDownloader.cloud</strong>, accessible from https://instadownloader.cloud, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that are collected and recorded by us and how we use it.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Information We Collect</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We do not collect personal data such as names, phone numbers, or addresses. However, like most websites, we collect some non-personal data through cookies and analytics services such as:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li>IP Address</li>
          <li>Browser type and version</li>
          <li>Referring website</li>
          <li>Date/time of visit</li>
          <li>Pages visited on our site</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Cookies</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          InstaDownloader.cloud uses cookies to enhance your user experience. You can choose to disable cookies through your browser settings. However, doing so may affect some functionalities of the site.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">How We Use Your Information</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li>Improve and personalize the user experience</li>
          <li>Monitor and analyze usage and trends</li>
          <li>Ensure the site is functioning securely and efficiently</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Third-Party Services</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We may use third-party services such as Google Analytics or advertising networks. These services may use cookies and similar technologies to collect data in accordance with their own privacy policies.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Children’s Privacy</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          InstaDownloader.cloud does not knowingly collect any personally identifiable information from children under the age of 13. If you believe your child provided this kind of information, please contact us immediately.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Changes to This Policy</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions or concerns about this Privacy Policy, please contact us at:{" "}
          <a
            href="mailto:support@multishells.com"
            className="text-blue-500 underline"
          >
            support@multishells.com
          </a>
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          This policy was last updated on <strong>July 10, 2025</strong>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
