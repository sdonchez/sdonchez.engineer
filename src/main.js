import { createApp } from "vue";
import "@babel/polyfill";
import "mutationobserver-shim";
import "./style.css";
import PrimeVue from "primevue/config";
import SGDPreset from "./plugins/primeVue";
import App from "./App.vue";
import { createRouter } from "./router";
import VueGtag from "vue-gtag";
import Tooltip from "primevue/tooltip";
import { createHead } from '@unhead/vue/client'

const router = createRouter();

const app = createApp(App);

// Use createHead to enable page titles and SEO instead of vue-meta, which is not vue-3 compatible and has been abandoned
const head = createHead();

app.use(head);

app.use(router);

app.directive("tooltip", Tooltip);

app.use(PrimeVue, {
	theme: {
		preset: SGDPreset,
		options: {
			darkModeSelector: ".app-theme-dark",
		},
	},
});

app.use(VueGtag, {
	config: {
		id: "G-TT76YTVCYJ",
	},
});

app.config.globalProperties.$resumeFile = "SDonchezResumeDec24.pdf";

app.mount("#app");
