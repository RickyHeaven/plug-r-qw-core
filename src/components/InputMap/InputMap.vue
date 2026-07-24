<!--InputMap 带搜索框的地图组件，支持搜索地点，经纬度回显地点，缩放，移动地图，拖动标记，点击标记显示地点信息
@created 2023.08.16
@author Ricky email:zhangqingcq@foxmail.com-->

<script lang="ts" setup>
	import { cloneDeep, isNumber } from 'lodash-es'
	import t from '../../locale/i18nSFC'
	import { setTimeout } from '../../utils/timer'
	import AMapLoader from '@amap/amap-jsapi-loader'
	import { get } from '../../utils/amap'
	import { Input } from 'view-ui-plus'

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: Record<string, any>
			width?: string | number
			height?: string | number
			placeholder?: string
			disabled?: boolean
			showMap?: boolean
			inputInMap?: boolean
		}>(),
		{
			modelValue: () => ({}),
			width: '100%',
			disabled: false,
			showMap: true,
			inputInMap: true
		}
	)

	const searchText = ref('')
	const addressList = ref<Array<Record<string, any>>>([])

	const valueT = computed({
		get() {
			let temp
			if (!props.modelValue) {
				temp = {
					name: null
				}
			} else if (!props.modelValue.name) {
				temp = {
					...props.modelValue,
					name: null
				}
			} else {
				temp = cloneDeep(props.modelValue)
			}
			return temp
		},
		set(val) {
			emit('update:modelValue', cloneDeep(val))
		}
	})

	const widthT = computed(() => {
		if (isNumber(props.width)) {
			return props.width + 'px'
		} else {
			return props.width
		}
	})

	const heightT = computed(() => {
		if (isNumber(props.height)) {
			return props.height + 'px'
		} else if (props.height) {
			return props.height
		} else if (isNumber(props.width)) {
			return props.width * 0.66 + 'px'
		} else {
			return '200px'
		}
	})

	const containerStyle = computed<Record<string, any>>(() => ({
		width: widthT.value,
		position: 'relative'
	}))

	const mapStyle = computed<Record<string, any>>(() => {
		if (props.inputInMap) {
			return {
				width: widthT.value,
				height: heightT.value,
				marginTop: '6px',
				opacity: props.showMap ? 1 : 0,
				position: props.showMap ? 'relative' : 'absolute',
				top: props.showMap ? 0 : '-10000px'
			}
		} else {
			return {
				width: widthT.value,
				height: heightT.value,
				marginTop: '6px'
			}
		}
	})

	watch(
		() => props.modelValue,
		(after) => {
			if (after?.name) {
				searchText.value = after.name
			}
			//更新地图mark
			if (props.showMap && after && after.lng && after.lat) {
				if (!Map || !GeoCoder) {
					return
				}
				createMarker({
					lng: after.lng,
					lat: after.lat,
					name: after.name
				})
			}
		}
	)

	const mapId = 'mapId' + Math.floor(Math.random() * 1000000000)
	const mapInputRef = ref<InstanceType<typeof Input> | null>(null)
	const mapRef = ref<HTMLDivElement | null>(null)
	let infoWindow: Record<string, any> | null

	function checkHeight() {
		if ((mapRef.value && mapRef.value.clientHeight < 10) || !mapRef.value) {
			setTimeout(checkHeight, 300)
		} else {
			/*高德地图实例初始化较慢，暂时延时1秒，后面寻找完美解决方案*/
			setTimeout(initMap, 100)
		}
	}

	function initSearchText() {
		if (props.modelValue?.name) {
			searchText.value = props.modelValue.name
		}
	}

	let AMap: any
	let Map: any
	let GeoCoder: any
	let AutoComplete: any

	function initMap() {
		AMapLoader.load({
			key: get('key'),
			version: '2.0',
			plugins: ['AMap.AutoComplete', 'AMap.Geocoder']
		}).then((_map) => {
			AMap = _map
			Map = new AMap.Map(mapId).on('complete', () => {
				GeoCoder = new AMap.Geocoder()

				if (props.modelValue?.lng && props.modelValue?.lat) {
					createMarker({
						lng: props.modelValue.lng,
						lat: props.modelValue.lat,
						name: props.modelValue.name
					})
				}
			})
		})
	}

	function handleSearch() {
		if (!searchText.value.trim()) return
		if (props.showMap && !Map) {
			console.warn('地图未就绪，请稍后重试')
			return
		}

		AMapLoader.load({
			key: get('key'),
			version: '2.0',
			plugins: ['AMap.AutoComplete']
		}).then((_map) => {
			if (!AutoComplete) {
				AutoComplete = new _map.Autocomplete({
					city: '全国',
					type: ''
				})
			}

			AutoComplete.search(searchText.value, (status: string, result: Record<string, any>) => {
				if (status === 'complete' && result.info === 'OK') {
					addressList.value = result.tips
						.slice(0, 10)
						.filter((item: Record<string, any>) => item.name && (item.address || (item.location?.lng && item.location?.lat)))
						.map((item: Record<string, any>) => ({
							name: item.name,
							address: item.address,
							lng: item.location?.lng,
							lat: item.location?.lat
						}))
				} else {
					addressList.value = []
					console.warn('地址搜索失败', result)
				}
			})
		})
	}

	function selectAddress(item: Record<string, any>) {
		searchText.value = item.name
		addressList.value = []

		if (typeof item.lng === 'number' && typeof item.lat === 'number') {
			if (props.showMap) {
				createMarker({
					name: item.name,
					lng: item.lng,
					lat: item.lat
				})
			}
			valueT.value = {
				name: item.name,
				lng: item.lng,
				lat: item.lat
			}
			emit('on-change', {
				name: item.name,
				lng: item.lng,
				lat: item.lat
			})
		} else if (item.name) {
			if (props.showMap) {
				GeoCoder?.getLocation(item.name, (status: string, result: Record<string, any>) => {
					if (status === 'complete' && result.info === 'OK' && result.geocodes?.length > 0) {
						const location = result.geocodes[0].location
						createMarker({
							name: item.name,
							lng: location.lng,
							lat: location.lat
						})
						valueT.value = {
							name: item.name,
							lng: location.lng,
							lat: location.lat
						}
						emit('on-change', {
							name: item.name,
							lng: location.lng,
							lat: location.lat
						})
					} else {
						console.warn('地址地理编码失败', result)
					}
				})
			} else {
				valueT.value = {
					name: item.name
				}
				emit('on-change', {
					name: item.name
				})
			}
		}
	}

	function createMarker({ lng, lat, name }: { lng: number; lat: number; name: string }) {
		if (typeof lng !== 'number' || typeof lat !== 'number') {
			console.warn('无效的坐标数据:', { lng, lat })
			return
		}
		if (!Map) {
			console.warn('地图实例不存在')
			return
		}

		Map?.clearMap()
		let point = new AMap.LngLat(lng, lat)
		Map?.setCenter(point)

		let marker = new AMap.Marker({
			map: Map,
			position: point,
			draggable: true
		})

		getAddress(lng, lat)
		marker.on('dragend', () => {
			let dragPoint = marker.getPosition()
			valueT.value = {
				name: name || null,
				lng: dragPoint.lng,
				lat: dragPoint.lat
			}
			getAddress(dragPoint.lng, dragPoint.lat)
		})
		marker.on('click', (e: Record<string, any>) => {
			if (infoWindow) {
				infoWindow.open(Map, e?.target?.getPosition?.())
			}
		})
		Map?.setFitView()
	}

	function getAddress(lng: number, lat: number) {
		const infoWindowClass = props.inputInMap ? 'mapInfoWindowIKJ' : 'mapInfoWindowMA'
		GeoCoder?.getAddress([lng, lat], (status: string, result: Record<string, any>) => {
			if (status === 'complete' && result.info === 'OK' && result.regeocode && result.regeocode.formattedAddress) {
				infoWindow = new AMap.InfoWindow({
					//创建信息窗体
					isCustom: true,
					content: '<div class="' + infoWindowClass + '">' + result.regeocode.formattedAddress + '</div>',
					offset: new AMap.Pixel(16, -45),
					closeWhenClickMap: true
				})
			} else {
				infoWindow = null
				console.warn('地图获取位置信息失败', result)
			}
		})
	}

	onMounted(() => {
		initSearchText()
		checkHeight()
	})

	onUnmounted(() => {
		if (!Map) {
			return
		}
		Map.destroy()
		//@ts-ignore
		AMapLoader?.reset()
		Map = null
		GeoCoder = null
		AutoComplete = null
		infoWindow = null
	})
</script>

<template>
	<div :style="containerStyle" :class="props.inputInMap ? 'containerIKJ' : 'containerMapAddress'">
		<div class="searchInputWrap">
			<Input
				ref="mapInputRef"
				v-model="searchText"
				:class="props.inputInMap && props.showMap ? { mapInputIKJ: true } : 'searchInput'"
				:placeholder="props.placeholder || t('r.search')"
				:disabled="props.disabled"
				search
				enter-button
				@on-enter="handleSearch"
				@on-search="handleSearch"
			/>

			<div v-show="addressList.length > 0" class="addressListWrap">
				<div class="addressList">
					<div
						v-for="(item, index) in addressList"
						:key="index"
						class="addressItem"
						@click="selectAddress(item)"
					>
						<span class="addressName">{{ item.name }}</span>
						<span v-if="typeof item.address === 'string'" class="addressDetail">{{ item.address }}</span>
					</div>
				</div>
			</div>
		</div>

		<div v-show="props.showMap" :style="mapStyle" ref="mapRef" :id="mapId"></div>
	</div>
</template>