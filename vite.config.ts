// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/DsaList/", // 👈 VERY IMPORTANT for GitHub Pages
	plugins: [react()],
});
