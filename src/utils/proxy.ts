import { getCurrentInstance } from 'vue'

export default function () {
	const appContext = getCurrentInstance()?.appContext
	const t: Record<string, any> = appContext?.config?.globalProperties || {}
	return t
}
