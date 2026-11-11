<script setup lang="ts">
	import { ShowHidePanel } from '../../src'
	import ShowReadMe from '@/components/ShowReadMe.vue'
</script>

<template>
	<div class="examplePageL">
		<ShowReadMe />
		<header class="headerKH"></header>
		<ShowHidePanel bg="#fff">
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
		</ShowHidePanel>
	</div>
</template>

<style lang="less" scoped>
	@headerColor: #2d8cf0;

	.headerKH {
		height: 40px;
		background-color: @headerColor;
	}
</style>