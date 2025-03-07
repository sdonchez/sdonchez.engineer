<template>
	<Card
		:id="card.slug"
		class="my-4 w-full relative break-words min-w-0 h-fit"
	>
		<template #title>{{ card.title }}</template>
		<template #subtitle>
			<h5
				v-for="subtitle in card.subtitles"
				:key="subtitle"
				class="text-center"
			>
				{{ subtitle }}
			</h5>
		</template>
		<template #content>
			<div class="flex flex-wrap">
				<div
					class="flex text-center p-4 lg:w-1/3 items-center"
					:class="getIconOrder()"
				>
					<Image :preview="card.iconPreview">
						<template #image>
							<picture>
								<source
									type="image/webp"
									:srcset="`/images/${card.icon.split('.').slice(0, -1).join('.')}-256.webp`"
								/>
								<source
									type="image/jpeg"
									:srcset="`/images/${card.icon.split('.').slice(0, -1).join('.')}-256.${card.icon.split('.').slice(-1)}`"
								/>
								<img
									:src="`/images/${card.icon.split('.').slice(0, -1).join('.')}-256.${card.icon.split('.').slice(-1)}`"
									:class="{
										'rounded-full': !card.avatarSquare,
										'img-fluid': true,
									}"
									width="320px"
									height="320px"
									:alt="card.alt"
								/>
							</picture>
						</template>
						<template #original>
							<picture>
								<source
									type="image/webp"
									:srcset="`/images/${card.icon.split('.').slice(0, -1).join('.')}-1920.webp`"
								/>
								<source
									type="image/jpeg"
									:srcset="`/images/${card.icon.split('.').slice(0, -1).join('.')}-1920.${card.icon.split('.').slice(-1)}`"
								/>
								<img
									:src="`/images/${card.icon.split('.').slice(0, -1).join('.')}-1920.${card.icon.split('.').slice(-1)}`"
									:class="{
										'rounded-full': !card.avatarSquare,
										'img-fluid': true,
									}"
									:alt="card.alt"
								/>
							</picture>
						</template>
					</Image>
				</div>
				<div v-if="card.icon" class="lg:w-2/3 p-4">
					<p
						v-for="para in card.text"
						:key="para"
						class="pb-4 !text-left !lg:text-justify"
						v-html="para"
					></p>
					<p
						v-if="card.actions"
						class="flex flex-wrap justify-center gap-2"
					>
						<Button
							v-for="action in card.actions"
							:key="action.link"
							:as="'a'"
							variant="primary"
							:href="action.link"
							target="_blank"
							class="!text-white inline-flex w-auto mt-2 !text-center"
							>{{ action.text }}</Button
						>
					</p>
				</div>
				<div v-else class="w-full">
					<div v-for="para in card.text" :key="para">
						<p v-html="para"></p>
					</div>
					<p
						v-for="action in card.actions"
						:key="action.link"
						class="text-center"
					>
						<Button
							:as="'a'"
							variant="primary"
							:href="action.link"
							target="_blank"
							class="mt-1"
							>{{ action.text }}</Button
						>
					</p>
				</div>
			</div>
		</template>
	</Card>
</template>

<script>
import { Card } from "primevue";
import Button from "primevue/button";

export default {
	props: ["card"],
	setup(props) {
		// You can access `props.card.iconRight` inside setup()
		const getIconOrder = () => {
			const iconOrderClass = props.card.iconRight
				? "lg:order-last"
				: "lg:order-first";
			return iconOrderClass;
		};

		return { getIconOrder };
	},
};
</script>

<style>
.p-image-toolbar {
	visibility: hidden;
}
</style>
