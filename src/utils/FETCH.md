## fetch

网络请求插件，挂在app.config.globalProperties上，为$fetch，组件内使用this调用(选项式)，也可单独引用(推荐)；vue3的setup中，可使用proxy调用，详见[库说明](../../README.md)。

### 实例内方法参数

- url 字符串，请求地址，必传

- data 对象，请求参数，没有可不传，如果后面有需要传的参数，该参数需要传`{}`占位，get请求推荐使用该参数传请求参数

- msg 字符串，请求错误消息，输出在浏览器控制台，方便查找原因，可不传，占位时传`null`

- rPath 数组，过滤请求结果，会根据该数组内的字符串元素依次取请求结果中对应字段，占位时传`[]`

- config 对象，请求配置，例如设置请求头等，如果需要在请求时加遮罩层，在该字段设置`{spin:true}` ；再如需要过滤请求参数中值为空字符的字段时（默认不过滤），设置`{noEmptyStr:true}`；占位时传`{}`

- isUrlData 布尔对象，delete方法传参模式 `true:params,false:data`，默认：`true`

### 实例内方法(没写在这里的都是内部方法，除非非常清楚调用产生的效果，否则不要调用)

- get 以get方式请求，请求参数推荐使用data参数传递

- post 以post方式请求

- put 以put方式请求

- delete 以delete方式请求

- all 并发请求，参考axios的all

- spread 并发请求结果分离，例如：

```
this.$fetch.all(
   [
     this.$fetch.get("/getData"),
     this.$fetch.post("/getDataB",{name:'ricky'})
   ]
  )
   .then(
     this.$fetch.spread((result1,result2)=>{
         console.log(result1,result2)
     })
   )
```

- config 该字段指向axios构造的$fetch实例，可用该字段进行实例配置，例如：

```
  this.$fetch.config.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

  PS：如果在main.js这类不能用this访问vue实例的地方，可以这样写： vue.prototype.$fetch.config.XXX
      需要注意的是，这类配置需在plug-r-qw库被实例化后使用，即 vue.use(plugRQw,...) 代码之后
```

### 注意

- 所有请求方式都返回promise对象，推荐使用then和catch处理

- 除非必须使用async和await配合的同步函数，否则不推荐使用，该配合有诸多弊端

- 该插件自带拦截器，需要配合vuex实现：

```
  1.项目在main.js中实例化该库时，需要将vuex的store对象传递给库：
      Vue.use(plugRQw, {
        store,
        ...
      })

  2.项目的store中需要增加个action：logout，用于登出操作。

  拦截器有：
  (1) error.response.status 或 response.data.code 为 403 时，为登录失效，需要重新登录，
      会弹出重新登录的确认框，点击确定会分发vuex中名为‘logout’的action。

  (2) error.response.status 或 response.data.code 为 409 时，为该账号已在其他地方登录，
      会弹出重新登录的确认框，点击确定会分发vuex中名为‘logout’的action。
```
