import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Make sure you have these settings
        format: "es", // This specifies the module format
        assetFileNames: "assets/[name][extname]", // Or your preferred asset output configuration
      },
    },
  },
});
