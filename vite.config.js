import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/scss/index.scss";`,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            components: path.resolve(__dirname, 'src/components/'),
            views: path.resolve(__dirname, 'src/views/'),
            icons: path.resolve(__dirname, 'src/components/icons/'),
        },
    },
    build: {
        sourcemap: false,
    },
    optimizeDeps: {
        exclude: ['node_modules'],
    },
})
