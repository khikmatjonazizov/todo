import { defineConfig } from 'vite'
import externalize from 'vite-plugin-externalize-dependencies';

const externalDependencies = [
  "single-spa",
  "atomic-router"
]

export default defineConfig(({ command }) => {
  return {
    build: {
      rollupOptions: {
        input: "src/todo-utils.ts",
        output: {
          format: "esm",
        },
        external: externalDependencies
      },
    },
    plugins: [
      externalize({ externals: externalDependencies })
    ],
  }
})