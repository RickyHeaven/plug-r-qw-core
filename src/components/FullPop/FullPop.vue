<!--FullPop “全屏”弹出页（绝对定位，和最近一个relative元素大小一致），自带header，提供方法开关页面
@created 2023.05.11
@author Ricky email:zhangqingcq@foxmail.com-->

<script setup lang="ts">
	import t from '../../locale/i18nSFC'
	import HeaderBt from '../HeaderBt/HeaderBt.vue'
	import Proxy from '../../utils/proxy'

	const props = withDefaults(
		defineProps<{
			title?: string
			headerColor?: string
			headerBg?: string
			headerFontSize?: number | string
			zIndex?: number
		}>(),
		{
			headerFontSize: () => Proxy()?.fontSizeBase,
			zIndex: 1000
		}
	)

	const emit = defineEmits(['on-open', 'on-close'])

	let showPop = ref(false)

	const hFontSize = computed(() => {
		if (typeof props.headerFontSize === 'number') {
			return props.headerFontSize + 'px'
		}
		return props.headerFontSize
	})

	const popStyle = computed(() => {
		return { zIndex: props.zIndex }
	})

	function open() {
		showPop.value = true
		emit('on-open')
	}

	function close(getData?: boolean) {
		showPop.value = false
		emit('on-close', getData === true)
	}

	defineExpose({
		open,
		close
	})
</script>

<template>
	<div v-show="showPop" class="fullScreenPopBoxAM" :style="popStyle">
		<div class="headerAM" :style="{ color: props.headerColor, backgroundColor: props.headerBg, fontSize: hFontSize }">
			<!--这是标题-->
			<span class="headerTxtAM">{{ title || t('r.title') }}</span>
			<!--这是返回按钮-->
			<HeaderBt icon="md-return-left" @click="close">{{ t('r.back') }}</HeaderBt>
		</div>
		<div class="contentAM">
			<slot></slot>
		</div>
	</div>
</template>
