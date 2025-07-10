"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <nav
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo2.png"
              width={160}
              height={60}
              alt="InstaDownloader Logo"
              className="h-auto w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms</Link>
          <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy</Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>

       
      </nav>
    </header>
  );
}
