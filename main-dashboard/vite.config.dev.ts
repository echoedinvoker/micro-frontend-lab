import { defineConfig, mergeConfig } from 'vite';
import federation from "@originjs/vite-plugin-federation";
import baseConfig from './vite.config.base';

export default defineConfig(mergeConfig(baseConfig, {
  plugins: [
    federation({
      name: 'main-app',
      remotes: {
        mdi: {
          external: 'http://localhost:8083/remoteEntry.js',
          format: 'var'
        }
      },
      shared: ['vue']
    })
  ],
}));
