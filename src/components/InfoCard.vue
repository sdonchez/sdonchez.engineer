<!-- <template>
	<Card class="my-4 w-100 h-100" :id=card.slug>
		<template #title>
				{{ card.title }}
		</template>
		<template #subtitle>
				{{ card.subtitle1 }}
				{{ card.subtitle2 }}
				{{ card.subtitle3 }}
      	</template>
		<template #content>
			<b-row align-v="center">
				<b-col lg="4" class="text-center py-4" :order-lg="card.iconRight">
					<picture>
						<source type="image/webp" :srcset="require(`@/assets/${card.icon.split('.').slice(0, -1).join('.')}-256.webp`)">
						<source type="image/jpeg" :srcset="require(`@/assets/${card.icon.split('.').slice(0, -1).join('.')}-256.${card.icon.split('.').slice(-1)}`)">
						<img :src="require(`@/assets/${card.icon.split('.').slice(0, -1).join('.')}-256.${card.icon.split('.').slice(-1)}`)"
						:class="{ 'rounded-circle': !card.avatarSquare, 'img-fluid': true }" width="320px" height="320px" :alt="card.alt">
					</picture>
				</b-col>
				<b-col lg="8" v-if="card.icon">
					<div v-for="para in card.text" :key="para">
						<p v-html="para"></p>
					</div>
          <p v-if="card.actions" class = "text-center">
            <b-button v-for="action in card.actions" :key="action.link" variant="primary" :href="action.link" target="_blank" class="mx-2 mt-2">{{
                action.text
              }}</b-button>
          </p>
				</b-col>
        <b-col lg="12" v-else>
          <div v-for="para in card.text" :key="para">
            <p v-html="para"></p>
          </div>
          <p v-for="action in card.actions" :key="action.link" class = "text-center">
            <b-button variant="primary" :href="action.link" target="_blank" class="mt-1">{{
                action.text
              }}</b-button>
          </p>
        </b-col>
			</b-row>
		</template>
	</Card>
</template>

<script>
import { Card } from 'primevue';

export default {
	props: ["card"],
}
</script> -->
