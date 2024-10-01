import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'

export default defineConfig({
    css: {
        transformer: 'lightningcss',
    },
    plugins: [cssInjectedByJsPlugin()],
    build: {
        outDir: './dist/photoswipe',
        lib: {
            entry: './modules/photo-swipe/bundle.js',
            name: 'Photoswipe',
            formats: ['iife'],
            fileName: () => 'photoswipe.js'
        },
        minify: false,
        sourcemap: false,
        emptyOutDir: false
    }
})