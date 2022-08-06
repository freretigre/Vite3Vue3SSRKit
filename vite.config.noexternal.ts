import config from './vite.config'
/**
 * @type {import('vite').UserConfig}
 */
export default Object.assign(config, {
  ssrOptions: {
    serverConfig: {
      build: {
        ssr: './src/server',
      },
      ssr: {
        noExternal: /./,
      },
    },
  },
})
