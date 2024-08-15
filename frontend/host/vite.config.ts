import { defineConfig } from 'vite';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        'navbar': 'http://localhost:3001/assets/remoteEntry.js',
        'main_list': 'http://localhost:3002/assets/remoteEntry.js'
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
})