/**
 * @description 滚动加载更多指令，常用于select下拉滚动监听
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 *
 * 注意：本指令从 document 查找滚动元素，而非从绑定元素向下查找。
 * 原因是 view-design/iview 等 UI 框架的 select 开启 transfer 后，
 * 下拉列表会被渲染到 body 下，不在绑定元素的 DOM 树内。
 * 从 document 查找可以适配此类场景。
 */
import type { Directive, DirectiveBinding } from 'vue'

interface LoadmoreElement extends HTMLElement {
	__loadmoreScrollHandler__?: EventListener
	__loadmoreSelectDom__?: HTMLElement
}

export default {
	mounted(el: LoadmoreElement, binding: DirectiveBinding) {
		let SELECT_DOM: HTMLElement | null = null

		if (binding.arg) {
			// 从 document 查找滚动容器，适配 transfer 模式下下拉列表被渲染到 body 的场景
			SELECT_DOM = document.getElementsByClassName(binding.arg)?.[0] as HTMLElement | null
		}

		if (!SELECT_DOM) {
			return
		}

		const scrollHandler = function () {
			if (SELECT_DOM!.scrollTop > 0 && SELECT_DOM!.scrollHeight - SELECT_DOM!.scrollTop <= SELECT_DOM!.clientHeight) {
				if (binding.value && typeof binding.value === 'function') {
					binding.value()
				}
			}
		}

		SELECT_DOM.addEventListener('scroll', scrollHandler)
		el.__loadmoreScrollHandler__ = scrollHandler
		el.__loadmoreSelectDom__ = SELECT_DOM
	},
	unmounted(el: LoadmoreElement) {
		if (el.__loadmoreSelectDom__ && el.__loadmoreScrollHandler__) {
			el.__loadmoreSelectDom__.removeEventListener('scroll', el.__loadmoreScrollHandler__)
		}
		delete el.__loadmoreScrollHandler__
		delete el.__loadmoreSelectDom__
	}
} as Directive
