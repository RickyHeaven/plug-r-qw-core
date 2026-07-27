<script setup lang="ts">
	import { fullScreenImgPreview } from '../../src'
	import testImg from '../assets/testImg.png'

	function preview() {
		fullScreenImgPreview(testImg)
	}
</script>

<template>
	<p class="tip">推荐使用 fullScreenImgByDom 方法，因为它实现方案更合理、稳定，功能更多</p>

	<div class="linkImgV" @click="preview">
		<img src="../assets/testImg.png" alt="testImg" />
		<p>单张图全屏预览</p>
	</div>
</template>
<style lang="less" scoped>
	.tip {
		margin-bottom: 25px;
		color: #666;
	}
	.linkImgV {
		cursor: pointer;
		width: 300px;
		display: inline-block;
		text-align: center;

		&:hover {
			opacity: 0.85;
		}
		img {
			display: inline-block;
			height: 80px;
		}
	}
</style>
