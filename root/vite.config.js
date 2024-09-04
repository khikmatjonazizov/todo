import { defineConfig } from 'vite'
import externalize from 'vite-plugin-externalize-dependencies';

const externalDependencies = [
  "single-spa",
  "react",
  "react-dom",
  "react-dom/client",
  "@todo/root-config",
  "@todo/utils",
  "@todo/navbar",
  "react/jsx-dev-runtime",
  "react/jsx-runtime",
  "atomic-router",
  "atomic-router-react",
  "effector-react"
]

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/todo-root-config.ts",
      output: {
        format: "esm",
      },
      external: externalDependencies
    },
  },
  plugins: [
    externalize({ externals: externalDependencies })
  ]
});