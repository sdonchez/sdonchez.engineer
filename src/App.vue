<template>
	<navigation></navigation>
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
		// this.showModal()
	},
	methods: {
		// showModal() {
		// 	// noinspection JSUnresolvedFunction
		//   this.$refs["WIP-modal"].show()
		// },
		// hideModal() {
		// 	this.$refs["WIP-modal"].hide()
		// },
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
