// pages/cookie-policy.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - InstaDownloader",
  description: "Learn how InstaDownloader.cloud uses cookies to improve your experience.",
  keywords: ["Cookie Policy", "Privacy", "InstaDownloader", "Tracking Cookies"],
};

const CookiePolicyPage = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 dark:bg-gray-900 py-12 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Cookie Policy
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This Cookie Policy explains how InstaDownloader.cloud uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">1. What are cookies?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Cookies are small data files that are placed on your device when you visit a website. Cookies are widely used to make websites work or work more efficiently, as well as to provide reporting information.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">2. Why do we use cookies?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We use cookies for several reasons. Some cookies are required for technical reasons to ensure our website operates efficiently. Others help us improve user experience, measure site usage, and deliver relevant advertisements.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">3. Types of cookies we use</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><strong>Essential Cookies:</strong> Required for website functionality.</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site.</li>
          <li><strong>Functionality Cookies:</strong> Remember your preferences and settings.</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and track ad campaign performance.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">4. How can you control cookies?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          You can set your web browser to refuse or delete cookies through your browser settings. Please note that some features of our website may not function properly if you disable cookies.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">5. Third-party cookies</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Some cookies may be set by third-party services such as Google Analytics or advertising partners. We do not control these cookies, and you should check the respective third-party websites for more information.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">6. Updates to this policy</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">7. Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions about our use of cookies or this policy, please contact us at:{" "}
          <a href="mailto:support@multishells.com" className="text-blue-500 underline">
            support@multishells.com
          </a>
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          This Cookie Policy was last updated on <strong>July 10, 2025</strong>.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
