<template>
	<Card class="my-4 w-full relative break-words min-w-0 h-fit" :id=card.slug>
		<template #title>{{ card.title }}</template>
		<template #subtitle>
				<h5 v-for="subtitle in card.subtitles" :key="subtitle" class="text-center">{{ subtitle }}</h5>
      	</template>
		  <template #content>
			<div class="flex flex-wrap">
				<div class="flex text-center p-4 w-1/3 items-center" :class="getIconOrder()">
					<picture>
						<source type="image/webp" :srcset="`${imageUrl}/${card.icon.split('.').slice(0, -1).join('.')}-256.webp`">
						<source type="image/jpeg" :srcset="`${imageUrl}/${card.icon.split('.').slice(0, -1).join('.')}-256.${card.icon.split('.').slice(-1)}`">
						<img :src="`${imageUrl}/${card.icon.split('.').slice(0, -1).join('.')}-256.${card.icon.split('.').slice(-1)}`"
						:class="{ 'rounded-full': !card.avatarSquare, 'img-fluid': true }" width="320px" height="320px" :alt="card.alt">
					</picture>
				</div>
				<div class="w-2/3 p-4" v-if="card.icon">
					<p v-for="para in card.text" :key="para" v-html="para" class="pb-4"></p>
					<p v-if="card.actions" class="flex flex-wrap justify-center gap-2">
						<Button v-for="action in card.actions" :key="action.link" variant="primary" :href="action.link" target="_blank" class="!text-white inline-flex w-auto mt-2">{{action.text}}</Button>
					</p>
				</div>
				<div class="w-full" v-else>
					<div v-for="para in card.text" :key="para">
						<p v-html="para"></p>
					</div>
					<p v-for="action in card.actions" :key="action.link" class="text-center">
						<Button variant="primary" :href="action.link" target="_blank" class="mt-1">{{action.text}}</Button>
					</p>
				</div>
			</div>
		</template>
	</Card>
</template>

<script>
import { Card } from 'primevue';
import Button from 'primevue/button';

export default {
  props: ["card"],
  setup(props) {
    const imageUrl = new URL("../assets/", import.meta.url).href;
    
    // You can access `props.card.iconRight` inside setup()
    const getIconOrder = () => {
      const iconOrderClass = props.card.iconRight ? "lg:order-last" : "lg:order-first";
      return iconOrderClass;
    };
    
    return { imageUrl, getIconOrder };		
  }
}
</script>
