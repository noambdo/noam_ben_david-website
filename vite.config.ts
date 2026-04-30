import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
  resolve: {
    // Prefer .tsx/.ts over stale .js compiled artifacts that may exist locally.
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
});
