import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-redux', 'redux-persist', 'redux-persist/integration/react'], // Add react-redux to external if necessary
    },
  },
})
