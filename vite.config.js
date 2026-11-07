import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/vite
export default defineConfig({
  plugins: [react(), vike(), svgr()],
  base: "/blog/",
});
