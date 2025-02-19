"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Button({ className }) {
  const [submiting, setSubmit] = useState(false);
  return (
    <button
      type="submit"
      className={cn("bg-red-60 w-1/2 p-2 m-2 rounded text-white", className, {
        "bg-amber-600": submiting,
      })}
      onClick={() => {
        setSubmit(true);
      }}
    >
      提交
    </button>
  );
}

export default function Home() {
  return <Button className="bg-blue-600" />;
}
