<script setup lang="ts">
	import { setTimeout, WellCard, CheckboxTree, HeaderBt } from '../../src'
	import ShowReadMe from '@/components/ShowReadMe.vue'
	const disabled = ref(true)
	const value = ref([111, 112])
	const value2 = ref([11, 111, 112])
	const value3 = ref([
		{
			id: 112,
			name: 'leaf 1-1-2'
		}
	])
	const value4 = ref([112])
	const value5 = ref([112])
	const data = [
		{
			name: 'parent 1',
			id: 1,
			expand: true,
			children: [
				{
					name: 'child 1-1',
					id: 11,
					expand: true,
					children: [
						{
							name: 'leaf 1-1-1',
							id: 111
						},
						{
							name: 'leaf 1-1-2',
							id: 112
						}
					]
				},
				{
					name: 'child 1-2',
					id: 12,
					expand: true,
					children: [
						{
							name: 'leaf 1-2-1',
							id: 121
						},
						{
							name: 'leaf 1-2-2',
							id: 122
						}
					]
				}
			]
		}
	]

	function handleChange(val: any) {}

	onMounted(() => {
		setTimeout(() => {
			value.value.push(121)
		}, 5000)
	})
</script>

<template>
	<show-read-me />
	<div class="boxKJ">
		<wellCard title="leaf模式(收集选中叶子节点)">
			<div class="inF">
				<p>组件值：{{ value }}</p>
				<CheckboxTree v-model="value" :data="data" @on-change="handleChange" />
			</div>
		</wellCard>
	</div>
	<div class="boxKJ">
		<wellCard title="收集全部选中节点模式">
			<div class="inF">
				<p>组件值：{{ value2 }}</p>
				<CheckboxTree v-model="value2" :data="data" :leaf="false" />
			</div>
		</wellCard>
	</div>

	<div class="boxKJ">
		<wellCard title="leaf模式，节点多字段收集">
			<div class="inF">
				<p>组件值：{{ value3 }}</p>
				<CheckboxTree v-model="value3" :data="data" :collect-val="['id', 'name']" />
			</div>
		</wellCard>
	</div>

	<div class="boxKJ">
		<wellCard title="leaf模式，全部禁用">
			<template #bts>
				<HeaderBt :icon="disabled ? 'md-unlock' : 'md-lock'" @click="disabled = !disabled"
					>{{ disabled ? '解禁' : '禁用' }}
				</HeaderBt>
			</template>
			<div class="inF">
				<p>组件值：{{ value4 }}</p>
				<CheckboxTree v-model="value4" :data="data" :disabled="disabled" />
			</div>
		</wellCard>
	</div>

	<div class="boxKJ long">
		<wellCard title="leaf模式，行内叶子节点">
			<div class="inF">
				<p>组件值：{{ value5 }}</p>
				<CheckboxTree v-model="value5" :data="data" :inline-leaf="true" />
			</div>
		</wellCard>
	</div>
</template>

<style scoped lang="less">
	.boxKJ {
		width: 300px;
		height: 300px;
		display: inline-block;
		margin: 0 10px 10px 0;
		border: 1px solid #e1e1e1;
		&.long {
			width: 600px;
		}

		.inF {
			padding: 10px 0 0 10px;
		}
	}
</style>
