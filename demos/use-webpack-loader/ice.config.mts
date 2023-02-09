import { defineConfig } from '@ice/app';

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;
export default defineConfig(() => ({
  // Set your configs here.
  minify,
  webpack: (webpackConfig) => {
    webpackConfig.module?.rules?.push({
      test: /\.md$/,
      use: [
        {
          loader: "html-loader",
        },
        {
          loader: "markdown-loader",
          options: {
          },
        },
      ],
    })
    return webpackConfig;
  },
  ssr: false,
  ssg: false,
}));
