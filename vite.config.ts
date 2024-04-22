import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { createHtmlPlugin } from 'vite-plugin-html'

const modeToTitleMap = new Map([
  ['development-dev', '-本地环境-dev'],
  ['development-test', '-本地环境-test'],
  ['development-prod', '-本地环境-prod'],
  ['production-dev', '-dev环境'],
  ['production-test', '-test环境'],
  ['production-prod', ''],
])

// https://vitejs.dev/config
// https://vitest.dev/config
export default defineConfig(({ mode }) => {
  const __DEV__ = mode.includes('development')
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  const developmentProxyTargetMap = new Map([
    ['development-dev', env.VITE_DEV_URL],
    ['development-test', env.VITE_TEST_URL],
    ['development-prod', env.VITE_PROD_URL],
  ])

  return {
    define: {
      __DEV__,
    },
    plugins: [
      react(),
      tsconfigPaths(),
      createHtmlPlugin({
        inject: {
          data: {
            title: modeToTitleMap.get(mode),
          },
        },
      }),
    ],
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: '.vitest/setup',
      include: ['**/test.{ts,tsx}'],
    },
    server: {
      proxy: {
        '/api/': {
          target: developmentProxyTargetMap.get(mode),
          changeOrigin: true,
          rewrite: urlPath => urlPath.replace(/^\/api/, ''),
        },
      },
      port: 8080,
    },
  }
})
