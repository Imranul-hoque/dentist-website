import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateParagraph(paragraph : string, wordLimit : number = 15) {
  const wordsArray = paragraph.split(" ");
  const truncated = wordsArray.slice(0, wordLimit).join(" ");
  return truncated;
}
