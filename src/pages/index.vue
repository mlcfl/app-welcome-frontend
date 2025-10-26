<style lang="scss" module>
.page {
	margin-inline: auto;
	max-width: 1200px;
}

.cardsList {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
}

.listItem {
	:global(.v-list-item__spacer) {
		display: none;
	}
}
</style>

<template>
	<div :class="['pa-4 pa-sm-16', $style.page]">
		<h1 class="font-weight-regular text-h6 text-sm-h4">
			Welcome to MLC!<br />A unified entry point to your applications — online
			and offline.
		</h1>
		<VCard variant="tonal" class="mt-8">
			<VCardText>
				A platform that brings together independent modules to help you manage
				daily tasks.<br />Use it through the official website, or run it locally
				on your computer or on a private server in your network — with data
				synchronization even in offline mode.
			</VCardText>
		</VCard>
		<div class="mt-4 text-center">
			<VBtn elevation="0" color="grey-darken-4" :href="apphubUrl"
				>Open AppHub</VBtn
			>
		</div>

		<h2 class="mt-6 font-weight-regular">What the MLC is</h2>
		<VCard variant="tonal" class="mt-4">
			<VCardText>
				This project is a collection of independent applications accessible
				through a single interface.<br />You can use them online or deploy
				everything locally — without relying on external services or a permanent
				internet connection. All data is synchronized between your devices,
				while staying under your full control.
			</VCardText>
		</VCard>

		<h2 class="mt-6 font-weight-regular">Application catalog</h2>
		<VCard variant="plain" class="mt-2">
			<VCardText class="pa-0"
				>All applications can be used both online and offline.</VCardText
			>
		</VCard>
		<div :class="['mt-4 ga-4', $style.cardsList]">
			<VCard
				v-for="{ title, description } in apps"
				:key="title"
				:title
				variant="outlined"
				class="border-thin"
			>
				<VCardText class="text-grey-darken-2">{{ description }}</VCardText>
			</VCard>
		</div>

		<h2 class="mt-6 font-weight-regular">Key advantages</h2>
		<VList lines="three">
			<VListItem
				v-for="{ title, subtitle } in features"
				:key="title"
				:title
				:subtitle
				:class="$style.listItem"
			>
				<template #prepend>
					<VIcon icon="mdi-check" class="mr-4 d-none d-sm-block" />
				</template>
			</VListItem>
		</VList>

		<h2 class="mt-6 font-weight-regular">License</h2>
		<VCard variant="tonal" class="mt-4">
			<VCardText>
				<p>
					This project and all official applications are distributed under the
					next license:
					<strong class="d-block"
						>Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
						International (CC BY-NC-ND 4.0).</strong
					>
				</p>
				<p>
					This means that you may use the platform and the applications for
					personal use, including running them on your own computer or on a
					private server inside your network. You are also allowed to add and
					integrate your own applications for your own purposes.
				</p>
				<p>
					However, commercial use of the project in any form is not permitted.
					You are not allowed to sell the project, its components, or any
					modified versions of it. If you copy or adapt the project for
					yourself, these modified versions must not be distributed or used
					commercially.
				</p>
				<p>
					You may share the original, unmodified version, as long as you include
					proper credit to the original authors. Any commercial distribution or
					distribution of modified versions is strictly prohibited.
				</p>
				<VBtn
					href="https://creativecommons.org/licenses/by-nc-nd/4.0"
					target="_blank"
					variant="outlined"
					size="small"
					class="mt-2"
					>Full license text</VBtn
				>
			</VCardText>
		</VCard>
		<div :class="['mt-4 ga-4', $style.cardsList]">
			<VCard
				v-for="{ title, description, allowed } in licenseItems"
				:key="title"
				variant="outlined"
				class="border-thin"
			>
				<VCardTitle class="text-pre-wrap d-flex align-start">
					<VIcon
						:icon="allowed ? 'mdi-check' : 'mdi-close'"
						size="small"
						class="mt-1 mr-2"
					/>
					<span>{{ title }}</span>
				</VCardTitle>
				<VCardText class="text-grey-darken-2">{{ description }}</VCardText>
			</VCard>
		</div>

		<VBtn
			variant="text"
			class="mt-8"
			href="https://github.com/mlcfl"
			target="_blank"
			>github.com/mlcfl</VBtn
		>
	</div>
</template>

<script lang="ts" setup>
const apps: { title: string; description: string }[] = [
	{
		title: "Welcome",
		description:
			"Welcome is the introductory application and the entry point into the platform. It presents the core idea of the project, highlights its features, and guides the user through the available applications. Welcome serves as the main overview and a friendly introduction to the ecosystem.",
	},
	{
		title: "Auth",
		description:
			"Auth is the authentication and access management application. It handles user registration, login, password recovery, and secure storage and verification of credentials. Auth is designed to be lightweight, secure, and self-contained — you can use it online or run it entirely on your own server.",
	},
	{
		title: "AppHub",
		description:
			"AppHub is the central workspace and navigation center of the ecosystem. It provides a clean interface for accessing all applications from one place. You can launch apps, pin favorites, organize them into groups, and customize your workspace to fit your needs. AppHub is the visual dashboard and control center for the entire platform.",
	},
	{
		title: "Budget",
		description:
			"Budget is a personal finance and budgeting application. It allows you to record income and expenses, analyze spending patterns, track financial progress, and set savings goals. Budget helps you better understand where your money goes and make thoughtful financial decisions — simply and clearly.",
	},
];

const features: { title: string; subtitle: string }[] = [
	{
		title: "Online & Offline support",
		subtitle:
			"Use via the official site or run everything on your local machine or private network server.",
	},
	{
		title: "Data sync without clouds",
		subtitle:
			"Devices can sync data directly, even without a stable internet connection.",
	},
	{
		title: "Privacy & Full data ownership",
		subtitle: "Your data stays with you — not on third-party servers.",
	},
	{
		title: "Modular architecture",
		subtitle: "Each application is standalone and can evolve independently.",
	},
	{
		title: "Unified entry point",
		subtitle: "One place to launch and manage everything.",
	},
	{
		title: "Scalable & Extensible",
		subtitle: "New apps can be added without changing the core system.",
	},
];

const licenseItems = [
	{
		title: "Use for personal purposes",
		allowed: true,
		description:
			"You may run the project locally for yourself or within your organization.",
	},
	{
		title: "Install on your own server",
		allowed: true,
		description: "Local and private network usage is permitted.",
	},
	{
		title: "Add your own applications",
		allowed: true,
		description:
			"You may create and integrate custom modules for personal or internal use.",
	},
	{
		title: "Share the original project",
		allowed: true,
		description:
			"You can share the unmodified project if you provide proper attribution.",
	},
	{
		title: "Modify for personal use",
		allowed: true,
		description:
			"You may modify the project as long as you do not distribute the modified version.",
	},
	{
		title: "Distribute modified versions",
		allowed: false,
		description: "Modified versions cannot be shared or published.",
	},
	{
		title: "Commercial use or selling",
		allowed: false,
		description: "Commercial usage in any form is strictly prohibited.",
	},
];

const apphubUrl = computed(() => {
	const { protocol, hostname, port } = window.location;
	const index = hostname.endsWith("localhost") ? -1 : -2;
	const host = hostname.split(".").slice(index).join(".");

	return `${protocol}//apphub.${host}${port ? `:${port}` : ""}`;
});
</script>
