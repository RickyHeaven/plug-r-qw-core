<script setup lang="ts">
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import { TransferBox, downloadFileReaderFile } from '../../src'
	import imgK from '../assets/testImg.png'

	const columns = [
		{
			title: 'ID',
			key: 'id',
			width: 80
		},
		{
			title: '文件名称',
			key: 'name',
			minWidth: 150,
			render: (h: any, params: any) => {
				return h(
					'span',
					{
						class: 'link',
						onClick: () => {
							downloadFileReaderFile('模拟文件下载', imgK)
						}
					},
					params.row.name
				)
			}
		},
		{
			title: '文件类型',
			key: 'mimeType',
			align: 'center'
		},
		{
			title: '文件大小',
			key: 'size',
			align: 'center'
		},
		{
			title: '备注',
			key: 'remark',
			align: 'center'
		}
	]

	const formData = [
		{
			type: 'input',
			key: 'name',
			label: '文件名称'
		},
		{
			type: 'input',
			key: 'mimeType',
			label: '文件类型'
		}
	]

	function onChangeL(d: any) {
		console.log('左侧表格数据更新', d)
	}
</script>

<template>
	<show-read-me />
	<span class="infoMD">请注意：该示例因为要请求接口，所以请执行“npm run node-serve”开启node-serve后方可正常演示</span>
	<div style="height: calc(100% - 42px); margin-top: 20px; background-color: #fff">
		<transfer-box
			ref="transferRef"
			:formDataLeft="formData"
			:formDataRight="formData"
			:left-table-columns="columns"
			:right-table-columns="columns"
			left-table-url="/node-serve/transfer-box-added"
			right-table-url="/node-serve/transfer-box-not-added"
			add-url="/node-serve/transfer-box-added"
			delete-url="/node-serve/transfer-box-not-added"
			add-all-url="/node-serve/transfer-box-added-all"
			delete-all-url="/node-serve/transfer-box-not-added-all"
			:add-params-handle="(e) => e"
			:delete-params-handle="(e) => e"
			@on-data-change-l="onChangeL"
		/>
	</div>
</template>
