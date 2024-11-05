import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'

export default defineConfig({
    css: {
        transformer: 'lightningcss',
    },
    plugins: [cssInjectedByJsPlugin()],
    build: {
        outDir: './dist',
        lib: {
            entry: './src/index.js',
            name: 'Photoswipe',
            formats: ['iife','esm'],
            fileName: (format) => `[name].[format].js`
        },
        minify: true,
        sourcemap: false,
        emptyOutDir: true
    }
})