<script setup lang="ts">
	import { $fetch, WellCard, HeaderBt, CheckboxGroupThreeClass } from '../../src'
	import ShowReadMe from '@/components/ShowReadMe.vue'

	const data = ref<any[]>([])
	const value = ref<any[]>([])
	const disabled = ref(false)
	const disabled2 = ref(true)
	const value2 = ref<any[]>([
		{
			id: 1590,
			name: '列表'
		}
	])
	const value3 = ref<any[]>([1, 1584, 1590])
	const value4 = ref<any[]>([
		{
			id: 1,
			name: '首页'
		},
		{
			id: 1584,
			name: '首页'
		},
		{
			id: 1590,
			name: '列表'
		}
	])

	onMounted(() => {
		$fetch.get('/testData/checkboxGroupThreeClass.json').then((r: any) => {
			value.value = r?.value || []
			data.value = r?.group || []
		})
	})
</script>

<template>
	<div class="examplePageL">
		<ShowReadMe />

		<div class="exBox">
			<WellCard title="简单用法">
				<template #bts>
					<HeaderBt icon="ios-trash" @click="value = []">清空</HeaderBt>
					<HeaderBt :icon="disabled ? 'md-unlock' : 'md-lock'" @click="disabled = !disabled">
						{{ disabled ? '解禁' : '禁用' }}
					</HeaderBt>
				</template>
				<div class="boxJA">
					<div class="topKK">
						<p>组件值： {{ value }}</p>
					</div>
					<div class="flowAA">
						<CheckboxGroupThreeClass :data="data" v-model="value" :disabled="disabled" />
					</div>
				</div>
			</WellCard>
		</div>

		<div class="exBox">
			<WellCard title="收集多个字段">
				<template #bts>
					<HeaderBt icon="ios-trash" @click="value2 = []">清空</HeaderBt>
					<HeaderBt :icon="disabled2 ? 'md-unlock' : 'md-lock'" @click="disabled2 = !disabled2">
						{{ disabled2 ? '解禁' : '禁用' }}
					</HeaderBt>
				</template>
				<div class="boxJA">
					<div class="topKK">
						<p>组件值： {{ value2 }}</p>
					</div>
					<div class="flowAA">
						<CheckboxGroupThreeClass
							v-model="value2"
							:data="data"
							:collect-val="['id', 'name']"
							:disabled="disabled2"
						/>
					</div>
				</div>
			</WellCard>
		</div>

		<div class="exBox">
			<WellCard title="全部收集模式">
				<template #bts>
					<HeaderBt icon="ios-trash" @click="value3 = []">清空</HeaderBt>
				</template>
				<div class="boxJA">
					<div class="topKK">
						<p>组件值： {{ value3 }}</p>
					</div>
					<div class="flowAA">
						<CheckboxGroupThreeClass v-model="value3" :data="data" :leaf="false" />
					</div>
				</div>
			</WellCard>
		</div>

		<div class="exBox">
			<WellCard title="全部收集模式-多字段收集">
				<template #bts>
					<HeaderBt icon="ios-trash" @click="value4 = []">清空</HeaderBt>
				</template>
				<div class="boxJA">
					<div class="topKK">
						<p>组件值： {{ value4 }}</p>
					</div>
					<div class="flowAA">
						<CheckboxGroupThreeClass v-model="value4" :data="data" :leaf="false" :collect-val="['id', 'name']" />
					</div>
				</div>
			</WellCard>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.exBox {
		display: inline-block;
		width: 920px;
		height: 425px;
		margin-right: 10px;
		margin-bottom: 10px;
		background-color: #fff;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		.headerBt {
			.bbD {
				top: 1px;
				position: relative;
			}
		}
	}

	.boxJA {
		overflow: hidden;
		height: 100%;
		padding: 100px 10px 10px 10px;
		position: relative;
		.topKK {
			width: 100%;
			height: 80px;
			position: absolute;
			top: 10px;
			right: 0;
			overflow-y: auto;
			padding: 0 10px;
		}
		.flowAA {
			height: 100%;
			overflow: auto;
		}
	}
</style>