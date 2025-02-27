<!--suppress SpellCheckingInspection -->
<template>
	<footer>
		<div class="flex flex-wrap bg-zinc-700 px-5 py-3 text-center">
			<div class="md:text-lg text-center lg:text-left lg:max-w-fit basis-full">
				Copyright &copy; 2020&mdash;{{ currentYear }}
				<div class="hidden md:inline px-1">Stephen Donchez</div>
				<Icon v-for="site in social" :key="site.link" :platform="site" />
        		<span class="px-2"><a :href="this.$resumeFile" target="_blank" class="text-white">Resume</a></span>
			</div>
			<div class="md:text-lg text-center lg:text-right lg:max-w-fit basis-full lg:ml-auto">
				Built With:
				<Icon v-for="site in tools" :key="site.link" :platform="site" />
			</div>
		</div>
	</footer>
</template>

<script>
import Icon from "@/components/Icon"
export default {
	name: "siteFooter",
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
					iconType: "fas",
					icon: "envelope",
				},
				{
					link: "https://github.com/sdonchez",
					tooltip: "GitHub",
					iconType: "fab",
					icon: "github",
				},
				{
					link: "https://www.linkedin.com/in/stephen-donchez/",
					tooltip: "LinkedIn",
					iconType: "fab",
					icon: "linkedin",
				}
			],
			tools: [
				{
					link: "https://vuejs.org",
					tooltip: "VueJS",
					iconType: "fab",
					icon: "vuejs" },
				{
					link: "https://github.com/sdonchez/sdonchez.github.io",
					tooltip: "GitHub",
					iconType: "fab",
					icon: "github",
				},
				{
					link: "https://getbootstrap.com/",
					tooltip: "Bootstrap",
					iconType: "fab",
					icon: "bootstrap",
				},
				{
					link: "https://fontawesome.com/",
					tooltip: "FontAwesome",
					iconType: "fab",
					icon: "font-awesome",
				},
				{
					link: "https://cloudflare.com/",
					tooltip: "Cloudflare",
					iconType: "fab",
					icon: "cloudflare"
				},
				{ 
					link: "https://npmjs.com", 
					tooltip: "npm", 
					iconType: "fab", 
					icon: "npm" 
				},
				{
					link: "https://stackoverflow.com/",
					tooltip: "Stack Overflow (because what project is complete without it)",
					iconType: "fab",
					icon: "stack-overflow",
				},
			],
		}
	},
}
</script>
