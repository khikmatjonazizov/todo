import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'main_list',
      exposes: {
        './app': path.resolve(__dirname, 'src', 'App.vue')
      },
      shared: packageJson.dependencies,
    })
  ],
  build: {
    target: 'ESNext',
    minify: false,
  }
})
