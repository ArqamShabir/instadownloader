import { DM_Sans as FontSans } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
       <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2897420441745530"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XCVGZ9EHTJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XCVGZ9EHTJ');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning
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







