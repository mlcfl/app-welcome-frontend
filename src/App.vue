<template>
	<div class="nav">
		<router-link to="/">Root</router-link>
		<router-link to="/test">Test</router-link>
	</div>
	<router-view v-slot="{Component}">
		<Suspense>
			<component :is="Component" />
		</Suspense>
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

.nav a:first-child {
	margin-right: 10px;
}
</style>
