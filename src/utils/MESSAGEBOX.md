## messageBox

对话框，支持确认按钮回调，支持按钮配置，支持宽高定制，挂在app.config.globalProperties上，组件内使用this调用(选项式)，也支持单独引用（推荐）

### 唯一参数，对象类型，支持属性如下

- title 字符串，对话框的title，可不传

- content 字符串|VNode|Function，提示框内容，必填，传`''`触发默认值，1.string，直接将文字插入对应位置；2.VNode，如：h('div',{style:{color:'red'}},'123')；3.Function,如：(h)=>h('div',{class:'my-class'},'123')

- onOk Function|Promise 确定按钮被点击时的回调，可不传

- onCancel Function，取消按钮被点击时的回调，可不传

- onClose Function，关闭按钮（右上角的叉）被点击时的回调，可不传

- height 正整数，弹框高度，默认值：`130`

- width 正整数，弹框宽度，默认值：`416`

- okText 字符串，ok按钮文字，可不传

- cancelText 字符串，取消按钮文字，可不传

- noWarnIcon 布尔对象，是否隐藏图标，可不传，为`true`时隐藏图标

- footerAlign 字符串，底部对齐方式，可不传，支持`'left','right','center'`默认值：`'center'`

- cancelBt 布尔对象，是否展示取消按钮，可不传，为`false`时隐藏，默认值：`true`

### 注意

- 如果想嵌套使用该方法，从第二层弹框开始都需放在定时器里执行，例如：

  ```
    this.messageBox({
      content: '第一层',
      onOk: () => {
        this.setTimeout(() => {
          this.messageBox({
            content: '第二层',
            onOk: () => {
              this.setTimeout(() => {
                this.messageBox({
                  content: '第三层'
                })
              }, 1000)
            }
          })
        }, 1000)
      }
    })

    ps:this.setTimeout也是该库内方法，可以自动销毁，使用方法和window.setTimeout一样
  ```

- onOk高级用法：返回Promise,在Promise `resolve` 或 `reject` 之前，弹框所有按钮不可点击，弹框不可关闭，‘确定’按钮为loading状态，其他按钮为disabled状态;`resolve`或`reject`后，弹框自动关闭。
  ```
    messageBox({
      content: 'content',
      onOk() {
        return new Promise((r: any) => {
          console.log('ok 按钮被点击，模拟请求开始')
          setTimeout(() => {
            console.log('模拟请求完成')
            r()
          }, 3000)
        })
      }
    })
  ```
- content高级用法：传VNode虚拟节点

  ```
    import { h } from 'vue'

    messageBox({
      title: '请注意',
      content: h(
        'div',
        {
          style: {
            textAlign: 'center'
          }
        },
        [
          h('i', {
            class: 'ivu-icon ivu-icon-md-thumbs-up',
            style: {
              fontSize: '50px',
              color: 'deepskyblue'
            }
          }),
          h(
            'p',
            {
              style: {
                color: '#997800'
              }
            },
            'This lib is awesome!'
          )
        ]
      ),
      okText: '是的',
      cancelText: '我知道',
      onOk() {
        console.log('ok 按钮被点击了')
      }
    })
  ```
