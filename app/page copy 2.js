import { twMerge } from "tailwind-merge";

function Button({ className }) {
  return (
    <button
      type="submit"
      className={twMerge(
        "bg-red-60 w-1/2 p-2 m-2 rounded text-white",
        className
      )}
    >
      提交
    </button>
  );
}

export default function Home() {
  return <Button className="bg-blue-600" />;
}
