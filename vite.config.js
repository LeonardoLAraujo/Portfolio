import { fileURLToPath, URL } from 'url'
import { defineConfig } from "vite";
 
export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
    },
    assetsInclude: ['**/*.mp4']
});