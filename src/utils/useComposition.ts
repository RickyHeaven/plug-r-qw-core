/**
 * IME Composition 输入法组合状态管理工具
 * 用于处理中文等输入法的 compositionstart/compositionend 事件
 * 避免在输入法组合过程中触发不必要的 change/search 事件
 *
 * @example
 * const { isComposing, onCompositionStart, onCompositionEnd, handleChange } = useComposition()
 *
 * <Input
 *   @compositionstart="onCompositionStart"
 *   @compositionend="onCompositionEnd"
 *   @on-change="handleChange(() => { 你的实际处理逻辑 })
 * />
 */

import { ref } from 'vue'

export function useComposition() {
	const isComposing = ref(false)

	function onCompositionStart() {
		isComposing.value = true
	}

	function onCompositionEnd() {
		isComposing.value = false
	}

	/**
	 * 包装 change 事件处理函数，在 composition 过程中不执行
	 * @param callback 实际的回调函数
	 */
	function handleChange(callback: () => void) {
		if (!isComposing.value) {
			callback()
		}
	}

	/**
	 * 包装 search/submit 事件处理函数，在 composition 过程中不执行
	 * @param callback 实际的回调函数
	 */
	function handleSearch(callback: () => void) {
		if (!isComposing.value) {
			callback()
		}
	}

	return {
		isComposing,
		onCompositionStart,
		onCompositionEnd,
		handleChange,
		handleSearch
	}
}
