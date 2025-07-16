import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes CSS de forma eficiente, removendo duplicatas e mesclando
 * classes Tailwind CSS.
 *
 * @param inputs - Classes a serem combinadas.
 * @returns String com as classes combinadas.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
