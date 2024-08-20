import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import path from 'path';
import packageJson from './package.json'

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
      remotes: {
        'host': 'http://localhost:3000/assets/remoteEntry.js'
      },
      shared: packageJson.dependencies,
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
})
