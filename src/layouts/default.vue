<template>
	<VApp>
		<VAppBar elevation="0" class="border-b-thin">
			<VAppBarTitle class="ma-0 text-center">MLC</VAppBarTitle>
		</VAppBar>
		<VMain>
			<slot />
		</VMain>
	</VApp>
</template>

<script lang="ts" setup>
useHead({ title: "MLC | Welcome" });
</script>
