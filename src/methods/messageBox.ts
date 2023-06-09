/**
 * @description 基于view-ui:Modal的对话框插件
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.05.04
 */
import { Modal } from 'view-ui-plus'
import { myTypeof } from './functionGroup'
import { t } from '../locale'
import type { RichTxt } from '../public'

/**
 * config为一个对象，支持：
 * @param {string/html} content:弹框内容，同iView的content,
 * @param {number} height:弹框高度,默认值130,最小值130
 * @param {number} width:弹框宽度，默认值416,最小值416
 * @param {string/html} title:弹框标题内容，默认值“提示”
 * @param {function} onOk:确定按钮回调函数
 * @param {function} onCancel:取消按钮回调函数
 * @param {string/html} okText:确定按钮文字，默认值“确定”
 * @param {string/html} cancelText:取消按钮文字，默认值“取消”
 * @param {boolean} noWarnIcon:不展示内容开头的警告图标(非字符串内容默认不展示)，默认值“false”
 * @param {string} footerAlign:底部对齐方式，string，默认值“center”
 * @param {boolean} cancelBt:展示取消按钮，boolean，默认值“true”
 * 组件中调用示例：this.messageBox({
 *                      content:'确定执行操作？'
 *                    })
 */

export default function messageBox(
	this: any,
	{
		height,
		width = 416,
		title,
		content,
		onOk,
		onCancel,
		okText,
		cancelText,
		noWarnIcon,
		footerAlign,
		cancelBt
	}: {
		height?: number
		width?: number
		title?: RichTxt
		content: RichTxt
		onOk?: () => void
		onCancel?: () => void
		okText?: RichTxt
		cancelText?: RichTxt
		noWarnIcon?: boolean
		footerAlign?: string
		cancelBt?: boolean
	}
): void {
	const T = (...arg: Parameters<typeof t>) => t.apply(this, arg)

	let heightTemp = height && Number(height) - 90 > 100 ? Number(height) - 90 + 'px' : 0
	let heightT = heightTemp || '100px'
	content = content || T('r.info.text')
	let stringContent = myTypeof(content) === 'String'

	Modal.warning({
		width: width,
		footerHide: true,
		render: (h: any) => {
			return h(
				'div',
				{
					class: 'customMessageBox',
					style: {
						height: heightT
					}
				},
				[
					h(
						'div',
						{
							class: 'containerN'
						},
						[
							h(
								'div',
								{
									class: 'titleN'
								},
								[
									h('span', title || T('r.info.title')),
									h(
										'Button',
										{
											class: 'fr closeN ivu-btn ivu-btn-text',
											type: 'text',
											onclick() {
												Modal.remove()
											}
										},
										[
											h('i', {
												class: 'ivu-icon ivu-icon-ios-close',
												style: {
													fontSize: '30px'
												}
											})
										]
									)
								]
							),
							h(
								'div',
								{
									class: 'contentN',
									style: {
										textAlign: stringContent ? 'center' : 'left'
									}
								},
								[
									h('i', {
										class: stringContent && !noWarnIcon ? 'ivu-icon ivu-icon-ios-alert-outline' : 'hide',
										style: {
											fontSize: '60px',
											color: '#f8bb86'
										}
									}),
									h('div', { class: 'msgBoxConO' }, content)
								]
							),
							h(
								'div',
								{
									class: 'footerN',
									style: {
										textAlign: footerAlign || 'center'
									}
								},
								[
									h(
										'Button',
										{
											class: 'okBtN ivu-btn ivu-btn-default',
											onclick() {
												Modal.remove()
												if (onOk && myTypeof(onOk) === 'Function') {
													onOk()
												}
											}
										},
										[
											h('i', {
												class: 'ivu-load-loop ivu-icon ivu-icon-ios-loading'
											}),
											h('span', okText || T('r.confirm'))
										]
									),
									h(
										'Button',
										{
											class: ['cancelBtN ivu-btn ivu-btn-default', !cancelBt && 'hide'],
											onclick() {
												Modal.remove()
												if (myTypeof(onCancel) === 'Function') {
													onCancel && onCancel()
												}
											}
										},
										cancelText || T('r.cancel')
									)
								]
							)
						]
					)
				]
			)
		}
	})
}
