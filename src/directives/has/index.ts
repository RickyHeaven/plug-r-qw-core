/**
 * @description 权限控制指令，用于根据权限显示/隐藏元素
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
import type { Directive, DirectiveBinding } from 'vue'
import { hasPermission } from '../../utils/globalFunc'

export default {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		if (binding.value && !hasPermission(binding.value)) {
			el.style.display = 'none'
		}
	}
} as Directive