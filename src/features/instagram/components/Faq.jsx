"use client"
import { useState } from "react";

const faqs = [
  {
    question: "What is an Instagram video downloader?",
    answer:
      "An Instagram video downloader is an online tool that lets you download Instagram photos, videos, and IGTV content for offline use. Our tool provides a seamless experience for saving Instagram media.",
  },
  {
    question: "Do I need to log in with my Instagram account?",
    answer:
      "No, you don't need to sign in. Our downloader does not require any personal information, ensuring a secure and anonymous experience.",
  },
  {
    question: "Can I save videos directly from Instagram?",
    answer:
      "Instagram does not allow direct downloads from the platform. However, you can use our tool to easily download videos by following simple steps.",
  },
  {
    question: "Is the download service free?",
    answer: "Yes, our Instagram downloader is completely free with no limitations on downloads.",
  },
  {
    question: "Can I download content from a private Instagram account?",
    answer: "No, you can only download media from public Instagram accounts.",
  },
  {
    question: "Can I save Instagram stories?",
    answer:
      "Yes, you can download Instagram stories. Copy the story link and paste it into our downloader for instant access.",
  },
  {
    question: "Does this work on computers?",
    answer:
      "Yes, our tool supports downloads on desktops, laptops, and mobile devices.",
  },
  {
    question: "Can I download Instagram content on Android?",
    answer:
      "Yes, simply copy the post link, paste it into our tool, and save the content to your device.",
  },
  {
    question: "Why is my video playing instead of downloading?",
    answer:
      "If the video plays instead of downloading, right-click on the video and select 'Save As' to download it.",
  },
  {
    question: "Where are my downloaded videos saved?",
    answer:
      "On most devices, downloaded videos are stored in the 'Downloads' folder.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-8 mx-auto p-6 border rounded-lg shadow-lg" style={{width:'100%',maxWidth:'1200px'}}>
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="w-full text-left flex justify-between items-center my-4 bg-gray-100 hover:bg-gray-200 rounded-md"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium ">{faq.question}</span>
              <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 mb-4 bg-gray-50 rounded-md">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
