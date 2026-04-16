import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Variants } from "framer-motion";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const styles = {
  // Original Next.js padding with ! modifier
  paddingX: "sm:px-16! px-6!",
  paddingY: "sm:py-16! py-6!",
  padding: "sm:px-16! px-6! sm:py-16! py-10!",

  // Original Next.js Sizes (50px/25px) with ! modifier
  heroHeadText:
    "font-black text-white lg:text-[50px]! sm:text-[60px]! xs:text-[50px]! text-[30px]! lg:leading-[98px]! mt-2!",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[25px]! sm:text-[26px]! xs:text-[20px]! text-[16px]! lg:leading-[40px]!",

  sectionHeadText:
    "text-white font-black md:text-[50px]! text-white! sm:text-[50px]! xs:text-[40px]! text-[30px]!",
  sectionSubText:
    "sm:text-[18px]! text-[14px]! text-white! uppercase tracking-wider!",
};

export const textVariant = (delay?: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: string,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren?: number
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const EmailFormSchema = z.object({
  name: z.string().min(2).max(15),
  email: z.string().email(),
  message: z.string().min(20).max(300),
});