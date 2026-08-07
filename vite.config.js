import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: { proxy: { "/api": "http://localhost:3001" } },
    build: { target: "es2020" },
    base: process.env.GITHUB_PAGES ? "/Canary-Luxury-Cars/" : "",
    define: {
      __APP_ENV__: JSON.stringify(process.env.NODE_ENV),
      __GITHUB_PAGES__: JSON.stringify(process.env.GITHUB_PAGES),
    },
  };
});
