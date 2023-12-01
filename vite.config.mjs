import {defineConfig} from '@pakaf/dev-shared-configs/vite.common.config.js';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: 'src/extension.ts',
            formats: ['cjs']
        },
        rollupOptions: {
            external: ['vscode', 'fs', 'path', 'events', 'assert', 'util', 'timers', 'stream', 'string_decoder']
        },
        minify: false
    }
});
