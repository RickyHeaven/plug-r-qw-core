/**
 * @description 点击外部区域指令
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2023.07.14
 */
import { isClient } from '../../utils/globalFunc'

export default {
	beforeMount(el: any, binding: any) {
		el.__vueClickOutsideBinding__ = binding

		function documentHandler(e: any) {
			if (el.contains(e.target)) {
				return false
			}
			el.__vueClickOutsideBinding__?.value?.(e)
		}

		el.__vueClickOutside__ = documentHandler
		isClient && document.addEventListener('click', documentHandler)
	},
	updated(el: any, binding: any) {
		el.__vueClickOutsideBinding__ = binding
	},
	unmounted(el: any) {
		isClient && document.removeEventListener('click', el.__vueClickOutside__)
		delete el.__vueClickOutside__
		delete el.__vueClickOutsideBinding__
	}
}
