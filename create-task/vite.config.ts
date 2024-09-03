import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import externalize from 'vite-plugin-externalize-dependencies';

const externalDependencies = [
  "single-spa",
  "react",
  "react-dom",
  "react-dom/client",
  "react/jsx-dev-runtime",
  "react/jsx-runtime",
  "@todo/utils",
]

export default defineConfig(({ command }) => {
  return {
    build: {
      rollupOptions: {
        input: "src/todo-create-task.tsx",
        output: {
          format: "esm",
        },
        external: externalDependencies
      },
    },
    plugins: [
      react(),
      externalize({ externals: externalDependencies })
    ],
    server: {
      hmr: false
    }
  }
})