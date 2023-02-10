import type { Plugin } from '@ice/app/esm/types';

const PLUGIN_NAME = 'custom-plugin';

const plugin: Plugin = () => ({
  name: PLUGIN_NAME,
  setup: ({ onHook, onGetConfig }) => {
    onGetConfig(config => {
      config.transformPlugins ??= [];
      config.transformPlugins.push({
        name: 'add-log',
        transformInclude(id) {
          return !!id.match(/app\.ts?$/)
        },
        transform(code) {
          return 'console.log("hello ice.js 3");\n' + code;
        }
      })
    })

    onHook('after.build.compile', async () => {
      console.log('after build compile call');
    })
  }
})

export default plugin;
