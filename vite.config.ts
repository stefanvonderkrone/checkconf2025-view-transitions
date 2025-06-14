import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            injectRegister: 'auto',
            includeAssets: ['**/*'],
            workbox: {
                globPatterns: ['**/*'],
                cleanupOutdatedCaches: true,
                maximumFileSizeToCacheInBytes: 50_000_000,
            },
        }),
    ],
});
