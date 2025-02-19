"use client";

import { useState } from "react";

export default function Home() {
  // const colorVariants = {
  //   blue: "bg-blue-600 hover:bg-blue-500 text-white",
  //   red: "bg-red-500 hover:bg-red-400 text-white",
  //   yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  // };
  const [color, setColor] = useState("indigo");
  return (
    <button
      type="submit"
      // className={`${colorVariants[color]} disabled:bg-gray-500 py-2 px-4 rounded w-1/2 m-2`}
      className={`bg-${color}-600 text-white disabled:bg-gray-500 py-2 px-4 rounded w-1/2 m-2`}
    >
      提交
    </button>
  );
}
