<script setup lang="ts">
	import { ShowHidePanelB } from '../../src'
	import ShowReadMe from '@/components/ShowReadMe.vue'

	const open = ref(true)
</script>

<template>
	<div class="examplePageL">
		<ShowReadMe />
		<header class="headerKH">
			<span style="margin-right: 14px; color: #fff">面 板：</span>
			<i-switch v-model="open">
				<template #open><span>开</span></template>
				<template #close><span>关</span></template>
			</i-switch>
		</header>
		<ShowHidePanelB v-model="open" bg="#fff">
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
		</ShowHidePanelB>
	</div>
</template>

<style lang="less" scoped>
	@headerColor: #2d8cf0;

	.headerKH {
		height: 40px;
		background-color: @headerColor;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 25px;
	}
</style>