# 前端开发规范

## 快速启动

```bash
# 安装依赖
npm install

# 启动应用
# 启动之后在 localhost:4200 可以看到应用
npm start

# 运行单元测试
npm test

# 运行 e2e 测试
npm run e2e

# 构建生产版本
npm build
```

## 开发准备

1. 准备开发工具 VS Code + 插件 / IDEA / WebStorm
2. 命令行工具 cmder/babun
3. API 工具 PostMan
4. Node 配置：安装 Node.js（10.*） 环境、Python 2.7（node-sass），
5. 配置行内 ``npm`` 源及 ``sass`` 源
6. 安装 ``git``、对应的 GUI 工具（可选）
7. 执行 ``npm install`` 或者 ``yarn install``

## VS Code 插件

 - EditorConfig for VSCode   * 统一编辑器配置，即缩进是 2 空格还是 4 空格
 - Angular Snippets          * Angular 代码段
 - ESLint, TSLint            * 代码风格提示工具
 - Jasmine Core Snippet      * Jasmine 代码段
 - GitLens                   * Git 工具
 - ……

## 预提交

### Pre-Commit

1. 执行 lint-staged 定义的 scss,ts 规范统一

### Pre-Push

1. 执行 ``yarn lint``，以确保代码风格一致
2. 执行 ``yarn test``，以确保测试通过
3. 执行 ``ng build --prod --aot``，以保证不破坏 AoT 编译

## 提交规范

```
${type}: [${storyId}] ${message}` : `${type}: ${message}
```

示例：

```
build: [psp-000] add services map module
```

## 提交信息规范

 - ``build``: 影响构建系统或外部依赖关系的更改
 - ``ci``: 更改我们的持续集成文件和脚本
 - ``docs``: 仅文档更改
 - ``feat``: 一个新功能
 - ``fix``: 修复错误
 - ``perf``: 改进性能的代码更改
 - ``refactor``: 代码更改，既不修复错误也不添加功能
 - ``style``: 不影响代码含义的变化（空白，格式化，缺少分号等）
 - ``test``: 添加缺失测试或更正现有测试

## 提交脚本

通过执行 `yarn commit`，可以帮助执行 ``commit``

1. 选择提交的类型
2. 输入故事卡 id（可选）
3. 输入 commit 信息

## 发布与发布日志生成

我们使用 [standard-version](https://github.com/conventional-changelog/standard-version) 来帮助我们
发布版本，默认升级 patch 版本，如果要指定发布的版本，可以如下操作:

```
npm run release -- --release-as minor
# Or
npm run release -- --release-as 1.1.0
```

## 项目目录结构

```├── BuildScript           * CI 脚本
├── scripts               * 辅助构建脚本
├── schematics            * 代码生成工程
├── src                   * Angular 源码工程
└── stories               * 组件库/Storybook/Design System
```

## 源码组织

```├──core/                  * 核心领域/业务层，放置 TypeScript 定义的 Model 
├──data/                  * 数据层，则用来存放具体的业务数据类型，网络(本地)数据获取，以及将业务数据转换为应用展示所需的数据模型
├──shared/                * 可以被特性模块共享的组件
├──public/                * presentation 层，不需要权限的模块
└──protected/             * presentation 层，按权限划分目录模块
```

## Clean Architecture

```├── model
│   └── elephant.model.ts                         // 核心业务模型
├── repository
│   ├── elephant-web-entity.ts                    // 数据实体，简单的数据模型，用来表示核心的业务逻辑
│   └── elephant-web.repository.ts                // Repository，用于读取和存储数据。
└── usecases
    └── get-all-elephants.usecase.ts              // 用例，构建在核心实体之上，并实现应用程序的整个业务逻辑。
```

## Schematics 代码生成

> Schematics 代码生成

1. 在 schematics  目录，执行 `yarn install` 或者 `npm install`
2. 在工程目录，执行 ``npm link schematics``
3. 执行 ``ng g schematics:domain --name resource-center`` 生成代码

注意：需要 Schematics，需要重新 link

## Angular Route Lazyload

```{
  path: 'services-map',
  loadChildren: './public/services-map/services-map.module#ServicesMapModule'
},
{
  path: 'resources-center',
  loadChildren: './public/resources-center/resources-center.module#ResourcesCenterModule'
}
```

## 应用拆分方案

1. 开发时，按角色划分路由
2. 按角色编写主路由配置
3. 不同角色构建时，根据不同的配置，选择编译所需要的部分

## 测试策略

 - 必测 pipe、directive、utils/helper
 - 业务测试 Use Case
 - 可选的 component 测试

## 主题定制

由于主题定制的需要，我们需要在每个使用到的部分定制主题。现在设计的结构如下所示：

由  ``_app-themes.scss`` 统一管理，引入其它的主题文件，诸如：Page Header 的 ``_app-theme.scss``。再由各个模块的 ``*theme.scss`` 文件，定制各个组件的主题。

构建：

1. 在 APP 运行、构建时，会执行 ``scripts/tools/build-themes.sh`` 脚本。
2. 该脚本会在 ``src/assets/custom-themes`` 目录下找到对应的 ``.scss`` 文件，编译为 ``.css``。

## 统一名词字典

API - 

## Style Guide 说明 [TBC]

## .npmrc 配置

## 使用 StoryBook

1. 使用 schematics 生成 storybook 代码
```
ng g schematics:story --name my-component
```

2. 启动 storybook
```
yarn storybook
```

