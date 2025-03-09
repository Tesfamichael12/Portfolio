import { defineConfig } from "vite";

export default defineConfig({
  // Configuration options
  root: ".",
  build: {
    outDir: "./dist",
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src", // Alias for the src directory
    },
  },
});
