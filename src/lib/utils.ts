/**
 * podcasts
 * utils.ts
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
