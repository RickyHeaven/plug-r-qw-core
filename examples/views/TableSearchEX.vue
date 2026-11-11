<script setup lang="ts">
	import { $swal, TableSearch, ShowHidePanelB } from '../../src'
	import ShowReadMe from '@/components/ShowReadMe.vue'

	const open = ref(true)
	const val = ref('')

	function search(val: string) {
		$swal('搜索内容', val, 'info')
	}
</script>

<template>
	<div class="examplePageL">
		<ShowReadMe />
		<header class="headerKH">
			<TableSearch
				v-model="val"
				:open="open"
				placeholder="名称"
				@on-search="search"
				@on-toggle="open = !open"
				top="5px"
				btn-color="#fff"
			/>
		</header>
		<ShowHidePanelB v-model="open" bg="#fff">
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
		</ShowHidePanelB>
		<p>搜索内容：{{ val }}</p>
	</div>
</template>

<style lang="less" scoped>
	@headerColor: #2d8cf0;

	.headerKH {
		height: 40px;
		background-color: @headerColor;
		position: relative;
	}
</style>