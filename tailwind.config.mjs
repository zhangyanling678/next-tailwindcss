const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
const tailwindcssConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-indigo-600"],
  // blocklist: ["container", "collapse"], // 如果自己定义了同名的类名不想用 tailwindcss 的，可以设置到 blocklist
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default withTV(tailwindcssConfig);
