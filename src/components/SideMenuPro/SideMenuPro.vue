<!--SideMenuPro 侧边菜单，贴在父容器左侧，可向左将菜单收起进入精简模式（一级纯图标）
@created 2024.09.14
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import t from '../../locale/i18nSFC'
	import SideMenuTwoLevel from './SideMenuTwoLevel.vue'
	import SideIcoMenu from './SideIcoMenu.vue'
	import { setTimeout } from '../../utils/timer'

	const props = withDefaults(defineProps<{ data?: any[]; light?: boolean }>(), { data: () => [] })
	const emit = defineEmits(['on-change'])
	const route = useRoute()

	const menuDisplay = ref<boolean>(true)
	const pathName = ref()
	const menuProRef = ref()
	const titleC = computed(() => (menuDisplay.value ? t('r.hideMenu') : t('r.showMenu')))
	const typeIco = computed(() => (menuDisplay.value ? 'iconfont icon-r-menu-hide' : 'iconfont icon-r-menu-open'))

	onBeforeMount(() => {
		let t: string = localStorage.getItem('menuDisplayRPro') || ''

		if (t !== '') {
			menuDisplay.value = JSON.parse(t)
		} else {
			menuDisplay.value = true
			localStorage.setItem('menuDisplayRPro', JSON.stringify(true))
		}
	})

	watch(
		() => route.path,
		(after) => {
			pathName.value = after
			nextTick(() => {
				setTimeout(addOpen, 10)
			})
		},
		{ immediate: true }
	)

	function showHideMenu() {
		menuDisplay.value = !menuDisplay.value
		localStorage.setItem('menuDisplayRPro', JSON.stringify(menuDisplay.value))
		emit('on-change', menuDisplay.value)
	}

	function addOpen() {
		let t = menuProRef.value.querySelectorAll('.dropItemRX')
		for (let e of t) {
			const ico = e?.childNodes[0]?.querySelector?.('.dropIcoRX')
			if (e?.querySelector?.('.active')) {
				if (e?.childNodes[1]?.classList?.contains?.('rightChildRX')) {
					if (!e?.childNodes[0]?.classList?.contains?.('activeR')) {
						e?.childNodes[0].classList.add?.('activeR')
					}
				} else {
					if (!e?.classList?.contains?.('open')) {
						e.classList.add?.('open')
					}
					if (ico && !ico?.classList?.contains?.('open')) {
						ico.classList.add?.('open')
					}
				}
			} else {
				if (e?.childNodes[1]?.classList?.contains?.('rightChildRX')) {
					if (e?.childNodes[0]?.classList?.contains?.('activeR')) {
						e?.childNodes[0].classList.remove?.('activeR')
					}
				} else {
					if (e?.classList?.contains?.('open') && !e?.classList?.contains?.('fromIcoMenu')) {
						e.classList.remove?.('open')
					}
					if (ico?.classList?.contains?.('open') && !ico?.classList?.contains?.('fromIcoMenu')) {
						ico.classList.remove?.('open')
					}
				}
			}
		}
	}
</script>
<template>
	<div ref="menuProRef" :class="['menuBoxRPro', 'cannotSelect', { light: light }]">
		<div class="menuListR" v-show="menuDisplay">
			<SideMenuTwoLevel :data="props.data" :pathName="pathName" />
		</div>
		<sideIcoMenu class="icoMenuR" v-show="!menuDisplay" :data="data" :pathName="pathName" />
		<Icon
			:custom="typeIco"
			:size="14"
			:class="{ showIco: !menuDisplay }"
			class="menuShowHideIco"
			:title="titleC"
			@click="showHideMenu"
		/>
	</div>
</template>
