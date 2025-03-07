<template>
	<div>
		<!-- Breakpoint on Menubar is set based on the length of the menu items to prevent it from wrapping to a second line-->
		<Menubar
			:model="items"
			class="flex flex-row flex-nowrap !py-4"
			breakpoint="1020px"
		>
			<template #start
				><a
					class="flex flex-row items-center name-title"
					href="/"
					target="_self"
					><Avatar
						image="favicon-32x32.png"
						class="mx-4"
						size="32px"
					></Avatar
					>Stephen G. Donchez</a
				></template
			>

			<!--According to the PrimeVue docs, none of these item or props references should have to be optional, 
			but everything crashes and burns if they aren't. Several hours of debugging, stack tracing, 
			and arguing with chatgpt got me nowhere, but this seems to work for some reason.
			
			There's no logical reason for it either - I've dumped the entire Items array, and there are no elements 
			that don't contain both route and label. Based on that, the v-else should never execute either, 
			but it crashes if those aren't optional too, so clearly something screwy is going on.-->

			<template #item="{ item, props, hasSubmenu }">
				<router-link
					v-if="item?.route"
					v-slot="{ href, navigate }"
					:to="item?.route"
					:class="{
						'menuItem-active-link': (isActive(item.route)&&!isAnyHovered()),
						'menuItem-noFocus' : (!isActive(item.route) && !isHovered(item.route))
					}"
					custom
					@mouseover="handleMouseOver(item.route)"
					@mouseleave="handleMouseLeave"
				>
					<a
						v-ripple
						v-bind="props.action"
						:href="href"
						@click="navigate"
					>
						<span>{{ item.label }}</span>
					</a>
				</router-link>
				<a
					v-else
					v-ripple
					v-bind="props?.action"
					:href="item?.url"
					:target="item?.target"
				>
					<span>{{ item?.label }}</span>
					<span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
				</a>
			</template>
		</Menubar>
	</div>
</template>

<script setup>
import Menubar from "primevue/menubar";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
const route = useRoute();
const currentRoute = ref(route);
const hoveredItem = ref(null); // To store the hovered item

const isActive = (path) => {
	return route.path === path;
};

// Track mouse hover over menu items
const handleMouseOver = (route) => {
	hoveredItem.value = route; // Set hovered item
};

const handleMouseLeave = () => {
	hoveredItem.value = null; // Reset hovered item when mouse leaves
};

// Check if an item is hovered
const isHovered = (path) => {
	return hoveredItem.value === path;
};

const isAnyHovered =() => {
	return Boolean(hoveredItem.value)
}

const items = ref([
	{
		label: "Home",
		route: "/",
	},
	{
		label: "Work Experience",
		route: "/work",
	},
	{
		label: "Education",
		route: "/education",
	},
	{
		label: "Projects",
		route: "/projects",
	},
	{
		label: "Publications",
		route: "/publications",
	},
	{
		label: "Skills",
		route: "/skills",
	},
	{
		label: "Certifications",
		route: "/certifications",
	},
]);
</script>

<style>
.name-title {
	color: #fff;
	padding-top: 0.32rem;
	padding-bottom: 0.32rem;
	margin-right: 1rem;
	font-size: 1.2rem;
	line-height: inherit;
	white-space: nowrap;
}
.p-menubar-button {
	margin-left: auto;
	margin-right: 1rem;
}
.menuItem-active-link {
	color: var(--p-menubar-item-focus-color) !important;
	background: var(--p-menubar-item-focus-background) !important;
	border-radius: var(--p-menubar-base-item-border-radius) !important;
	transition-property: background;
	transition-duration: 500ms;
}

.menuItem-noFocus {
	color: var(--p-menubar-item-color) !important;
	background: var(--p-menubar-background) !important;
	transition-property: background;
	transition-duration: (--p-menubar-transition-duration);
}
</style>
