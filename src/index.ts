/**
 * @description plug-r-qw 源代码入口文件
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */

import type { App } from 'vue'

const modules: Record<string, any> = import.meta.glob('./components/**/*.vue', { eager: true })
import localeFile from './locale'
import $fetch from './methods/fetch'
export { default as fetch } from './methods/fetch'
export * from './methods/functionGroup'
import messageBox from './methods/messageBox'
export { default as messageBox } from './methods/messageBox'
import $swal from './methods/swal'
export { default as swal } from './methods/swal'
import $swalConfirm from './methods/swalConfirm'
export { default as swalConfirm } from './methods/swalConfirm'

let components: Record<string, any> = {}

for (const path in modules) {
	if (modules.hasOwnProperty(path)) {
		const _p = path.replace(/^\.\/.*\/(\w*)\/.*\.vue$|^\.\/.*\/(\w*)\.vue$/, '$1$2')
		components[_p] = modules[path].default
	}
}

const methodsR: Record<string, any> = {
	$fetch,
	$swal,
	$swalConfirm,
	messageBox
}

const install = function (app: App, options: Record<string, any> = {}) {
	$fetch.init(options.useStore || options.store, app)

	if (options.locale) {
		localeFile.use(options.locale)
	}

	if (options.i18n) {
		localeFile.i18n(options.i18n)
	}

	Object.keys(components).forEach((key) => {
		app.component(key, components[key])
	})

	Object.keys(methodsR).forEach((key) => {
		app.config.globalProperties[key] = methodsR[key]
	})
}

const locale = localeFile.use

const i18n = localeFile.i18n

export default {
	locale,
	i18n,
	install
}
