import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/stores/main'
import Swal from '@/views/SwalEX.vue'

// @ts-ignore
const bl = import.meta.env.BASE_URL

const router = createRouter({
	history: createWebHistory(bl),
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			redirect: '/fetch'
		},
		{
			path: '/fetch',
			name: '$fetch',
			component: () => import('@/views/FetchEX.vue'),
			meta: {
				desc: '网络请求插件'
			}
		},
		{
			path: '/swal',
			name: '$swal',
			component: Swal,
			meta: {
				desc: '提示框'
			}
		},
		{
			path: '/alCascaderMC',
			name: 'AlCascaderMC',
			component: () => import('@/views/AlCascaderMCEX.vue'),
			meta: {
				desc: '行政区域级联'
			}
		},
		{
			path: '/asyncCascader',
			name: 'AsyncCascader',
			component: () => import('@/views/AsyncCascaderEX.vue'),
			meta: {
				desc: '远程级联选择器'
			}
		},
		{
			path: '/btTablePage',
			name: 'BtTablePage',
			component: () => import('@/views/BtTablePageEX.vue'),
			meta: {
				desc: '表格页签集成组件'
			}
		},
		{
			path: '/checkboxTree',
			name: 'CheckboxTree',
			component: () => import('@/views/CheckboxTreeEX.vue'),
			meta: {
				desc: '复选框树'
			}
		},
		{
			path: '/domPrint',
			name: 'DomPrint',
			component: () => import('@/views/DomPrintEX.vue'),
			meta: {
				desc: '网页Dom打印'
			}
		},
		{
			path: '/editorPro',
			name: 'EditorPro',
			component: () => import('@/views/EditorProEX.vue'),
			meta: {
				desc: '富文本编辑器'
			}
		},
		{
			path: '/formR',
			name: 'FormR',
			component: () => import('@/views/FormREX.vue'),
			meta: {
				desc: '表单'
			}
		},
		{
			path: '/formTeam',
			name: 'FormTeam',
			component: () => import('@/views/FormTeamEX.vue'),
			meta: {
				desc: '分组表单'
			}
		},
		{
			path: '/fullPop',
			name: 'FullPop',
			component: () => import('@/views/FullPopEX.vue'),
			meta: {
				desc: '全屏弹框'
			}
		},
		{
			path: '/fullScreenImgByDom',
			name: 'FullScreenImgByDom',
			component: () => import('@/views/FullScreenImgByDomEX.vue'),
			meta: {
				desc: '全屏图片预览'
			}
		},
		{
			path: '/fullScreenImgPreview',
			name: 'FullScreenImgPreview',
			component: () => import('@/views/FullScreenImgPreviewEX.vue'),
			meta: {
				desc: '全屏图片预览（Modal方式）'
			}
		},
		{
			path: '/iconTxtBtn',
			name: 'IconTxtBtn',
			component: () => import('@/views/IconTxtBtnEX.vue'),
			meta: {
				desc: '图标文字按钮'
			}
		},
		{
			path: '/inputMap',
			name: 'InputMap',
			component: () => import('@/views/InputMapEX.vue'),
			meta: {
				desc: '地点选择'
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/Login.vue')
		},
		{
			path: '/messageBox',
			name: 'messageBox',
			component: () => import('@/views/MessageBoxEX.vue'),
			meta: {
				desc: '对话框'
			}
		},
		{
			path: '/monthRange',
			name: 'MonthRange',
			component: () => import('@/views/MonthRangeEX.vue'),
			meta: {
				desc: '月份区间选择器'
			}
		},
		{
			path: '/page404',
			name: 'Page404',
			component: () => import('@/views/Page404EX.vue'),
			meta: {
				desc: '404页面'
			}
		},
		{
			path: '/selectInput',
			name: 'SelectInput',
			component: () => import('@/views/SelectInputEX.vue'),
			meta: {
				desc: '可换label输入框'
			}
		},
		{
			path: '/selectScrollMore',
			name: 'SelectScrollMore',
			component: () => import('@/views/SelectScrollMoreEX.vue'),
			meta: {
				desc: '下拉框-下拉加载更多选项'
			}
		},
		{
			path: '/sichuanCuisine/combo/sideMenu',
			name: 'SideMenu',
			component: () => import('@/views/SideMenuEX.vue'),
			meta: {
				desc: '左侧菜单'
			}
		},
		{
			path: '/sichuanCuisine/combo/twiceCookedPork/sideMenuPro',
			name: 'SideMenuPro',
			component: () => import('@/views/SideMenuProEX.vue'),
			meta: {
				desc: '左侧菜单Pro'
			}
		},
		{
			path: '/tableSetting',
			name: 'TableSetting',
			component: () => import('@/views/TableSettingEX.vue'),
			meta: {
				desc: '表格列设置'
			}
		},
		{
			path: '/transferBox',
			name: 'TransferBox',
			component: () => import('@/views/TransferBoxEX.vue'),
			meta: {
				desc: '穿梭框'
			}
		},
		{
			path: '/uploadGroup',
			name: 'UploadGroup',
			component: () => import('@/views/UploadGroupEX.vue'),
			meta: {
				desc: '上传文件'
			}
		}
	]
})

router.beforeEach((to, from, next) => {
	const store = useStore()
	if (from.name === 'Login') {
		store.fullScreen = false
	} else if ((to.name === 'Login' || to.name === 'tablePrint') && !store.fullScreen) {
		store.fullScreen = true
	}
	next()
})

export default router