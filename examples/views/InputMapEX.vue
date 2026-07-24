<script setup>
	import ShowReadMe from '@/components/ShowReadMe.vue'
	import { setTimeout } from '../../src'

	const value = ref({
		name: '光电园(地铁站)',
		lng: 106.499401,
		lat: 29.616077
	})

	const value2 = ref({
		name: '光电园(地铁站)',
		lng: 106.499401,
		lat: 29.616077
	})

	onMounted(() => {
		setTimeout(() => {
			value.value = {
				lat: 39.99211,
				lng: 116.315801,
				name: '北京大学东门'
			}
		}, 8000)
	})
</script>

<template>
	<div class="examplePageL vh100">
		<ShowReadMe />
		<div class="mapBox">
			<h3>沉浸式（默认，inputInMap=true）</h3>
			<InputMap v-model="value" />
		</div>
		<div class="mapBox">
			<h3>分离式（inputInMap=false）</h3>
			<InputMap v-model="value2" :inputInMap="false" />
		</div>
	</div>
</template>

<style scoped>
	.mapBox {
		width: 600px;
		margin: 0 auto 30px;
	}
	h3 {
		margin-bottom: 10px;
	}
</style>
