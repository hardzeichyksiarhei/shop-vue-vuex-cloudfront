<template>
	<div id="app">
		<v-app-router />

		<v-snackbar-container />
		<v-app-version bottomRightCorner :value="appVersion" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { VAppVersion } from '@/libs/version';
import { VSnackbarContainer } from '@/components/Snackbar';

import VAppRouter from './AppRouter.vue';

import { USERNAME, PASSWORD } from '@/config';

const APP_VERSION = process.env.VUE_APP_VERSION;

export default Vue.extend({
	components: { VAppVersion, VAppRouter, VSnackbarContainer },
	data: () => ({
		appVersion: APP_VERSION,
	}),
	created() {
		const authorizationToken = btoa(
			unescape(encodeURIComponent(`${USERNAME}:${PASSWORD}`))
		);
		localStorage.setItem('authorization_token', authorizationToken);
	},
});
</script>

<style>
body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
}
</style>
