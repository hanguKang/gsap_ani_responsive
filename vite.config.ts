import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwind from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // jsxImportSource: '@emotion/react',
      // babel: {
      //   plugins: [
      //     ['@emotion/babel-plugin', { sourceMap: true }]
      //   ]
      // }
    }), 
   tailwind(),
  ],
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
 resolve: {
    alias: {
      // __dirname 대신 path.resolve와 import.meta.url 사용
      '@': path.resolve(path.dirname(import.meta.url), 'src'),
      '@/components': path.resolve(path.dirname(import.meta.url), 'src/components'),
      '@/types': path.resolve(path.dirname(import.meta.url), 'src/types'),
      '@/styles': path.resolve(path.dirname(import.meta.url), 'src/styles'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emotion: ['@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
  },
});
