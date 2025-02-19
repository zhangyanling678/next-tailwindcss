"use client";

import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { cva } from "class-variance-authority";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const button = cva("rounded p-2", {
  variants: {
    intent: {
      default: ["bg-blue-600", "text-white"],
      primary: ["border", "border-black", "bg-white", "text-black"],
      dashed: ["border", "border-dashed", "border-black", "bg-white"],
      link: ["text-blue-600"],
      text: ["text-black"],
    },
    size: {
      small: ["px-2", "py-2"],
      middle: ["px-4", "py-2"],
      large: ["px-6", "py-2"],
    },
  },
  defaultVariants: {
    intent: "default",
    size: "middle",
  },
});

function Button({ type, size }) {
  return (
    <button type="submit" className={button({ intent: type, size })}>
      Default Button
    </button>
  );
}

export default function Home() {
  return (
    <div className="flex gap-4 p-4">
      <Button />
      <Button type="dashed" size="small" />
    </div>
  );
}
