<template>
	<div class="nav">
		<a :href="csr">CSR</a>
		<a :href="ssr">SSR</a>
		<a :href="ssg">SSG</a>
	</div>
	<div class="nav">
		<router-link to="/">Root</router-link>
		<router-link to="/test">Test</router-link>
	</div>
	<router-view v-slot="{Component}">
		<component :is="Component" />
	</router-view>
</template>

<style>
html {
	font-size: 10px;
}

body {
	text-align: center;
	font-size: 0;
	line-height: 1;
}

#app {
	text-align: center;
	margin-top: 65px;
}

h1 {
	color: green;
	font-size: 30px;
}

.nav {
	position: relative;
	font-size: 16px;
	z-index: 1;
}

.nav a:not(:last-child) {
	margin-right: 10px;
}
</style>

<script lang="ts" setup>
import {ref, onMounted} from 'vue';

const csr = ref('');
const ssr = ref('');
const ssg = ref('');

onMounted(() => {
	if (import.meta.env.SSR) {
		return;
	}

	const {protocol, port, hostname} = location;
	const isLocalhost = import.meta.env.DEV;
	const host = isLocalhost ? 'localhost' : hostname.split('.').slice(-2).join('.');
	const domain = isLocalhost ? `${host}:${port}` : host;

	csr.value = `${protocol}//${domain}`;
	ssr.value = `${protocol}//auth.${domain}`;
	ssg.value = `${protocol}//welcome.${domain}`;
});
</script>
