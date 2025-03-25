"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="h-fit w-full">
      <nav
        className={cn(
          "z-50",
          "flex h-[3.5rem] px-4",
          "bg-accent/20 w-full items-center border-b"
        )}
      >
        <div className="hidden select-none text-xl font-extrabold uppercase md:block">
        <Link href="/">
        <Image src="/images/logo2.png" width={220} height={100} alt="Instagram Video Downloader"/>
        </Link>
        </div>
        <MobileNav className="md:hidden" />
        <div className="ml-auto flex items-center gap-4 hidden">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
