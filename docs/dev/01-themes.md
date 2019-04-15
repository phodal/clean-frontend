# 主题定制

## 原理

由于主题定制的需要，我们需要在每个使用到的部分定制主题。现在设计的结构如下所示：

由  ``_app-themes.scss`` 统一管理，引入其它的主题文件，诸如：Page Header 的 ``_app-theme.scss``。再由各个模块的 ``*theme.scss`` 文件，定制各个组件的主题。

## 如何构建？

1. 在 APP 运行、构建时，会执行 ``scripts/tools/build-themes.sh`` 脚本。
2. 该脚本会在 ``src/assets/custom-themes`` 目录下找到对应的 ``.scss`` 文件，编译为 ``.css``。
