<!--HeaderBt header右侧按钮，和header同高，左侧带白色分割线，按钮内容直接写在标签内
@created 2023.05.11
@author Ricky email:zhangqingcq@foxmail.com-->

<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			icon?: string
			withIcon?: boolean
			iconSize?: number | string
			color?: string
			borderColor?: string
			disabled?: boolean
		}>(),
		{
			withIcon: false,
			iconSize: 18,
			color: 'inherit',
			borderColor: '#fff',
			disabled: false
		}
	)

	const emit = defineEmits(['click'])

	function click() {
		if (props.disabled) {
			return
		}
		emit('click')
	}
</script>

<template>
	<div
		:class="{ headerBtCTM: true, withIconCTM: props.icon || props.withIcon, disabled: props.disabled }"
		:style="{ color: props.color, borderLeftColor: props.borderColor }"
		@click="click"
	>
		<Icon v-if="props.icon" :size="props.iconSize" :type="props.icon" />
		<slot></slot>
	</div>
</template>
