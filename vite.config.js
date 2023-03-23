import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    plugins:
        [
            react(), mkcert()
        ],
    root: 'src/',
    publicDir: "../public/",
    base: './',
    server:
    {
        https: true,
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        minify: false
    }
}