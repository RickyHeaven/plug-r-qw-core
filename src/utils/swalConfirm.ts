/**
 * @description 提示框
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2023.05.09
 */

import $swal from './swal'
import { t } from '../locale'

export default function $swalConfirm(
	this: any,
	title: string,
	text: string,
	icon: string,
	onOk: () => void,
	closeOnClickOutside: boolean = false
) {
	const T = (...arg: Parameters<typeof t>) => t.apply(this, arg)
	$swal.call(this, {
		title: title === null ? T('r.info.title') : title,
		text: text === null ? T('r.info.text') : text,
		icon: icon === null ? 'warning' : icon,
		onOk: onOk,
		buttons: [T('r.cancel')],
		closeOnClickOutside: closeOnClickOutside
	})
}
