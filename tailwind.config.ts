import { type Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [forms],
} satisfies Config;

export default config;
