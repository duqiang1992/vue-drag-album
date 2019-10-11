# vue 相册-可拖拽、放大、切换

## 安装

```
yarn add vue-drag-album

```

## 使用

```
import vueDragAlbum from 'vue-drag-album'
import 'vue-drag-album/dist/vue-Album.css'

Vue.use(vueDragAlbum)

<template>
  <div id="app">
    <Album :imageList="list"
           :styleMe="styleMe" />
  </div>
</template>

```

## props

| prop         | type   | default | desc                                                          |
| ------------ | ------ | ------- | ------------------------------------------------------------- |
| imageList：  | Array  | []      | 图片集合                                                      |
| preLoadCount | Number | 2       | 图片预加载个数 默认 2，与加载当前索引前后 preLoadCount 的图片 |
| defaultIndex | Number | 0       | 首次图片索引                                                  |
| styleMe      | Object | {}      | 样式                                                          |
