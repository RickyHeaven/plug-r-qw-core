import { cloneDeep } from 'lodash-es'
import PrintModal from './PrintModal.vue'
import { myTypeof } from '../globalFunc'

let _router: any = null

function addStyle() {
	const root = document.documentElement
	root.style.setProperty('overflow', 'auto')
	const style = document.createElement('style')
	style.innerHTML = `body,div[data-v-app]{height:100% !important}`
	document.head.appendChild(style)
}

function init(router: any) {
	if (router?.addRoute) {
		if (!router.hasRoute('tablePrint')) {
			router.addRoute({
				name: 'tablePrint',
				path: '/tablePrint/:isFrom',
				component: PrintModal
			})
		}
	}

	_router = router

	//新打开的浏览器窗口，进入时，该打印插件还未完成初始化，所以打印路由还没加上去，无法直接进入打印页面，在这里路由添加后重新进入打印页面
	if (location.pathname.indexOf('tablePrint') > -1) {
		//vue-router history模式
		_router.push(location.pathname)
		addStyle()
	} else if (location.hash.indexOf('tablePrint') > -1) {
		//vue-router hash模式
		_router.push(location.hash.replace(/^#/, ''))
		addStyle()
	}
}

function columnsHandle(item: any) {
	if (myTypeof(item) === 'Object') {
		item.width = item.minWidth || 100
		item.sortable = false
		delete item.minWidth
		delete item.__id
		item.resizable = true
		if (item.children && myTypeof(item.children) === 'Array') {
			item.children = item.children.map(columnsHandle)
		}
	}
	return item
}

/**
 * 供外部使用的打印API
 * @param {Array} columns Table的列设置，同view-design
 * @param {Array|String} data Table的数据
 * @param {String} title 标题(如打印为PDF将是默认文件名)
 * @param {Object} config 打印设置，目前支持：1.customClass,用于定制打印页面样式；2.autoPrint,是否直接打印
 */
function print(columns: any[], data: any[] | string, title?: string, config?: Record<string, any>) {
	if (!_router) {
		return
	}
	let columnsB
	if (!config?.domPrint) {
		let _columns = cloneDeep(
			columns.filter((e) => {
				return e?.key || e?.children
			})
		)
		if (_columns[0].type === 'selection') {
			_columns.shift()
		}
		if (!_columns.length) {
			columnsB = []
		} else {
			columnsB = _columns.map(columnsHandle)
		}
	}

	let _p = _router?.currentRoute?.value?.fullPath
	if (_p) {
		_p = _p.replace?.(/\//g, '_')
	}
	let _d: Record<string, any> = {
		data,
		title,
		config
	}
	if (!config?.domPrint) {
		_d.columns = columnsB
	}
	window.sessionStorage.setItem('print_' + _p, JSON.stringify(_d))

	const r = _router.resolve({
		name: 'tablePrint',
		params: { isFrom: _p }
	})

	let _w = window.open(r?.href, '_blank')
	if (!_w) {
		console.log('请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。')
	}
}

/**
 * @created 2024.03.14
 * @author Ricky email:zhangqingcq@foxmail.com
 * @description 表格打印，可以在预览页面调整每列宽度以及可以选择打印的列
 * 注意：1.该插件依赖于vue-router，需要在安装库时传入router，详见该库使用说明文档；
 * 2.打印时会新开一个浏览器窗口，路由为'/tablePrint'，该路由页面需要铺满浏览器窗口，即该路由所在的router-view外部
 * 不应有任何dom元素渲染在页面上（隐藏的多余dom元素不影响打印）。
 * 3.由于内容较多时需要分页打印，所以需要在打印页面的html、body、div[data-v-app]上添加样式，该插件会自动添加这些样式，
 * 如果页面这些dom节点已经存在类似样式，该插件会覆盖已存在的样式（只会影响打印页面，无需担心其他页面被污染）
 * 4.虽然插件有调节列宽的功能，但为了用户使用方便，开发人员应该在columns里设置好适合的列宽（minWidth或width）,
 * 让打印页面打开时就具备较好的打印布局效果。
 */
const tablePrint = {
	print,
	init
}

export default tablePrint
