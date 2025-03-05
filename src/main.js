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

const router = createRouter();

const app = createApp(App);

app.use(router);

app.directive("tooltip", Tooltip);

app.use(PrimeVue, {
	theme: {
		preset: SGDPreset,
		options: {
			darkModeSelector: "system",
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
