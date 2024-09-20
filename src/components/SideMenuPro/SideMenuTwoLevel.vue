<!--SideMenuTwoLevel
@created 2024.09.14
@author Ricky email:zhangqingcq@foxmail.com-->
<script lang="ts" setup>
	import { siblingElems } from '../../utils/globalFunc'
	import SideMenuProGroup from './SideMenuProGroup.vue'

	const router = useRouter()
	const props = withDefaults(defineProps<{ data?: any[]; pathName?: string; fromIcoMenu?: boolean }>(), {
		data: () => [],
		pathName: ''
	})

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
			return
		}

		const ico = target?.querySelector?.('.dropIcoRX')
		const parent = target.parentNode
		const siblings = siblingElems(parent)
		for (let item of siblings) {
			item?.classList?.remove?.('open')
			const icoI = item?.querySelector?.('.dropIcoRX')
			icoI?.classList?.remove?.('open') //手风琴效果
			const child = item?.querySelectorAll?.('.open')
			for (let e of child) {
				e?.classList?.remove?.('open')
			}
		}
		parent?.classList?.toggle?.('open')
		ico?.classList?.toggle?.('open')
	}
</script>
<template>
	<ul class="groupBoxRX">
		<template v-for="(item, i) of props.data" :key="item?.path + i">
			<li :class="{ dropItemRX: item?.children, open: props.fromIcoMenu, fromIcoMenu: props.fromIcoMenu }">
				<div
					:class="getClass(item)"
					@click="handleClick($event, item)"
					:style="{ paddingLeft: item.level * 20 + 'px' }"
				>
					<Icon class="menuIcoL" :custom="'iconfont ' + (item.icon || 'icon-r-menu-default')" />
					<span>{{ item?.name || '-- no name --' }}</span>
					<Icon
						:class="['dropIcoRX', { open: props.fromIcoMenu, fromIcoMenu: props.fromIcoMenu }]"
						type="ios-arrow-forward"
						v-show="item.children && item.children.length > 0"
					/>
				</div>
				<SideMenuProGroup :data="item.children" v-if="item.children" :path-name="props.pathName" />
			</li>
		</template>
	</ul>
</template>
