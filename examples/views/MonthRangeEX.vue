<script setup lang="ts">
	import { ref } from 'vue'
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import { MonthRange, WellCard } from '../../src'

	const value1 = ref([])
	const value2 = ref(['', ''])
	const value3 = ref(['2024-01', '2024-06'])

	function handleChange1(val: string[]) {
		console.log('value1 changed:', val)
	}

	function handleChange2(val: string[]) {
		console.log('value2 changed:', val)
	}
</script>

<template>
	<show-read-me />
	<div class="boxKJ">
		<wellCard title="基础用法">
			<div class="inF">
				<p class="output">
					组件值： <span>{{ value1 }}</span>
				</p>
				<month-range v-model="value1" @on-change="handleChange1" />
			</div>
		</wellCard>
	</div>
	<div class="boxKJ">
		<wellCard title="带占位符">
			<div class="inF">
				<p class="output">
					组件值： <span>{{ value2 }}</span>
				</p>
				<month-range v-model="value2" placeholder="请选择月份区间" @on-change="handleChange2" />
			</div>
		</wellCard>
	</div>
	<div class="boxKJ">
		<wellCard title="禁用状态">
			<div class="inF">
				<p class="output">
					组件值： <span>{{ value3 }}</span>
				</p>
				<month-range v-model="value3" :disabled="true" />
			</div>
		</wellCard>
	</div>
</template>

<style lang="less" scoped>
	.boxKJ {
		width: 300px;
		height: 300px;
		display: inline-block;
		margin: 0 10px 10px 0;
		border: 1px solid #e1e1e1;
		background-color: #fff;

		.inF {
			padding: 10px;
		}

		.output {
			margin-bottom: 15px;
		}
	}
</style>
