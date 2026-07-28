<script lang="ts" setup>
	import ShowReadMe from '@/components/ShowReadMe.vue'

	const content1 = ref('<p>你好！这是EditorPro富文本编辑器示例</p>')
	const content2 = ref('<p>这是简洁模式的编辑器</p>')
	const content3 = ref('<p>这是自定义工具栏的编辑器</p>')
	const content4 = ref('')
	const content5 = ref('<p>这是禁用状态的编辑器</p>')
	const content6 = ref('')

	const toolbarConfig3 = {
		excludeKeys: ['emotion', 'insertVideo']
	}

	const editorConfig4 = {
		placeholder: '请输入文章内容...'
	}
</script>

<template>
	<show-read-me />
	<div class="wellWall">
		<well-card class="editorBox" fit-to-content title="基础用法">
			<div class="innerK">
				<p style="margin-bottom: 10px">说明：基础用法，v-model绑定编辑器内容</p>
				<p>编辑器内容：{{ content1 }}</p>
				<EditorPro v-model="content1" />
			</div>
		</well-card>

		<!--		<well-card class="editorBox" fit-to-content title="简洁模式">
			<div class="innerK">
				<p style="margin-bottom: 10px">说明：简洁模式，仅有部分常见功能，更加简洁易用</p>
				<p>编辑器内容：{{ content2 }}</p>
				<EditorPro v-model="content2" mode="simple" />
			</div>
		</well-card>

		<well-card class="editorBox" fit-to-content title="自定义工具栏">
			<div class="innerK">
				<p style="margin-bottom: 10px">说明：通过toolbarConfig配置排除部分工具栏菜单</p>
				<p>编辑器内容：{{ content3 }}</p>
				<EditorPro v-model="content3" :toolbar-config="toolbarConfig3" />
			</div>
		</well-card>

		<well-card class="editorBox" fit-to-content title="自定义占位符">
			<div class="innerK">
				<p style="margin-bottom: 10px">说明：自定义占位符提示文字</p>
				<p>编辑器内容：{{ content4 }}</p>
				<EditorPro v-model="content4" :editor-config="editorConfig4" />
			</div>
		</well-card>

		<well-card class="editorBox" fit-to-content title="自定义高度">
			<div class="innerK">
				<p style="margin-bottom: 10px">说明：自定义编辑区域高度为500px</p>
				<p>编辑器内容：{{ content1 }}</p>
				<EditorPro v-model="content1" :height="500" />
			</div>
		</well-card>

		<well-card class="editorBox" fit-to-content title="禁用状态">
			<div class="innerK">
				<p style="margin-bottom: 10px">说明：禁用编辑器编辑功能，只能查看</p>
				<p>编辑器内容：{{ content5 }}</p>
				<EditorPro v-model="content5" :disabled="true" />
			</div>
		</well-card>

		<well-card class="editorBox" fit-to-content title="空内容">
			<div class="innerK">
				<p style="margin-bottom: 10px">说明：空内容时显示占位符</p>
				<p>编辑器内容：{{ content6 }}</p>
				<EditorPro v-model="content6" />
			</div>
		</well-card>-->
	</div>
</template>

<style lang="less" scoped>
	.wellWall {
		margin-top: 15px;
		padding: 30px 20px 10px 20px;
		overflow: auto;
		height: calc(100% - 42px);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #fff;

		.editorBox {
			text-align: left;
			margin-bottom: 20px;

			.innerK {
				width: 800px;
				padding: 20px;
				height: 100%;
			}
		}
	}
</style>
