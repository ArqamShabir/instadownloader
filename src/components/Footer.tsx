import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-secondary-foreground bg-background/50 h-8 w-full text-center">
      <div className="border-input flex-col items-center justify-between border-t px-4 py-2">
        <div aria-label="Disclaimer" className="text-sm font-semibold">
          We are not affiliated with Instagram or Meta
          <p className="font-light">© 2025 <Link className="text-blue-600" href="https://instadownloader.cloud">InstaDownloader</Link> 5.0.0. All rights reserved.</p>
        </div>
        <div className="flex-col items-center gap-1 text-sm hideclass">
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <span aria-hidden="true" className="mx-2 select-none">
            |
          </span>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span aria-hidden="true" className="mx-2 select-none">
            |
          </span>
          <Link href="/discalaimer" className="hover:underline">
            Disclaimer
          </Link>
          <span aria-hidden="true" className="mx-2 select-none">
            |
          </span>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
