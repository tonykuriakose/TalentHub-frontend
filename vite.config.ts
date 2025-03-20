import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname not being available
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 3000 },
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "src/core")
    }
  }
});
