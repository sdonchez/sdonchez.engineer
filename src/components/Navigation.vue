<template>
	<div>
		<Menubar :model="items" class="flex flex-row flex-nowrap !py-4">
			<template #start><a class="flex flex-row items-center name-title" href="/" target="_self"><Avatar image="favicon-32x32.png" class="mx-4" size="32px"></Avatar>Stephen G. Donchez</a></template>
			<template #item="{ item, props, hasSubmenu }">
			<!--According to the PrimeVue docs, none of these item or props references should have to be optional, 
			but everything crashes and burns if they aren't. Several hours of debugging, stack tracing, 
			and arguing with chatgpt got me nowhere, but this seems to work for some reason.
			
			There's no logical reason for it either - I've dumped the entire Items array, and there are no elements 
			that don't contain both route and label. Based on that, the v-else should never execute either, 
			but it crashes if those aren't optional too, so clearly something screwy is going on.-->
			
			<router-link v-if="item?.route" v-slot="{ href, navigate }" :to="item?.route" custom>
				<a v-ripple :href="href" v-bind="props.action" @click="navigate">
					<span>{{ item.label }}</span>
				</a>
			</router-link>
			<a v-else v-ripple :href="item?.url" :target="item?.target" v-bind="props?.action">
				<span>{{ item?.label }}</span>
				<span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
			</a>
		</template>
		</Menubar>
	</div>
</template>


<script setup>
import Menubar from 'primevue/menubar';
const items = [
  {
    label: 'Home',
	route:'/home'
  },
  {
    label: 'Work Experience',
	route: '/work'
  },
  {
    label: 'Projects',
	route: 'projects'
  },
  {
	label: 'Publications',
	route: 'publications'
  },
  {
	label: 'Skills',
	route: '/skills'
  },
  {
	label: 'Certifications',
	route: 'certifications'
  }
];
</script>

<style>
.name-title {
	color: #fff;
	padding-top: .32rem;
	padding-bottom: .32rem;
	margin-right: 1rem;
	font-size: 1.2rem;
	line-height: inherit;
	white-space: nowrap
}
.p-menubar-button{
	margin-left: auto;
	margin-right: 1rem;
}
</style>