import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            jpg: {
                quality: 85,
            },
            png: {
                quality: 10,
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
