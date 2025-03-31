import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";

const SGDPreset = definePreset(Aura, {
	//define new color palette centered around the primary color from the old site
	primitive: {
		bahama: {
			50: "#879cb2",
			100: "#738ca5",
			200: "#5f7b99",
			300: "#4b6b8c",
			400: "#375a7f", //primary from darkly
			500: "#325172",
			600: "#2c4866",
			700: "#273f59",
			800: "#21364c",
			900: "#1c2d40",
			950: "#162433",
		},
	},
	//make this the primary palette
	semantic: {
		primary: {
			50: "{bahama.50}",
			100: "{bahama.100}",
			200: "{bahama.200}",
			300: "{bahama.300}",
			400: "{bahama.400}", //used by bg-primary
			500: "{bahama.500}",
			600: "{bahama.600}",
			700: "{bahama.700}",
			800: "{bahama.800}",
			900: "{bahama.900}",
			950: "{bahama.950}",
		},
	},
	components: {
		menubar: {
			root: {
				background: "{primary.400}",
				borderColor: "{primary.400}",
				borderRadius: "0",
			},
			item: {
				focusBackground: "{primary.600}",
				color: "white",
				activeColor: "white",
				focusColor: "white",
			},
			mobileButton: {
				hoverBackground: "{primary.600}",
				color: "white",
				focusColor: "white",
				activeColor: "white",
				hoverColor: "white",
			},
			submenu: {
				background: "{primary.400}",
				borderColor: "{primary.400}",
				borderRadius: "0",
			},
		},
		card: {
			colorScheme: {
				dark: {
					root: {
						background: "{surface.800}",
					},
				},
			},
			title: {
				font: {
					size: "2rem",
				},
				color: "white",
			},
			subtitle: {
				color: "white",
			},
			caption: {},
		},
	},
});

export default SGDPreset;
