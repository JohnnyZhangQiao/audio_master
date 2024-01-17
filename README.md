# 项目介绍
Coming soon...
# 主要技术栈

- 编程： `Vue3.x` + `Typescript`
- 构建工具： `Vite`
- 路由 | 状态管理： `vue-router` + `Pinia`
- UI Element： `TDesign`

# 工程目录

```bash
.
├── .editorconfig
├── .env.production
├── .env.test
├── .eslintrc
├── .eslintrc-auto-import.json
├── .gitignore
├── .husky
├── .prettierrc.js
├── .whistle
├── README.md
├── babel.config.js
├── env.d.ts
├── favicon.ico
├── index.html
├── jest.config.js
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── App.vue
│   ├── api
│   ├── assets
│   │   ├── images
│   │   └── less
│   ├── components
│   ├── main.ts
│   ├── pages
│   ├── router
│   ├── store
│   ├── types
│   ├── utils
│   └── vite-env.d.ts
├── test
├── tsconfig.json
└── vite.config.ts

```

# 运行项目

1. 安装依赖

```r
tnpm i
```

2. 在你的开发环境配置 eslint & prettier（略）

3. 本地运行项目

```bash
npm run dev

## 代码检查
npm run lint
```

4. 配置代理

   1. 安装 whistle

   ```bash
   npm install -g whistle
   ```

   2. 启动 whistle

   ```bash
   # 启动
   sudo w2 start

   # 关闭
   sudo w2 stop
   ```

   3. 安装 Chrome 代理插件[Proxy SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)，就是个代理选择器，不用配本地网络实现不同代理的快速切换。

   4. 把你的 whistle 代理服务加入到 Proxy SwitchyOmega 中
      点击插件中的“选项”，参考以下进行配置：

   5. 打开 whistle 页面`127.0.0.1:8899`，左侧新建 1 个 rules，将项目`src/.whistle`内容粘贴上去，保存。

   6. Proxy SwitchyOmega 插件选择你要指定的代理「第 4 步截图是“whistle”」，之后访问远程 url 即可（如 uux.woa.com）。

5. 打包构建

```bash
## 测试环境打包
npm run build:test

## 生产环境打包
npm run build:production

## 打包&&生成依赖看板
npm run build:report
```