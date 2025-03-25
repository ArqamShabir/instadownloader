import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";

import "@/styles/globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Instagram Video Downloader - Download HD Videos & Reels",
  description: "Download Instagram videos, reels, and stories in HD quality. Our Instagram Video Downloader is fast, free, and easy to use. Try it now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "bg-background overflow-x-hidden font-sans antialiased"
        )}
      >

          <ReactQueryProvider>
            <Navbar />
            <main className="relative overflow-y-auto px-2 sm:px-4">
              {children}
            </main>
            <Footer />
          </ReactQueryProvider>
      </body>
    </html>
  );
}







