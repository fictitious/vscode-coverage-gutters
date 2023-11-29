import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: 'src/extension.ts',
            formats: ['cjs']
        },
        rollupOptions: {
            external: ['vscode', 'fs', 'path']
        },
        minify: false
    }
});
