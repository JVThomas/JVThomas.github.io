import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/JVThomas.github.io/',
  plugins: [react({
    jsxImportSource: '@emotion/react',
})],
})
