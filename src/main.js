import { createApp, configureCompat} from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './style.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes'
import VueMeta from 'vue-meta'
import App from './App.vue'
import { createRouter } from './router'
import VueGtag from "vue-gtag";

//FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'
import { faCloudflare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faEnvelope)
library.add(faGithub)
library.add(faLinkedin)
library.add(faVuejs)
library.add(faBootstrap)
library.add(faFontAwesome)
library.add(faStackOverflow)
library.add(faNpm)
library.add(faCloudflare)

//PrimeVue Components

//Run Vue3 in Vue2 Compatibility Mode for now
configureCompat({
	MODE: 2,
	INSTANCE_CHILDREN: true
})

const router = createRouter()

const app = createApp(App)

const MyPreset = definePreset(Aura, {
	//define new color palette centered around the primary color from the old site
	primitive: {
		bahama: { 
			50: '#879cb2', 
			100: '#738ca5', 
			200: '#5f7b99', 
			300: '#4b6b8c', 
			400: '#375a7f', //primary from darkly
			500: '#325172', 
			600: '#2c4866', 
			700: '#273f59', 
			800: '#21364c', 
			900: '#1c2d40', 
			950: '#162433'}
	},
	//make this the primary palette
	semantic: {
        primary: {
            50: '{bahama.50}',
            100: '{bahama.100}',
            200: '{bahama.200}',
            300: '{bahama.300}',
            400: '{bahama.400}', //used by bg-primary
            500: '{bahama.500}',
            600: '{bahama.600}',
            700: '{bahama.700}',
            800: '{bahama.800}',
            900: '{bahama.900}',
            950: '{bahama.950}'
        }
    },
	components: {
		menubar: {
			root: {
				background: '{primary.400}',
			},
			item: {
				focusBackground: '{primary.600}'
			}

		},
		mobileButton:{
			hoverBackground: '{primary.600}',
			color: '{white}'
		}
		}
});

app.use(router)
app.use(PrimeVue, {
	theme: {
		preset: MyPreset,
		options: {
			// cssLayer: {
			// 	name: "primevue",
			// 	order: "base, primevue, utilities",
			// },
			darkModeSelector: "system",
		},
	}
});

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGtag, {
	config: {
		id: "G-TT76YTVCYJ"
	}
});

app.use(VueMeta, { refreshOnceOnNavigation: true })

app.config.globalProperties.$resumeFile = "SDonchezResumeDec24.pdf"


app.mount('#app')
