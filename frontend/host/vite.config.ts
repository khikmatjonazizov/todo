import { defineConfig } from 'vite';
import federation from "@originjs/vite-plugin-federation";
import path from 'path'
import vue from '@vitejs/plugin-vue'
import packageJson from './package.json'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        'navbar': 'http://localhost:3001/assets/remoteEntry.js',
        'main_list': 'http://localhost:3002/assets/remoteEntry.js',
        'create_task': 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: packageJson.dependencies
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
  resolve: {
    alias: {
      'api': path.resolve(__dirname, '../../shared/api') // Указываем путь к папке
    }
  },
})