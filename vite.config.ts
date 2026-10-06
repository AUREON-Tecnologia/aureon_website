import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    rollupOptions: {
      // Multi-page: the home (React) plus static legal pages that work without JavaScript.
      input: {
        main: path.resolve(__dirname, "index.html"),
        privacidad: path.resolve(__dirname, "privacidad/index.html"),
        terminos: path.resolve(__dirname, "terminos/index.html"),
        eliminacionDeDatos: path.resolve(__dirname, "eliminacion-de-datos/index.html"),
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
