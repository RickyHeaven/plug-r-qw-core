## AlCascaderMC

行政区域级联，v-model绑定区域代码，内置数据，可设置地址级别

### 属性

- modelValue 数字/字符串/数组，地址代码或者中文名加分隔符称组成的字符串或中文名称数组，推荐使用v-model绑定

- level 数字/字符串，地址精确至几级行政区域（0：省级，1：市级，2：县级），该库自1.1.37版本以后不再支持街道选取，因为数据来源area-data自2.0版本以后不再包含街道数据，默认：`2`

- placeholder 字符串，占位符，默认：`'请选择'`

- disabled 布尔对象，禁用编辑功能，默认：`false`

- change-on-select 布尔对象，当此项为 true 时，点选每级菜单选项值都会发生变化，默认：`false`

### 事件

- on-name-change 中文地址发生变化

### 注意

- 不管给v-model传入什么形式的值，v-model返回的值始终是完整的地址代码
