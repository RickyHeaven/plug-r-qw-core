<script setup lang="ts">
	import { useStore } from '@/stores/main'
	import { useI18n } from 'vue-i18n'

	const { t } = useI18n()

	const store = useStore()
	const router = useRouter()

	function login() {
		store.isLogin = true
		router.push('./')
	}
</script>

<template>
	<div class="wall">
		<div class="modal">
			<p>{{ t('e.login') }}</p>
			<div class="info">{{ t('e.loginInfo') }}</div>
			<span>{{ t('e.name') }}</span>
			<div class="formItem"></div>
			<span>{{ t('e.password') }}</span>
			<div class="formItem"></div>
			<Button @click="login" type="primary" class="loginBt">{{ t('e.login') }}</Button>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import '@/global/variables';

	.wall {
		background-color: @wall-gray;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;

		.modal {
			width: 500px;
			height: 400px;
			background-color: #fff;
			padding-top: 40px;
			border-radius: 5px;

			> p {
				font-size: 24px;
				text-align: center;
				margin-bottom: 6px;
				color: #3d3d46;
			}

			.info {
				text-align: center;
				color: #bbb;
				margin-bottom: 30px;
			}

			> span {
				font-size: 16px;
				margin-left: 100px;
				color: #939699;
			}

			.formItem {
				height: 40px;
				width: 60%;
				margin: 5px auto 20px auto;
				background-color: #f5f8fb;
				border-radius: 3px;
			}

			.loginBt {
				width: 150px;
				display: block;
				margin: 40px auto 0 auto;
			}
		}
	}
</style>
