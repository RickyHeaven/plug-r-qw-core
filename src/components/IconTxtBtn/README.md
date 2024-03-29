## IconTxtBtn

表格顶部带图标的文字按钮（批量操作等），集成了权限v-has(自定义指令)，可指定图标、大小、按钮文字内容，可禁用

### 属性

- name 字符串，按钮的文字内容

- icon 字符串，按钮的图标，view-design的icon，如：

```
<IconTxtBtn name="购物车" icon="ios-cart"/>
```

- has 字符串，按钮权限，通过自定义指令v-has控制，这里只需要通过该属性给按钮传配好的权限标识就行

- size 正整数，按钮图标大小，默认值：`17`

- disabled 布尔对象，禁用按钮，默认：`false`

### 事件

- click 按钮点击事件

### 注意

- has是定制化指令，原理是去sessionStorage中找‘btnPermissions’，然后将获取的值按‘，’切割，最后看其中有没有has所带的值，如果想要用权限功能，可以参考这个原理配置权限数据并存到session

- 这个组件和TableIconBtn定位很相似，他们最大的区别就是，该组件时图标文字组合按钮，另一个是纯图标按钮，他们都没有边框
