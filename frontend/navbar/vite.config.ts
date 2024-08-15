import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'navbar',
      filename: 'remoteEntry.js',
      exposes: {
        './app': path.resolve(__dirname, 'src', 'app', 'index.tsx')
      }
    })
  ],
})
