"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this Instagram downloader free to use?",
    answer:
      "Yes. Every reel download is free, unlimited, and delivered directly from our server without extra software.",
  },
  {
    question: "Do I need to log in with Instagram?",
    answer:
      "No. We never ask for your Instagram credentials and we do not store personal information.",
  },
  {
    question: "Why am I not seeing the download button?",
    answer:
      "Make sure the reel is public and that the copied link is correct. Private or expired reels cannot be fetched.",
  },
  {
    question: "Does this work on phones and desktops?",
    answer:
      "Absolutely. The downloader works in modern browsers on iOS, Android, Windows, and macOS.",
  },
  {
    question: "Can I save Instagram Stories or IGTV?",
    answer:
      "Stories and IGTV clips that share the same public URL format can be downloaded just like reels.",
  },
  {
    question: "Where can I find my saved video?",
    answer:
      "Most browsers place the file in the Downloads folder. You can change the destination in your browser settings if you prefer.",
  },
  {
    question: "Who do I contact for support or partnerships?",
    answer:
      "Send an email to quote.fiction1@gmail.com and we will get back to you quickly.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-xl shadow-blue-200/30 backdrop-blur dark:border-blue-900/40 dark:bg-slate-950/80 dark:shadow-blue-900/30">
      <header className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Everything you need to know about saving Instagram reels quickly and safely.
        </p>
      </header>
      <div className="mt-8 divide-y divide-blue-100 dark:divide-blue-900/40">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-lg font-bold text-blue-500 transition dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300">
                  {isOpen ? "-" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="pb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
