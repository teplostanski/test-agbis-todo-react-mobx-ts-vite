import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
const generateScopedName = '[name]__[local]___[hash:base64:5]'
//import crypto from 'crypto';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    modules: {
      //localsConvention: 'camelCase',
      generateScopedName
    },
  },
  base: './',
})
