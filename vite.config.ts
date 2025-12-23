import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Removed componentTagger import

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./", 
  server: {
    host: "::",
    port: 8080,
  },
  // Removed componentTagger from plugins
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));