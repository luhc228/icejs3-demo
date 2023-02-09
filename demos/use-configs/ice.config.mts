import { defineConfig } from '@ice/app';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

export default defineConfig(() => ({
  alias: {
    components: './src/components'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  }
}));
