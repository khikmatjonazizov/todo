import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'main_list',
      filename: 'remoteEntry.js',
      exposes: {
        './app': path.resolve(__dirname, 'src', 'App.vue'),
      },
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
})
