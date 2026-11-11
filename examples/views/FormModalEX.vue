<script setup lang="ts">
	import { setTimeout, FormModal } from '../../src'
	import ShowReadMe from '@/components/ShowReadMe.vue'

	const formModal = ref()
	const formModalB = ref()
	const data = [
		{
			type: 'input',
			key: 'name',
			label: '名称'
		},
		{
			type: 'radioGroup',
			key: 'sex',
			label: '性别',
			options: [
				{
					label: '男',
					val: 1
				},
				{
					label: '女',
					val: 0
				}
			]
		},
		{
			type: 'radioGroup',
			key: 'married',
			label: '婚姻',
			options: [
				{
					label: '已婚',
					val: 1
				},
				{
					label: '未婚',
					val: 0
				}
			]
		},
		{
			type: 'input',
			key: 'husband',
			label: '老公',
			show: [
				{ key: 'married', val: [1] },
				{ key: 'sex', val: [0] }
			]
		},
		{
			type: 'input',
			key: 'wife',
			label: '老婆',
			show: [
				{ key: 'married', val: [1] },
				{ key: 'sex', val: [1] }
			]
		}
	]
	const rules = {
		name: {
			required: true
		}
	}

	function confirmHandle(d?: string) {
		if (d === 'b') {
			formModalB.value.open()
		} else {
			formModal.value.open()
		}
	}

	function handleClose(d?: string) {
		if (d === 'b') {
			formModalB.value.resetForm()
		} else {
			formModal.value.resetForm()
		}
	}

	function handleSub(val: Record<string, any>, d?: string) {
		console.log(val)
		if (d === 'b') {
			setTimeout(() => {
				formModalB.value.close()
			}, 2000)
		} else {
			formModal.value.close()
		}
	}
</script>

<template>
	<div class="examplePageL tc">
		<ShowReadMe />
		<p> 说明：formModal核心组件是formR,所以formData和formRules规则参考formR的例子和说明文档 </p>
		<p>formModal在formR（表单）的基础上，添加了modal(弹框)相关的功能</p>
		<Button style="margin-top: 20px" @click="confirmHandle">表单弹框</Button>
		<Button style="margin-top: 20px" @click="confirmHandle('b')">带loading</Button>
		<FormModal
			ref="formModal"
			:form-data="data"
			:form-rules="rules"
			@on-submit="handleSub"
			@on-close="handleClose"
		></FormModal>
		<FormModal
			ref="formModalB"
			:form-data="data"
			:form-rules="rules"
			:btn-loading="true"
			@on-submit="handleSub($event, 'b')"
			@on-close="handleClose('b')"
		></FormModal>
	</div>
</template>

<style lang="less" scoped>
	.examplePageL {
		> button + button {
			margin-left: 10px;
		}
	}
</style>