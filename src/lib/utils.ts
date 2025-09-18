import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getTimedFilename = (name: string, ext: string) => {
  const timeStamp = Math.floor(Date.now() / 1000).toString();
  return `${name}-${timeStamp}.${ext}`;
};

export const sanitizeFilename = (
  filename: string,
  fallback = getTimedFilename("instagram-video", "mp4")
) => {
  const fallbackExt = fallback.split(".").pop() ?? "mp4";
  const cleanedInput = (filename || "")
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .replace(/[<>:"/\\|?*]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleanedInput) {
    return fallback;
  }

  const hasExt = /\.[a-zA-Z0-9]{1,6}$/.test(cleanedInput);
  const basePart = hasExt
    ? cleanedInput.slice(0, cleanedInput.lastIndexOf("."))
    : cleanedInput;
  const extPart = hasExt
    ? cleanedInput.slice(cleanedInput.lastIndexOf(".") + 1)
    : fallbackExt;

  const safeBase = basePart
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 140) || "instagram-video";
  const safeExt = extPart.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) || fallbackExt;

  return `${safeBase}.${safeExt}`;
};

export function downloadFile(
  url: string,
  options: { filename?: string; target?: string } = {}
) {
  const a = document.createElement("a");
  a.href = url;
  if (options.filename) {
    a.download = options.filename;
  }
  if (options.target) {
    a.target = options.target;
  }
  a.rel = "noopener";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  if (url.startsWith("blob:")) {
    window.setTimeout(() => window.URL.revokeObjectURL(url), 0);
  }
}

