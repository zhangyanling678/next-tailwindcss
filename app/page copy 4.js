"use client";

import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Button({
  type = "default",
  size = "middle",
  children = "Default Button",
}) {
  return (
    <button
      type="submit"
      className={cn("rounded p-2", {
        "bg-blue-600 text-white": type === "default",
        "border border-black bg-white text-black": type === "primary",
        "border border-dashed border-black bg-white": type === "dashed",
        "text-blue-600": type === "link",
        "text-black": type === "text",
        "px-2 py-2": size === "small",
        "px-4 py-2": size === "middle",
        "px-6 py-2": size === "large",
      })}
    >
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <div className="p-4 flex gap-4">
      <Button />
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </div>
  );
}
