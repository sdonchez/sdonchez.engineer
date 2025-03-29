<template>
	<navigation
		:is-dark-mode="isDarkMode"
		@toggle-dark-mode="toggleDarkMode"
	></navigation>
	<router-view class="flex-fill grow" />
	<SiteFooter></SiteFooter>
</template>

<!--suppress JSUnresolvedFunction -->
<script>
import { useHead } from '@unhead/vue';
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";

// noinspection JSUnusedGlobalSymbols
export default {
	name: "App",
	components: {
		Navigation,
		SiteFooter,
	},
	data() {
		return {
			isDarkMode: false,
		};
	},
	mounted() {
		useHead({
			titleTemplate: '%s | Stephen Donchez',
			htmlAttrs: {
				lang: "en-us"
			},
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
		});
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
		this.isDarkMode = prefersDarkScheme.matches;
		if (this.isDarkMode) {
			document.documentElement.classList.add('app-theme-dark')
		}
	},
	methods: {
		toggleDarkMode() {
			this.isDarkMode = !this.isDarkMode;
			if (this.isDarkMode) {
				document.documentElement.classList.add('app-theme-dark');
			} else {
				document.documentElement.classList.remove('app-theme-dark');
			}
		},
	},
};
</script>

<style lang="scss">
//noinspection CssUnknownTarget
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
//noinspection CssUnknownTarget
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");
@import "primeicons/primeicons.css";
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-family: "Roboto", "Roboto Slab", serif;
	font-display: swap;
}
a:hover {
	color: white;
}
p {
	text-align: justify;
}
</style>
