<script setup lang="ts">
	import { myTypeof } from '../../utils/globalFunc'
	import { setTimeout } from '../../utils/timer'

	const emit = defineEmits(['update:modelValue'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string | any[] | Date
			type?: 'date' | 'daterange' | 'datetime' | 'datetimerange' | 'year' | 'month'
			options?: Record<string, any>
			placement?:
				| 'top'
				| 'top-start'
				| 'top-end'
				| 'bottom'
				| 'bottom-start'
				| 'bottom-end'
				| 'left'
				| 'left-start'
				| 'left-end'
				| 'right'
				| 'right-start'
				| 'right-end'
			placeholder?: string
			clearable?: boolean
			disabled?: boolean
		}>(),
		{
			type: 'date',
			options: () => ({}),
			placement: 'bottom-end',
			clearable: true,
			disabled: false
		}
	)
	const dateC = ref()
	const transferId = 'date-c-r-' + Math.floor(Math.random() * 10000000 + 10000000)
	const optionsT = ref<Record<string, any>>({})
	const valueT = computed({
		get() {
			return props.modelValue
		},
		set(v) {
			emit('update:modelValue', v)
		}
	})
	const otherOptions = computed(() => {
		if (myTypeof(props.options) === 'Object') {
			const { disabledDate, ...others } = props.options
			return others
		}
		return {}
	})

	function getOptions(d: any) {
		const t = d.target
		if (t.classList?.contains?.('ivu-date-picker-cells-cell') || t.tagName === 'EM') {
			setTimeout(() => {
				const r = dateC?.value?.$refs.pickerPanel?.rangeState
				if (r) {
					const from = r.from
					const selecting = r.selecting
					optionsT.value = {
						...otherOptions.value,
						disabledDate: (d: any) => {
							if (typeof props.options?.disabledDate === 'function') {
								return props.options.disabledDate(d, from, selecting)
							}
							return false
						}
					}
				}
			}, 1)
		}
	}

	watch(
		() => props.options,
		(d: any) => {
			optionsT.value = d
		},
		{ immediate: true }
	)

	onMounted(() => {
		const el = document.getElementsByClassName(transferId)[0]
		el?.addEventListener?.('click', getOptions, true)
	})
</script>

<template>
	<DatePicker
		ref="dateC"
		v-model="valueT"
		:type="type"
		:options="optionsT"
		:placement="placement"
		:placeholder="placeholder"
		:clearable="clearable"
		:disabled="disabled"
		:editable="false"
		:transferClassName="transferId"
		transfer
	/>
</template>
