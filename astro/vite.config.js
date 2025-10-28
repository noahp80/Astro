import { defineConfig } from "astro/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Astro/",
});
