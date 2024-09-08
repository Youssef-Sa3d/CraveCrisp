import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_SANITY_PROJECT_ID: process.env.VITE_SANITY_PROJECT_ID,
      VITE_SANITY_DATASET: process.env.VITE_SANITY_DATASET,
    },
  },
})
