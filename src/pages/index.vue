<template>
	<div class="text-center">
		<div class="text-h5">Welcome to the "welcome" page</div>
		<VBtn
			variant="outlined"
			class="mt-4"
			:loading="loading"
			@click="checkCookie"
			>Check cookie</VBtn
		>
		<div v-if="error" class="mt-2 text-body-2 text-error">{{ error }}</div>
		<div v-if="result" class="mt-2 text-body-2 text-info">{{ result }}</div>
	</div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const loading = ref(false);
const error = ref("");
const result = ref("");

const checkCookie = async () => {
	error.value = "";
	result.value = "";
	loading.value = true;

	try {
		console.log("Cookies", document.cookie);

		const { apiBase } = config.public;
		const response = await $fetch(`${apiBase}/api/check-cookie`);

		console.log("response", response);
		result.value = String(response);
	} catch (e) {
		console.error(e);
		error.value = e instanceof Error ? e.toString() : String(e);
	}

	loading.value = false;
};
</script>
