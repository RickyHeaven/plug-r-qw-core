# plug-r-qw

* A JS lib base on Vue and View-design, you can achieve some complex functions with simple code after install this lib.

* 简介：这是一个主要基于Vue和View-design的JS库，库里面提供一些集成度较高功能较复杂的全局组件，和一些实用的但不常见（其他库可能没有）的方法，并且使用起来灵活简单。

* 安装该库后，可以用简单的几行代码实现较复杂的业务需求；对经验丰富的开发者来说，大大提高开发速度、代码质量、可读性、和可维护性；对萌新来说，将入门门槛进一步降低，让你更快上手。

## vue3: @zhangqingcq/plug-r-qw@2.X.X, vue2: @zhangqingcq/plug-r-qw@1.x.x 

### vue3 version README file is coming soon

## vue2 version README file is here:

* [@zhangqingcq/plug-r-qw@1.x.x](https://github.com/RickyHeaven/plug-r-qw.git) git repository

* [组件](https://github.com/RickyHeaven/plug-r-qw/tree/master/src/components)和[方法](https://github.com/RickyHeaven/plug-r-qw/tree/master/src/methods)都有各自详细的markdown格式说明文档，可直接在[GitHub](https://github.com/RickyHeaven/plug-r-qw.git)查看，也可将项目拉到本地直接查看，或者将示例项目运行起来在示例页面查看。

### 推荐环境
* node `14.21.2`

* npm `6.14.17`

### 用法
1. npm i @zhangqingcq/plug-r-qw

2. 在main.js中添加：
    ```
     import Vue from 'vue'
     import store from './store'
     import router from './router'
     import plugRQw from '@zhangqingcq/plug-r-qw'
     import '@zhangqingcq/plug-r-qw/lib/plugRQw.min.css'
     
     Vue.use(plugRQw,{store,router})
    ```
   国际化版本：
    ```
     import Vue from 'vue'
     import store from './store'
     import router from './router'
     import VueI18n from "vue-i18n"
     import plugRQw from '@zhangqingcq/plug-r-qw'
     import '@zhangqingcq/plug-r-qw/lib/plugRQw.min.css'
     import enR from '@zhangqingcq/plug-r-qw/lib/lang/en-US'
     import zhR from '@zhangqingcq/plug-r-qw/lib/lang/zh-CN'
     
     Vue.use(VueI18n)
    
     Vue.locale = () => {}
     const messages = {
       en: {hello:'Hello', ...enR},
       zh: {hello:'你好', ...zhR}
     }
      
     const i18n = new VueI18n(({
       locale: 'zh',
       messages
     }))
     
     Vue.use(plugRQw,{
      store,
      router,
      i18n(path, options) {
        return i18n.t(path, options) || ''
      }
     })
     
     new Vue({ i18n,store }).$mount('#app')
    ```

   > 该库从`@zhangqingcq/plug-r-qw@1.3.12`开始支持`TypeScript + Vue`的项目（非TypeScript项目依然支持，用法没有任何改动），用法和之前
   `JS + Vue`的项目大同小异，除了下面列出的不同，其他都相同。
   >> 国际化版本，需要在`shims-vue.d.ts`文件中声明国际化文件(plug-r-qw和view-design都要)，如：
      ```
        declare module '@zhangqingcq/plug-r-qw/lib/lang/en-US'
        declare module '@zhangqingcq/plug-r-qw/lib/lang/zh-CN'
      
        declare module '@zhangqingcq/view-design-r/dist/locale/en-US'
        declare module '@zhangqingcq/view-design-r/dist/locale/zh-CN'
      ```
   >> 国际化版本在main.js安装plug-r-qw时国际化配置方法要定义参数类型，如：
      ```
        Vue.use(plugRQw,{
          ...,
          i18n(path:string,options:object){...}
        })
      ```
   >> 如果用了echarts等第三方库功能，也需要在`shims-vue.d.ts`文件中声明相关模块，如：
      ```
        declare module 'lodash'
        declare module 'js-cookie'
        declare module 'echarts'
      ```
   > 该库从`@zhangqingcq/plug-r-qw@1.3.12`开始支持`Pinia`（Vuex的升级版），就是用`Pinia`的`useStore`替换之前`Vuex` 的`store`，用法如下：
    ```
      import {useStore} from './stores/main'
      
      Vue.use(plugRQw,{useStore,xxx})
    ```

3. 挂载在Vue实例下的方法，在vue单文件里用`this.XXX`调用（template里不用加this），在其他js文件里，引入vue后使用`Vue.prototype.XXX`调用，
   也可以单独引用：`import {XXX} from '@zhangqingcq/plug-r-qw'`

4. 没有挂在在Vue实例下的方法（使用频率较低），在需要的地方单独引用即可

5. 所有UI组件均被库注册为了全局组件，所以在需要的地方直接使用即可，如：
```
<iconTxtBtn icon="ios-trash" name="批量删除"/>
```
### 注意
* 要看例子，需要下载[github上项目](https://github.com/RickyHeaven/plug-r-qw.git)，然后`npm i`安装依赖，然后`npm run serve`把项目跑起来，就可以在`/index`查看各个组件或方法的示例了。

* 安装依赖推荐使用*npm*加*淘宝镜像*的组合（*cnpm*在安装一些有自己脚本的依赖时很大机率会报错；*淘宝镜像*更新速度较慢，有时要隔一天才会拉到新的资源，所以在使用*淘宝镜像*有问题时，可以切回*官方镜像*继续安装），实在是无法安装成功，可清空npm缓存后使用*npm*加*官方镜像*进行安装，如果还是无法成功，那很有可能是你的网络或环境有问题（如node不是稳定版，可降低node版本再尝试；依赖不需要一个一个装，不管哪种工具都直接全部安装）

* 部分示例有需要请求接口的组件，所以需要在项目目录下新开一个命令窗口运行：`npm run node-serve` 将该项目配置好的nodeJs服务器启动起来，那些需要请求nodeJs服务器的组件才有数据

* 因为这个库里面包含UI组件，所以需要在*main.js*引用*lab/plugRQw.min.css*才能正常显示样式，如：`import '@zhangqingcq/plug-r-qw/lib/plugRQw.min.css'`

* 如果需要定制化样式（例如主题色），则需要创建一个*less*文件（如`plugRQwTheme.less`，注意：这种情况下不再需要引入*plugRQw.min.css*）,在该文件中顶部引入*src/style/index.less* (如：`@import "~@zhangqingcq/plug-r-qw/src/style/index.less";`),然后在后面写上想要覆盖的变量名，并给出想要的值，如：`@primary: #46be87;`[默认颜色列表](/src/style/common/color.less)，[默认尺寸列表](/src/style/common/size.less)
>注意：
>1. 请不要随意改变这些变量，除非你很清楚改变后会带来的影响，他们在整个库中被多次使用。
>2. 因为该库是基于view-design封装的，所以很多样式继承了view-design，要定制那些样式，直接定制view-design即可。

* 因为有些方法使用频率较低，所以没有挂载在Vue原型或者window上，使用时需要单独引用，如：`improt {fullScreenImgPreview} from '@zhangqingcq/plug-r-qw'`

* 本库主要依赖有`vue、vue-router、vuex、@zhangqingcq/view-design-r、sweetalert、lodash、axios、echarts、moment、wangeditor、xss、js-cookie、ar-cascader、vue-amap、vue-json-viewer`，其中`vue、vue-router、vuex`需要在使用vue-cli脚手架搭建项目时安装（选上），如果你的项目是国际化版本,`vue-i18n`需要手动安装，其他依赖在项目安装该库后，可直接在项目中使用，无需再次将它们安装至你的项目，但其中`@zhangqingcq/view-design-r、vue-amap`需要在你的项目手动初始化，可以参考对应的官网(`@zhangqingcq/view-design-r`初始化方法和用法跟`view-design`一样)或npm网站页面或本项目examples目录里的初始化方法

* 该库自`@zhangqingcq/plug-r-qw@1.3.0`版本开始，弃用`view-design`，改用本人改良的`@zhangqingcq/view-design-r`（这么做的原因是view-design@4x版本自2021年11月以后不再被作者维护，一些问题无望解决），`@zhangqingcq/view-design-r`基于`view-design@4.7.0`创建，主要改动是修复了使用中发现的一些view-design的bug和自己的一些定制化。`@zhangqingcq/view-design-r`初始化方法和原view-design一样，只需将原项目中`view-design`全部替换成`@zhangqingcq/view-design-r`，如：
```
  import ViewUI from '@zhangqingcq/view-design-r'
  import '@zhangqingcq/view-design-r/dist/styles/iview.css'
  import enI from '@zhangqingcq/view-design-r/dist/locale/en-US'
  import zhI from '@zhangqingcq/view-design-r/dist/locale/zh-CN'

  样式定制化文件顶部改为：
  @import "~@zhangqingcq/view-design-r/src/styles/index.less";

  具体可参考本库示例项目examples中的使用方法
```

* 该库自`@zhangqingcq/plug-r-qw@1.3.0`版本开始，使用了`less@4.0.0`，如项目有less语法报错，可以在`vue.config.js`中加上配置，如:
```
module.exports = defineConfig({
  ...
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
})

```

* 该库自`@zhangqingcq/plug-r-qw@1.1.35`版本开始，弃用`iview-area`，改用本人改良的`ar-cascader`，所以升级到该版本及以后，如果你项目中之前有直接使用iview-area，替换成ar-cascader即可。（在没有直接使用iview-area，而是使用库中alCascader及formR相关组件,则无需做任何改变）

* 有地图的功能是用的高德地图，要在项目初始化才能使用库中地图功能，初始化方法参考该项目的examples中main.js或高德官方文档

* 本库采用@vue/cli3 脚手架搭建，用@vue/cli3或者更高版本搭建的项目引用不会有兼容问题，低于@vue/cli3版本或其他脚手架搭建的项目引用可能会有兼容问题，表现就是报错有不认识的语法或功能异常（目前已知$fetch可能会因为兼容问题无响应），解决方法：
```
  在webpack中添加loader处理库的输出文件，如@vue/cli2搭建的项目中（由于@vue/cli2脚手架过于老旧，建议更换成较新的cli版本搭建的框架，项目只是更换框架工作量其实并不大，获得的收益比较高），找到webpack.base.conf.js,在module-->rules下添加
  
  {
    test: /(index\.js|plugRQw\.umd(\.min){0,1}\.js)$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          'env',
          "stage-2"
        ]
      }
    },
    include: [path.resolve(__dirname,'../node_modules/@zhangqingcq/plug-r-qw')]
  }
  
  注意：
    1. 这个loader会用到'path'、'core-js'、'babel-loader'、'babel-core'、'babel-preset-env'、'babel-preset-stage-2'、'webpack'，如果项目报错没有这些npm依赖，请安装它们
    2. include的路径是该库相对于webpack.base.conf.js文件的相对路径
    3. 如果添加了该loader还是有兼容问题，那么将main.js中 import plugRQw from '@zhangqingcq/plug-r-qw' 换成 import plugRQw from '@zhangqingcq/plug-r-qw/lib/plugRQw.umd.js'
```

### 本库自带自定义指令

* has 通过本库内方法hasPermission将传入指令的值进行解析（在sessionStorage中btnPermissions中查找传入的值），如果解析结果为false，则为绑定的元素添加`display:none`的内联样式，以此来实现元素的权限控制。

* loadmore 在容器滚动到底部时调用传入指令的值（回调函数），可通过指令参数传入一个class，来指定滚动的容器（如`v-loadmore:boxN='getData'`,boxN的意思为指令绑定元素的某个子元素，它有个class为boxN,而该元素被指定为滚动的容器；getData为回调函数，比如在函数内部拉取数据并渲染到容器内），滚动容器默认为指令绑定的元素

