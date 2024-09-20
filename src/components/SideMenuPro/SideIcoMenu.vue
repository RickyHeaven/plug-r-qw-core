<!--SideIcoMenu
@created 2024.09.14
@author Ricky email:zhangqingcq@foxmail.com-->
<script lang="ts" setup>
	import SideMenuTwoLevel from './SideMenuTwoLevel.vue'

	const router = useRouter()
	const props = withDefaults(defineProps<{ data?: any[]; pathName?: string }>(), {
		data: () => [],
		pathName: ''
	})

	const current = ref('')

	function getClass(item: any) {
		let t = 'menuTxtR '
		if (item?.path === props.pathName) {
			t += 'active '
		}
		return t
	}

	function handleClick(e: any, item: any) {
		e?.preventDefault?.()
		let target = e?.target

		if (item && !item.children && !target.classList.contains('active')) {
			router.push(item.path)
		}
	}

	function handleMouseenter(e: any, item: any) {
		e?.preventDefault?.()
		current.value = item?.path
	}

	function handleMouseleave(e: any) {
		e?.preventDefault?.()
		current.value = ''
	}
</script>
<template>
	<ul class="groupBoxRX">
		<template v-for="(item, i) of props.data" :key="item?.path + i">
			<li
				:class="{ dropItemRX: item.children }"
				@mouseenter="handleMouseenter($event, item)"
				@mouseleave="handleMouseleave($event)"
			>
				<div :class="getClass(item)" @click="handleClick($event, item)">
					<Icon class="menuIcoM" :custom="'iconfont ' + (item.icon || 'icon-r-menu-default')" size="20" />
				</div>
				<SideMenuTwoLevel
					class="rightTwoMenu"
					v-show="current === item?.path"
					:data="[item]"
					:pathName="props.pathName"
					fromIcoMenu
				/>
			</li>
		</template>
	</ul>
</template>
