import dts from 'vite-plugin-dts';
import path from 'path';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    eslint(),
    dts({
      tsconfigPath: './tsconfig.dts.json',
      entryRoot: 'lib',
      outDir: 'dist',
      rollupTypes: true
    })
  ],
  server: {
    watch: {
      include: ['src/**', 'lib/**']
    }
  },
  test: {
    environment: 'happy-dom',
    setupFiles: ['./test-setup.js'],
    coverage: {
      include: ['lib/']
    }
  },
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, 'lib/ScrollLock.ts'),
      name: 'ScrollLock',
      fileName: (format) => `ScrollLock.${format}.js`
    },
  }
});
