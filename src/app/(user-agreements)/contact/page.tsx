// pages/contact.tsx
import { Metadata } from "next";
import { Mail } from "lucide-react"; // Optional: icon library (Lucide)

export const metadata: Metadata = {
  title: "Contact Us - InstaDownloader",
  description: "Contact the InstaDownloader.cloud team with your questions or concerns.",
  keywords: ["Contact", "Support", "InstaDownloader"],
};

const ContactPage = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          We'd love to hear from you. Whether you have a question, feedback, or need help — reach out!
        </p>

        <div className="flex items-center space-x-4 justify-center mb-6">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Email Support</h2>
            <a
              href="mailto:support@multishells.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@multishells.com
            </a>
          </div>
        </div>

        {/* Optional: Contact form section (currently hidden) */}
        {/* <form className="mt-8 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default ContactPage;
