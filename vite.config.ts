import vueI18n from '@intlify/vite-plugin-vue-i18n';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

import { fetchEnv } from './src/api/nodeProxy';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => {
  const env = loadEnv(mode, __dirname);
  const { targetUrl } = fetchEnv(env.VITE_NODE_ENV); // 设置域名和端口

  return {
    base: '/',
    define: {
      ENV: {
        TARGET_URL: targetUrl,
        NODE_ENV: env.VITE_NODE_ENV,
      },
    },
    server: {
      strictPort: true,
      port: 5173,
      hmr: {
        protocol: 'ws',
        host: 'localhost', // 只能填 local 地址，不能填远程服务器的 ip
        clientPort: 5173,
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      vueI18n({
        // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
        // compositionOnly: false,
        // you need to set i18n resource including paths !
        include: path.resolve(__dirname, './src/locales/**'),
      }),
      //自动按需引入组件库
      Components({
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
            resolveIcons: true, //自动import图标
          }),
        ],
        dts: 'src/types/global/components.d.ts',
      }),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: ['vue'], //自动import vue hook
        dts: 'src/types/global/auto-imports.d.ts',
      }),
      EnvironmentPlugin({
        TARGET_URL: targetUrl,
      }),
      // script setup语法糖增强插件
      VueSetupExtend(),
      process.env.REPORT
        ? visualizer({
            open: true,
            gzipSize: true,
            filename: path.resolve(__dirname, './stats.html'),
          })
        : null,
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        less: {
          charset: false,
          // additionalData: '@import "./src/assets/less/common.less";'
        },
      },
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'), //指定输出路径
      assetsDir: 'assets', //指定生成静态资源的存放路径
      // minify: env.VITE_NODE_ENV === 'production',
      sourcemap: true,
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          dir: 'dist',
          manualChunks(id: string) {
            // tdesign，单独拆包
            if (id.includes('node_modules/tdesign-vue-next')) {
              return 'tdesign-vue-next';
            }
          },
        },
      },
    },
  };
});
