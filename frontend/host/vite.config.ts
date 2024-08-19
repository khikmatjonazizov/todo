import { defineConfig } from 'vite';
import federation from "@originjs/vite-plugin-federation";
import path from 'path'

export default defineConfig({
  plugins: [
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        'navbar': 'http://localhost:3001/assets/remoteEntry.js',
        'main_list': 'http://localhost:3002/assets/remoteEntry.js',
        'create_task': 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: {
        'vue': {
          requiredVersion: '3.4.38'
        },
        'react': {
          requiredVersion: '18.3.1'
        },
        'react-dom': {
          requiredVersion: '18.3.1',
        },
        'api': {
          requiredVersion: '1.0.0',
        }
      }
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