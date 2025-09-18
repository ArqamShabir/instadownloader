import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - InstaDownloader",
  description: "Read our privacy policy to understand how InstaDownloader.cloud handles your data.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "InstaDownloader",
    "User Data",
    "Security",
  ],
};

const PrivacyPolicyPage = () => {
  return (
    <div className="flex min-h-[80vh] justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
      <div className="w-full max-w-4xl rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 md:p-12">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Privacy Policy
        </h1>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          At <strong>InstaDownloader.cloud</strong>, accessible from https://instadownloader.cloud, one of our main priorities is the privacy of our visitors. This Privacy Policy explains the types of information we collect and how we use it.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Information We Collect</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We do not collect personal data such as names, phone numbers, or addresses. However, like most websites, we gather limited non-personal data through cookies and analytics services such as:
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Referring website</li>
          <li>Date and time of visit</li>
          <li>Pages visited on our site</li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Cookies</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          InstaDownloader.cloud uses cookies to enhance your experience. You can disable cookies in your browser settings, but doing so may affect some site functionality.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">How We Use Information</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          The information we collect helps us:
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
          <li>Improve and personalise the user experience</li>
          <li>Monitor usage patterns and site performance</li>
          <li>Protect the site and keep downloads secure</li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Third-Party Services</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We may use third-party services such as Google Analytics or advertising partners. These services may use cookies and similar technologies in line with their own privacy policies.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Children's Privacy</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          InstaDownloader.cloud does not knowingly collect personally identifiable information from children under 13. If you believe your child has provided such information, please contact us immediately.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Changes to This Policy</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We may update this Privacy Policy from time to time. Any changes will appear on this page with an updated revision date.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions or concerns about this Privacy Policy, please email us at{" "}
          <a className="text-blue-500 underline" href="mailto:quote.fiction1@gmail.com">
            quote.fiction1@gmail.com
          </a>
          .
        </p>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          This policy was last updated on <strong>July 10, 2025</strong>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
