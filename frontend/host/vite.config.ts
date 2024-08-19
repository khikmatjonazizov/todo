import { defineConfig } from 'vite';
import federation from "@originjs/vite-plugin-federation";

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
        'react': {
          requiredVersion: '^18.3.1'
        },
        'react-dom': {
          requiredVersion: '^18.3.1',
        },
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
  }
})