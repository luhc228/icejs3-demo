import { defineConfig } from '@ice/app';
import customPlugin from './plugin';

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;
export default defineConfig(() => ({
  // Set your configs here.
  minify,
  plugins: [
    customPlugin(),
  ]
}));
