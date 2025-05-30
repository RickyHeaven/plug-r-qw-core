import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStore } from './stores/main'

import App from '@/App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import en from '@/lang/en-US'
import zh from '@/lang/zh-CN'
import ru from '@/lang/ru-RU'
// @ts-ignore
import enI from 'view-ui-plus/dist/locale/en-US'
// @ts-ignore
import zhI from 'view-ui-plus/dist/locale/zh-CN'
// @ts-ignore
import ruI from 'view-ui-plus/dist/locale/ru-RU'
import enR from '../src/locale/lang/en-US'
import zhR from '../src/locale/lang/zh-CN'
import ruR from '../src/locale/lang/ru-RU'

import './assets/main.css'

import ViewUIPlus from 'view-ui-plus'
import './global/iViewTheme.less'
import './global/common.less'

// import plugRQw from '../lib/plugRQw.js'
// import '../lib/plugRQw.min.css'

import plugRQw from '../src'
import '../src/style/index.less'

import 'github-markdown-css/github-markdown-light.css'

window._AMapSecurityConfig = {
	securityJsCode: '6784d3fc333089ce3d6d314112609eac'
}

const i18n = createI18n({
	allowComposition: true,
	legacy: false,
	locale: localStorage.getItem('locale') || 'zh',
	messages: {
		en: { ...en, ...enI, ...enR },
		zh: { ...zh, ...zhI, ...zhR },
		ru: { ...ru, ...ruI, ...ruR }
	}
})

let app = createApp(App)
app
	.use(createPinia())
	.use(router)
	.use(i18n)
	.use(ViewUIPlus, { i18n })
	.use(plugRQw, {
		useStore,
		router,
		i18n,
		amap: {
			securityJsCode: '6784d3fc333089ce3d6d314112609eac',
			key: '6836a3633a8cdf2bffab565e44242866'
		}
	})
	.mount('#app')

//全局UI变量定制示例
app.config.globalProperties.formGroupLabelWidth = 150
