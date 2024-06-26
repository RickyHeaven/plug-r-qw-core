## BtTablePage

表格-页签-表顶操作（如：批量 XX，导出）集成 UI 组件

### 属性：

注意：view-design 的 Table 组件的属性都支持，请在使用中注意冲突情况，如果冲突，请不要使用

- url: 字符串，表格数据接口地址（不带参数）,如：`'/dcc/gas-iccids'`

- method: 字符串，表格数据接口请求类型,可选值：`'get'`、`'post'`,默认值：`'get'`

- search-data: 对象，拉取表格数据时所有的参数全都放这里面（日常拉取或者条件查询）如：`{useStatus: 1}`

- columns: 数组，格式同 iView 的 columns,但需要表格前多选时，直接设置 selection 属性，不用在这里添加列；align 默认值`'center'`，如需内容居中可不传，配合`tableSetting`使用时，需按需设置`showSettingCheck`字段，详见`tableSetting`的说明文档。

- dataHandler: Function，接口数据处理方法，入参为接口返回数据，返回处理后的数据，格式须为`{data:[...],total:xx}`

- selection: 布尔类型，需要表格多选时设置，默认：`false`

- radio: 布尔类型，表格是否是单选表格，每次只能选中一行，默认：`false`

- selectionFixed: `'left'/'right'/false`三选一或不传，每列开头选择框固定（`left`: 左固定，`right`: 右固定， `false`: 不固定，和 iview table 固定列一样），默认：`false`

- rowClickSelect: 布尔类型，是否点击行操作开头选择框(需要`selection: true`时才有效)，默认：`true`

- data: 数组，在展示静态表格（没有请求地址 url,不用更新，只展示一组静态数据）时用，格式同 iView 的 data。

- page-size: 正整数，在需要定义初始化表格页面条数时使用(如果用户设置过，优先使用用户设置的值)，默认：`10`

- sortable: 字符串（'custom'/''），`custom`: 所有带 key 的列后端排序(不需要排序的列在`columns`对应项设置`sortable:false`；需要排序的字段无需在 columns 做任何设置)，`''`: 不排序（即使在 columns 设置了 sortable 也不会生效），不传该字段，和传`''`是同样的效果。

- init-data: 布尔对象，默认为`true`: 组件创建后自动拉取第一次数据，`false`: 不自动拉取第一次，后面改变 search-data 的值或者调用手动拉取方法。

- highlightRow: 布尔类型，当前（选中，无论是否带选择框）行高亮，`radio: true`时会无视该属性值开启高亮，默认：`false`

- rowClickNum: 整数，自动拉取第一次数据（`init-data: true`）时点击第几行，默认：`-1`，不点击

- tableEmptyTdHandle: 布尔类型，表格内容为空是否显示为`--`，默认：`false`

- noBorderTable: 布尔类型，表格无边框，默认：`false`

- noPage: 布尔对象，不带页签，默认：`false`

- orderDefault: `'asc'/'desc'`二选一或不传，默认排序方式，响应式属性，默认：`'desc'`

- orderKey: 字符串，排序字段的 key，响应式属性，默认：`'id'`

- orderKeyFormat: 下划线`‘underline’`和驼峰`‘camelcase’`二选一或不传，排序字段 key 的格式，默认：`‘underline’`

- getDataLoading: 布尔对象，拉取表格数据时显示遮罩层，默认：`false`

- showTopRow: 布尔对象，展示顶行（列表设置、批量操作按钮、导出等按钮、统计信:息等）,各项子内容通过 slot 接入，默认：`false`

- lightHead: 布尔对象，浅色背景表头，避免和 headerBar 菜单紧邻时页面局部颜色不平衡，默认：`false`

- pageComponentSize: 字符串，page 的大小，默认：`default`

- noElevator: 布尔对象，page 不带电梯，默认：`false`

- usePagePro: 布尔对象，是否使用pagePro组件作为页签，可用全局属性`btTablePageUsePagePro`更改默认值，默认：`false`

- showTotal: 布尔值，page是否展示total，可通过全局变量`pageShowTotal`改变默认值，默认值：`true`

- showSizer: 布尔值，page是否展示sizer，可通过全局变量`pageShowSizer`改变默认值，默认值：`true`

### 事件：

- on-row-click: 行被点击，返回当前行数据

- on-data-change: 表格数据改变，返回改变后的数据

### 方法：

- getTableData: 主动更新表格数据，一般在操作表格数据后使用，条件查询时只需要更改属性`search-data`的值

- addRow: 添加行（分页时不推荐使用，会导致当前页展示的数据条数和页签显示的不符,分页时直接跟后端新增数据然后重新拉取表格数据）

- setRowData: 更改指定行数据，参数:1.row:新的行数据（只更新旧数据和新数据都有的字段，如想更新的其中一个字段为row.name，那么旧row数据需要有name这个字段）2.setCurrentRow：a.数字，行在表数据中的index；b.布尔值，更新当前行3.clickCurrentRow：更新完数据点击更新的行

- deleteRow: 删除指定行（分页时不推荐使用，会导致当前页展示的数据条数和页签显示的不符,分页时直接跟后端删除数据然后重新拉取表格数据）

- selectRow: 主动选中行，多选、单选模式皆可用，参数：predicate，1. Number:根据索引index选中行；2. Array:根据索引index数组选中行(仅多选)；3. Function:根据断言函数返回true的行选中，断言函数参数为行数据，如：`(row) => row?.id === 1`；详细示例见btTablePageEX.vue

- clearSelect: 清空选择

- clearTableData: 清空表格数据（用于特殊场景下重置表格，不拉取数据，如需刷新数据直接调用`getTableData`）

- getDataAndClickRow: 单选模式下：拉取表格数据并且自动点击行，如果传 true，则点击当前行，不传则点击 rowClickNum 指定行；非单选模式：仅拉取数据（等同`getTableData`）

- getSelected: 获取已选行数据

- getTableData: 主动拉取(刷新)表格数据

### 注意：

- 该组件的父容器需要有有效的高度，比如给定 px、vh 高度，或者有效的百分比高度（使用百分比高度必须要能让它生效）
