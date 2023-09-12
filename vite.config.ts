import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//const generateScopedName = '[name]__[local]___[hash:base64:5]'
import crypto from 'crypto';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    modules: {
      //localsConvention: 'camelCase',
      generateScopedName: (name, filename, css) => {
        const componentName = filename
          .replace(/\.\w+$/, '')
          .replace(/\.module+$/, '')
          .split('/')
          .pop(); 

        // Generate hash
        const hash = crypto
          .createHash('md5')
          .update(css)
          .digest('base64')
          .substring(0, 5); 

        return `${componentName}__${name}__${hash}`;
      },
    },
  },
  base: './',
})
