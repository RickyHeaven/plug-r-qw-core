<script setup lang="ts">
	import { ref } from 'vue'
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import { AsyncCascader, WellCard, HeaderBt } from '../../src'

	const value1 = ref()
	const value2 = ref([2, 118])
	const value3 = ref(118)
	const disabled = ref(true)
	const label1 = ref('')
	const label2 = ref('知了知识库有限公司/Engineer')
	const label3 = ref('知了知识库有限公司/Engineer')

	function handleLabelChange1(label: string) {
		label1.value = label
	}

	function handleLabelChange2(label: string) {
		label2.value = label
	}

	function handleLabelChange3(label: string) {
		label3.value = label
	}
</script>

<template>
	<show-read-me />
	<div class="boxKJ">
		<wellCard title="基础用法">
			<div class="inF">
				<async-cascader url="/testData/asyncCascader.json" v-model="value1" @on-label-change="handleLabelChange1" />
				<p class="output">
					组件值： <span>{{ value1 }}</span>
				</p>
				<p class="output">
					选中标签： <span>{{ label1 }}</span>
				</p>
			</div>
		</wellCard>
	</div>
	<div class="boxKJ">
		<wellCard title="可搜索">
			<div class="inF">
				<async-cascader
					url="/testData/asyncCascader.json"
					v-model="value2"
					:filterable="true"
					@on-label-change="handleLabelChange2"
				/>
				<p class="output">
					组件值： <span>{{ value2 }}</span>
				</p>
				<p class="output">
					选中标签： <span>{{ label2 }}</span>
				</p>
			</div>
		</wellCard>
	</div>
	<div class="boxKJ">
		<wellCard title="禁用状态">
			<template #bts>
				<HeaderBt :icon="disabled ? 'md-unlock' : 'md-lock'" @click="disabled = !disabled"
					>{{ disabled ? '解禁' : '禁用' }}
				</HeaderBt>
			</template>
			<div class="inF">
				<async-cascader
					url="/testData/asyncCascader.json"
					v-model="value3"
					:disabled="disabled"
					@on-label-change="handleLabelChange3"
				/>
				<p class="output">
					组件值： <span>{{ value3 }}</span>
				</p>
				<p class="output">
					选中标签： <span>{{ label3 }}</span>
				</p>
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
			margin-top: 15px;
			word-break: break-all;
		}
	}
</style>
