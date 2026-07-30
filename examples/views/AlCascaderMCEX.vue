<script setup lang="ts">
	import { ref } from 'vue'
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import { AlCascaderMC, WellCard, HeaderBt } from '../../src'

	const value1 = ref(null)
	const value2 = ref(null)
	const value3 = ref(null)
	const value4 = ref(110105000000)
	const disabled = ref(true)
	const name1 = ref('')
	const name2 = ref('')
	const name3 = ref('')
	const name4 = ref('北京市/市辖区/朝阳区')

	function handleNameChange1(name: string) {
		name1.value = name
	}

	function handleNameChange2(name: string) {
		name2.value = name
	}

	function handleNameChange3(name: string) {
		name3.value = name
	}

	function handleNameChange4(name: string) {
		name4.value = name
	}
</script>

<template>
	<show-read-me />
	<div class="boxKJ">
		<wellCard title="基础用法（县级）">
			<div class="inF">
				<al-cascader-m-c v-model="value1" @on-name-change="handleNameChange1" />
				<p class="output">
					组件值： <span>{{ value1 }}</span>
				</p>
				<p class="output">
					中文地址： <span>{{ name1 }}</span>
				</p>
			</div>
		</wellCard>
	</div>
	<div class="boxKJ">
		<wellCard title="市级（level=1）">
			<div class="inF">
				<al-cascader-m-c v-model="value2" :level="1" @on-name-change="handleNameChange2" />
				<p class="output">
					组件值： <span>{{ value2 }}</span>
				</p>
				<p class="output">
					中文地址： <span>{{ name2 }}</span>
				</p>
			</div>
		</wellCard>
	</div>
	<div class="boxKJ">
		<wellCard title="省级（level=0）">
			<div class="inF">
				<al-cascader-m-c v-model="value3" :level="0" @on-name-change="handleNameChange3" />
				<p class="output">
					组件值： <span>{{ value3 }}</span>
				</p>
				<p class="output">
					中文地址： <span>{{ name3 }}</span>
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
				<al-cascader-m-c v-model="value4" :disabled="disabled" @on-name-change="handleNameChange4" />
				<p class="output">
					组件值： <span>{{ value4 }}</span>
				</p>
				<p class="output">
					中文地址： <span>{{ name4 }}</span>
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