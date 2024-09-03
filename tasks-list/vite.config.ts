import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import externalize from 'vite-plugin-externalize-dependencies';

const externalDependencies = [
  "single-spa",
  "vue",
  "@todo/utils",
]

export default defineConfig({
  plugins: [
    vue(),
    externalize({ externals: externalDependencies })
  ],
  build: {
    rollupOptions: {
      input: "src/main.ts",
      output: {
        format: "esm",
      },
      external: externalDependencies,
    },
  },
  server: {
    hmr: false,
  },
  resolve: {
    alias: {
      '@': '/src', // Важно для поддержки пути '@' к папке src
    },
  },
});