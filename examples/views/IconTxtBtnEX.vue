<script setup lang="ts">
	import { getCurrentInstance } from 'vue'
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import { IconTxtBtn, WellCard } from '../../src'

	const { proxy } = getCurrentInstance() as any

	function handleClick(name: string) {
		proxy.$Message.success({ background: true, content: `点击了: ${name}` })
	}
</script>

<template>
	<show-read-me />
	<div class="boxKJ">
		<wellCard title="基础用法">
			<div class="inF">
				<icon-txt-btn name="购物车" icon="ios-cart" @click="handleClick('购物车')" />
			</div>
		</wellCard>
	</div>
	<div class="boxKJ">
		<wellCard title="自定义大小">
			<div class="inF">
				<icon-txt-btn name="大按钮" icon="md-download" :size="24" @click="handleClick('大按钮')" />
			</div>
		</wellCard>
	</div>
	<div class="boxKJ">
		<wellCard title="禁用状态">
			<div class="inF">
				<icon-txt-btn name="禁用按钮" icon="md-lock" :disabled="true" />
				<p class="output">按钮已禁用，无法点击</p>
			</div>
		</wellCard>
	</div>
	<div class="boxKJ" style="width: 400px">
		<wellCard title="多个按钮（模拟表格顶部批量操作）">
			<div class="inF btnGroup">
				<icon-txt-btn name="批量导出" icon="md-download" @click="handleClick('批量导出')" />
				<icon-txt-btn name="批量删除" icon="md-trash" @click="handleClick('批量删除')" />
				<icon-txt-btn name="刷新" icon="md-refresh" @click="handleClick('刷新')" />
			</div>
		</wellCard>
	</div>
</template>

<style lang="less" scoped>
	.boxKJ {
		width: 300px;
		height: 200px;
		display: inline-block;
		margin: 0 10px 10px 0;
		border: 1px solid #e1e1e1;
		background-color: #fff;

		.inF {
			padding: 10px;

			&.btnGroup {
				display: flex;
				gap: 10px;
			}
		}

		.output {
			margin-top: 15px;
			color: #666;
		}
	}
</style>
