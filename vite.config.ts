// import { defineConfig, loadEnv  } from 'vite'
// import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),

//   ],
// })

// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
//     },
//     plugins: [react()],
//   }
// })


import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Učitajte environment varijable
dotenv.config();

// Definišite konfiguraciju Vite
export default defineConfig(({ mode }) => ({
  define: {
    'process.env.API_TOKEN': JSON.stringify(process.env.API_TOKEN),
    'process.env.API_URL': JSON.stringify(process.env.API_URL),
    'process.env.API_UPLOAD': JSON.stringify(process.env.API_UPLOAD),
  },
  plugins: [react()],
}));

