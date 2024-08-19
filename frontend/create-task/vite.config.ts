import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'create_task',
      filename: 'remoteEntry.js',
      exposes: {
        './app': path.resolve(__dirname, 'src', 'app', 'index.tsx')
      },
      shared: {
        'react': {
          requiredVersion: '^18.3.1'
        },
        'react-dom': {
          requiredVersion: '^18.3.1'
        }
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
})
