import { createApp, configureCompat} from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './style.css'
import PrimeVue from 'primevue/config'
import SGDPreset from './plugins/primeVue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import { createRouter } from './router'
import VueGtag from "vue-gtag";
import Tooltip from 'primevue/tooltip';

//Run Vue3 in Vue2 Compatibility Mode for now
configureCompat({
	MODE: 2,
	INSTANCE_CHILDREN: true
})

const router = createRouter()

const app = createApp(App)

app.use(router)

app.directive('tooltip', Tooltip);

app.use(PrimeVue, {
	theme: {
		preset: SGDPreset,
		options: {
			darkModeSelector: "system",
		},
	}
});

//app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGtag, {
	config: {
		id: "G-TT76YTVCYJ"
	}
});

app.use(VueMeta, { refreshOnceOnNavigation: true })

app.config.globalProperties.$resumeFile = "SDonchezResumeDec24.pdf"


app.mount('#app')
