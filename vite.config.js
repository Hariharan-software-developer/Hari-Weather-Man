import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",  // or true to allow LAN access
    port: 5173,
    strictPort: true,
    hmr: false,         // <-- disables WebSocket HMR completely
  },
});
