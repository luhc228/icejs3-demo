import { defineConfig } from '@ice/app';
import request from '@ice/plugin-request';

export default defineConfig(() => ({
  alias: {
    components: './src/components'
  },
  plugins: [
    request(),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  proxy: {
    '/api': {
      target: 'https://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    }
  }
}));
