## UploadGroup

支持本地上传或直接上传到服务器、上传文件列表展示或缩略图展示或不展示等功能的上传组件

### 属性

- modelValue 数组/数字/字符串/文件对象，组件的值，推荐用*v-model* 绑定。

- url 字符串，文件上传地址（远程上传时），如：`http://myfileurl.com/flie`

- data 对象，文件上传接口其他参数（远程上传时），如：`{appId: 0,moduleId: 0,typeId: 0}`

- manualUpload 布尔类型，是否开启本地上传模式，默认false（远程上传），给该字段赋值`true`时开启本地上传，该模式适合需要通过该组件获取到文件对象的集合（v-model），然后自己处理上传到服务器的逻辑的情况。

- maxSize 正数，单个文件大小限制，默认0，不限制

- length 正整数，可传文件个数，默认0，不限制

- showUploadList 布尔类型，是否展示上传列表，默认true,展示

- withCredentials 布尔类型，是否支持发送 cookie 凭证信息,默认true

- multiple 布尔类型，选择文件时是否可以多选，默认false

- format 数组，文件格式限制（后缀名），默认[],不限制

- showImg 布尔类型，是否开启缩略图模式，如果上传列表里有非图片文件，会自动转换成列表模式，默认false,不开启

- disabled 是否禁用组件（禁用后仅展示已有文件，如表单修改时文件不可修改），默认false,不禁用

### 事件

- on-change 文件id改变，返回改变后的id或id的集合

### 方法

- clear 清空上传列表

### 注意

- 如果要使用远程上传模式（文件直接上传到服务器），因为本组件该模式是定制化开发，接口数据格式限定死了，默认用的私有地址，只在特定环境有效,如果需要在其他接口数据格式下使用该组件，推荐使用本地模式，然后自己处理上传到服务器的逻辑，或者使用iview的upload组件

- 如果想用远程上传模式，需要将上传接口地址传到url，组件会以`multipart/form-data`的格式将文件以`files`这个字段传递给服务器（实为单文件上传，接口建议写成多文件上传，更实用），上传接口附加字段也会以form-data的方式同时传递给服务器（在组件`data`属性配置的字段），本库示例项目中`uploadGroupEX`有使用示例，本库`node-serve` 中有NodeJS版的接口可供参考。

- 文件上传接口返回数据格式需如下：

  ```
    {
      code:0,/*表示上传成功*/
      data:[
        {
          id:XXX,
          mimeType:XXX/*文件类型，对应file对象的type，如：image/jpeg*/
        }
      ]
    }

    ps:返回的id不能为0
  ```

- 文件下载接口需为`url+'/'+id+'/download'`，其中url为文件上传地址，id为文件上传成功接口返回的文件id

- 文件信息获取地址为`url+'/'+id`，用于在界面上根据id反显文件，返回数据格式需如下：
  ```
    {
      data:{
        returnValue:[
          {
            id:XXX,
            name:XXX,
            mimeType:XXX/*文件类型，对应file对象的type，如：image/jpeg*/
          }
        ]
      }
    }
  ```
