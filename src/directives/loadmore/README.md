# loadmore 指令

滚动加载更多指令，常用于 select 下拉滚动监听。

## 使用场景

- select 下拉滚动到底部加载更多
- 列表滚动加载
- 无限滚动加载

## 使用方法

安装本库后，指令会自动注册到 Vue 应用中，直接在组件中使用即可。

### 基础示例

```vue
<script setup lang="ts">
import { ref } from 'vue'

const list = ref([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }])

function loadMore() {
  console.log('滚动到底部，加载更多')
  // 加载更多数据
}
</script>

<template>
  <!-- 默认监听元素自身的滚动 -->
  <div v-loadmore="loadMore" class="scroll-container">
    <div v-for="item in list" :key="item.id">{{ item.name }}</div>
  </div>
</template>
```

### 指定滚动容器

可以通过指令参数传递 CSS 选择器来指定滚动容器，**会从 document 中查找**：

```vue
<script setup lang="ts">
const options = ref([])

function loadMore() {
  console.log('滚动到底部，加载更多')
}
</script>

<template>
  <!-- 从 document 中查找 .my-select 作为滚动容器 -->
  <div v-loadmore:.my-select="loadMore">
    <select class="my-select">
      <option v-for="item in options" :key="item.value">{{ item.label }}</option>
    </select>
  </div>
</template>
```

> **为什么从 document 查找？**
> 
> view-design/iview 等 UI 框架的 select 开启 `transfer` 属性后，下拉列表会被渲染到 `<body>` 下，不在绑定元素的 DOM 树内。
> 从 document 查找可以适配此类场景，确保指令能正确绑定到实际的滚动容器。

## API

### 指令绑定值

| 属性 | 类型 | 说明 |
|------|------|------|
| value | `Function` | 滚动到底部时触发的回调函数 |
| arg | `string` | 可选，指定滚动容器的 class 名称 |

## 注意事项

1. 滚动容器需要有固定的高度和 `overflow: auto` 或 `overflow: scroll`
2. 当滚动位置满足 `scrollTop > 0 && scrollHeight - scrollTop <= clientHeight` 时触发回调
3. 指令不会自动移除事件监听器，如果组件需要销毁时清理，请自行处理