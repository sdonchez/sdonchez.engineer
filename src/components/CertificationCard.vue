<template>
	<Card class="my-4 w-full relative break-words min-w-0 h-fit" :id=card.slug>
		<template #title>{{ card.title }}</template>
			<template #subtitle>
				<h5 v-for="subtitle in card.subtitles" :key="subtitle" class="text-center">{{ subtitle }}</h5>
			</template>
			<template #content>
			<div class="flex flex-wrap">
				<div class="flex text-center p-4 w-1/3 items-center" :class="getIconOrder()">
					<p class="text-center" v-html= card.credential> </p>
				</div>
				<div class="w-2/3 p-4" v-if="card.credential">
					<p v-for="para in card.text" :key="para" v-html="para" class="pb-4"></p>
					<p v-if="card.actions" class="flex flex-wrap justify-center gap-2">
						<Button v-for="action in card.actions" :as="'a'" :key="action.link" variant="primary" :href="action.link" target="_blank" class="!text-white inline-flex w-auto mt-2">{{action.text}}</Button>
					</p>
				</div>
				<div class="w-full" v-else>
					<div v-for="para in card.text" :key="para">
						<p v-html="para"></p>
					</div>
					<p v-for="action in card.actions" :key="action.link" class="text-center">
						<Button variant="primary" :as="'a'" :href="action.link" target="_blank" class="mt-1">{{action.text}}</Button>
					</p>
				</div>
			</div>
		</template>
	</card>
</template>

<script>
export default {
  props: ["card"],
  setup(props) {    
    // You can access `props.card.iconRight` inside setup()
    const getIconOrder = () => {
      const iconOrderClass = props.card.credentialRight ? "lg:order-last" : "lg:order-first";
      return iconOrderClass;
    };
    
    return { getIconOrder };		
  }
}
</script>
