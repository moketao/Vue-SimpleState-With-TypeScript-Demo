# Vue-SimpleState-With-TypeScript-Demo

这是一个 vue demo，用于演示在 Typscript 语法下，使用 [简单状态管理]([简单状态管理](https://cn.vuejs.org/v2/guide/state-management.html)) 的方法。

Vue 要实现变量共享（或者状态管理），官方推荐使用的两种管理方式，一种是 [Vuex](https://vuex.vuejs.org/)，一种是 [简单状态管理](https://cn.vuejs.org/v2/guide/state-management.html)。
体验 [Vuex]([Vuex](https://vuex.vuejs.org/)) 一番后，发现 [Vuex]([Vuex](https://vuex.vuejs.org/)) 不是不能学会，只不过语法太臃肿。
而官方并未提供 TypeScript 的简单状态管理范例。
所以折腾一番后，产生了这个 demo。

另：

我为什么用了 **臃肿** 一词？

1. vue 的语法，相对于 react ，已经简化，但对我来说，仍然过于繁杂，vuex 更是如此，vuex 为了实现记录变更 (mutation)、保存状态快照、历史回滚等功能，加大了语法复杂度和学习难度。
2. vue、vuex 包含两种写法：js 和 ts，而 ts 的相关文档严重缺失，截止时间 2019-02-19 13:14:08。
3. vuex 没有完善的语法提示。使用过 FlashBuilder 和 intelliJ IDEA 两款 IDE，所以回不去了，而其它编辑器，比如 vscode，仍然没有对语言的抽象语法树有自我意识，某些看上去体验不错的插件，也只是基于文本和文件的解析，一旦遇到复杂狗血的语法，就没辙了，经常是跳转不到应有的定义点。


由此可见，从用户体验、商业化角度看，前端仍然有一片不小的蓝海，大有可为（当然，如果未来 20 年 AGI 能超越程序员，那另当别论）。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
