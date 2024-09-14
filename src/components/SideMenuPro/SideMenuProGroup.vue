<script lang="ts" setup>
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
				:class="{ dropItemRX: item?.children }"
				@mouseenter="handleMouseenter($event, item)"
				@mouseleave="handleMouseleave($event)"
			>
				<div
					:class="getClass(item)"
					@click="handleClick($event, item)"
					:style="{ paddingLeft: item.level * 20 + 'px' }"
				>
					{{ item?.name || '-- no name --' }}
					<Icon
						class="dropIcoRX"
						type="ios-arrow-forward"
						:size="16"
						v-show="item.children && item.children.length > 0"
					/>
				</div>
				<SideMenuProGroup
					class="rightChildRX"
					v-if="item?.children?.length > 0"
					v-show="current === item?.path"
					:data="item?.children"
					:path-name="pathName"
				/>
			</li>
		</template>
	</ul>
</template>
