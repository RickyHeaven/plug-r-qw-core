/**
 * @description 滚动加载更多指令，常用于select下拉滚动监听
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
import type { Directive, DirectiveBinding } from 'vue'

interface LoadmoreElement extends HTMLElement {
	__loadmoreScrollHandler__?: EventListener
	__loadmoreSelectDom__?: HTMLElement
}

export default {
	mounted(el: LoadmoreElement, binding: DirectiveBinding) {
		let SELECT_DOM: HTMLElement | null = el

		if (binding.arg) {
			SELECT_DOM = el.getElementsByClassName(binding.arg as string)?.[0] as HTMLElement
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