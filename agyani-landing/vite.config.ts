import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __DEPLOY_TIME__: JSON.stringify(process.env.DEPLOY_TIME || new Date().toISOString()),
  },
})
