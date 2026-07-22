import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export { withBasePath, getBasePath, PAGES_BASE_PATH } from "@/lib/site"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
