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
					class="flex text-center p-4 lg:w-1/3 items-center w-full"
					:class="getIconOrder()"
				>
					<p class="text-center" v-html="card.credential"></p>
				</div>
				<div v-if="card.credential" class="lg:w-2/3 p-4">
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
							variant="primary"
							:as="'a'"
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
export default {
	props: ["card"],
	setup(props) {
		// You can access `props.card.iconRight` inside setup()
		const getIconOrder = () => {
			const iconOrderClass = props.card.credentialRight
				? "lg:order-last"
				: "lg:order-first";
			return iconOrderClass;
		};

		return { getIconOrder };
	},
};
</script>
