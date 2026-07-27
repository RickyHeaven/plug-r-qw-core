/**
 * @description 滚动加载更多指令，常用于select下拉滚动监听
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
import type { Directive, DirectiveBinding } from 'vue'

export default {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		let SELECT_DOM: HTMLElement | null = el

		if (binding.arg) {
			SELECT_DOM = el.getElementsByClassName(binding.arg as string)?.[0] as HTMLElement
		}

		if (!SELECT_DOM) {
			return
		}

		SELECT_DOM.addEventListener('scroll', function () {
			if (SELECT_DOM!.scrollTop > 0 && SELECT_DOM!.scrollHeight - SELECT_DOM!.scrollTop <= SELECT_DOM!.clientHeight) {
				binding.value()
			}
		})
	}
} as Directive