<template>
	<div class="icon">
		<a v-tooltip.top="{ value: platform.tooltip }" :href="platform.link">
			<i
				v-if="[platform.iconType] == 'classful'"
				:class="[platform.icon]"
			></i>
			<svg
				v-else-if="[platform.iconType] == 'svg'"
				xmlns="http://www.w3.org/2000/svg"
				width="22px"
				height="22px"
				viewBox="0 -11 22 22"
				class="inline-block mx-auto fill-white"
				style="line-height: 1; margin-bottom: 6px"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					:d="[platform.icon]"
					class="transform -translate-y-1/2"
				/>
			</svg>
		</a>
	</div>
</template>

<script>
export default {
	props: ["platform"],
};
</script>

<style>
.icon {
	display: inline;
	padding-left: 0.5rem;
}
</style>
