import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left: Logo or Info */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We are not affiliated with Instagram or Meta.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()}{" "}
              <Link
                href="https://instadownloader.cloud"
                className="text-blue-600 hover:underline"
              >
                InstaDownloader
              </Link>{" "}
              5.0.0. All rights reserved.
            </p>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:underline">
              Cookie Policy
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
