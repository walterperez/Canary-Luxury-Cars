import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: { proxy: { "/api": "http://localhost:3001" } },
    build: { target: "es2020" },
    base: process.env.VITE_GITHUB_PAGES ? "/Canary-Luxury-Cars/" : "",
  };
});
