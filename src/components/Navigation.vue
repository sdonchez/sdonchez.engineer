<template>
	<div>
		<Menubar :model="items" class="flex flex-row flex-nowrap !py-4">
			<template #start><a class="flex flex-row items-center name-title" href="/" target="_self"><Avatar image="favicon-32x32.png" class="mx-4" size="32px"></Avatar>Stephen G. Donchez</a></template>
		</Menubar>
	</div>
</template>


<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: 'Home',
	to: '/'
  },
  {
    label: 'Work Experience',
	to: '/work'
  },
  {
    label: 'Projects',
	to: '/projects'
  },
  {
	label: 'Publications',
	to: '/publications'
  },
  {
	label: 'Skills',
	to: '/skills'
  },
  {
	label: 'Certifications',
	to: '/certifications'
  }
]);
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