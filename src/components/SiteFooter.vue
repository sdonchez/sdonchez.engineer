<!--suppress SpellCheckingInspection -->
<template>
	<footer>
		<div class="flex flex-wrap bg-zinc-700 px-5 py-3 text-center">
			<div
				class="md:text-lg text-center lg:text-left lg:max-w-fit basis-full"
			>
				Copyright &copy; 2020&mdash;{{ currentYear }}
				<div class="hidden md:inline px-1">Stephen Donchez</div>
				<Icon
					v-for="site in social"
					:key="site.link"
					:platform="site"
				/>
				<span class="px-2"
					><a :href="$resumeFile" target="_blank" class="text-white"
						>Resume</a
					></span
				>
			</div>
			<div
				class="md:text-lg text-center lg:text-right lg:max-w-fit basis-full lg:ml-auto"
			>
				Built With:
				<Icon v-for="site in tools" :key="site.link" :platform="site" />
			</div>
		</div>
	</footer>
</template>

<script>
import Icon from "@/components/Icon";

export default {
	name: "SiteFooter",
	components: {
		Icon,
	},
	data: () => {
		return {
			currentYear: new Date().getFullYear(),
			social: [
				{
					link: "mailto:steve@sdonchez.engineer",
					tooltip: "Email",
					iconType: "classful",
					icon: "pi pi-envelope",
				},
				{
					link: "https://github.com/sdonchez",
					tooltip: "GitHub",
					iconType: "classful",
					icon: "pi pi-github",
				},
				{
					link: "https://www.linkedin.com/in/stephen-donchez/",
					tooltip: "LinkedIn",
					iconType: "classful",
					icon: "pi pi-linkedin",
				},
			],
			tools: [
				{
					link: "https://vuejs.org",
					tooltip: "VueJS",
					iconType: "classful",
					icon: "fa-brands fa-vuejs",
				},
				{
					link: "https://github.com/sdonchez/sdonchez.github.io",
					tooltip: "GitHub",
					iconType: "classful",
					icon: "pi pi-github",
				},
				{
					link: "https://primevue.org/",
					tooltip: "PrimeVue",
					iconType: "classful",
					icon: "pi pi-prime",
				},
				{
					link: "foobar.com",
					tooltip: "Tailwind CSS",
					iconType: "svg",
					icon: "M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z",
				},
				{
					link: "https://fontawesome.com/",
					tooltip: "FontAwesome",
					iconType: "classful",
					icon: "fa-regular fa-font-awesome",
				},
				{
					link: "https://cloudflare.com/",
					tooltip: "Cloudflare",
					iconType: "classful",
					icon: "fa-brands fa-cloudflare",
				},
				{
					link: "https://npmjs.com",
					tooltip: "npm",
					iconType: "classful",
					icon: "fa-brands fa-npm",
				},
				{
					link: "https://stackoverflow.com/",
					tooltip:
						"Stack Overflow (because what project is complete without it)",
					iconType: "classful",
					icon: "fa-brands fa-stack-overflow",
				},
			],
		};
	},
};
</script>
<style>
footer {
	color: white;
}
</style>
