<template #container>
	<div class="grow basis-auto flex flex-col">
		<div
			id="welcome-panel"
			class="panel flex min-[1520px]:aspect-[16/7] mx-auto items-center justify-center min-h-full"
		>
			<div
				class="flex flex-col min-[1520px]:flex-row items-center justify-center py-4 !grow"
			>
				<div
					class="min-[1520px]:h-[320px] min-[1520px]:w-[320px] h-[256px] w-[256px] shrink-0 ml-10 mr-5"
				>
					<picture>
						<source
							type="image/webp"
							srcset="/images/HeadshotCrop-512.webp"
						/>
						<source
							type="image/jpeg"
							srcset="/images/HeadshotCrop-512.jpg"
						/>
						<img
							src="/images/HeadshotCrop-256.jpg"
							class="rounded-full min-[1520px]:h-[320px] min-[1520px]:w-[320px] h-[256px] w-[256px]"
							width="320px"
							height="320px"
							alt="Headshot Photo of Stephen Donchez"
						/>
					</picture>
				</div>
				<h1
					class="min-[1520px]:text-8xl text-6xl text-center mx-5 align-self"
				>
					Hi, I'm Stephen Donchez
				</h1>
			</div>
		</div>
		<div class="bg-primary px-5">
			<h2 class="mx-auto text-center">
				A Systems Engineer, but a whole lot more
			</h2>
			<div class="copy">
				<p>
					On paper, I'm a Systems Engineer with a Bachelors and a
					Masters in Computer Engineering and a minor in Computer
					Science. But that's just a small part of who I am. Sure, I'm
					passionate about embedded systems, and am excited to be
					putting my knowledge of software development, FPGAs, and the
					latest in embedded security to work. But I'm also a 5th
					degree black belt, have 6 years of experience as a live
					event technician working in Audio, Video, and Lighting for
					events of all sizes, and am an avid ball-thrower whenever my
					dog asks. I encourage you to take a moment to explore who I
					am (in digital form), and to reach out with any questions!
				</p>
				<p>
					You can also download my
					<a :href="$resumeFile" target="_blank" class="link-accent">
						resume</a
					>
					or visit me on
					<a
						href="https://www.linkedin.com/in/stephen-donchez/"
						target="_blank"
						class="link-accent"
					>
						LinkedIn</a
					>
					to learn more about my professional and academic activities.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Home",
	components: {},
	metaInfo: {
		title: "Home",
		meta: [
			{
				name: "description",
				content:
					"Stephen Donchez is a Systems Engineer with a passion for embedded systems security, a martial artist, an event production technician, and (most importantly) a ball thrower for his dog.",
			},
		],
	},
};
</script>

<style lang="scss" scoped>
html {
	font-family: "roboto", serif;
	font-display: swap;
}
h1 {
	font-family: "roboto slab", serif;
	font-display: swap;
}
h2 {
	font-family: "roboto slab", serif;
	font-display: swap;
	font-size: 4rem;
	padding-top: 2rem !important;
}
p {
	font-size: 1.4rem;
}

.panel {
	margin: 0;
	color: white;
	box-shadow:
		0 2px 5px 0 rgba(0, 0, 0, 0.16),
		0 2px 10px 0 rgba(0, 0, 0, 0.12);
	position: relative;
	@for $i from 1 through 4 {
		&:nth-child(#{$i}) {
			z-index: 98 - $i;
		}
	}
}

.copy {
	padding: 3rem;
}

#welcome-panel {
	background-image: url("/images/oreo.jpg"); /* fallback */
	background-image: image-set(
		url("/images/oreo-1080.webp") 1x type("image/webp"),
		url("/images/oreo-1920.webp") 2x type("image/webp"),
		url("/images/oreo-3840.webp") 3x type("image/webp"),
		url("/images/oreo-1080.jpg") 1x type("image/jpeg"),
		url("/images/oreo-1920.jpg") 2x type("image/jpeg"),
		url("/images/oreo-3840.jpg") 3x type("image/jpeg")
	);
	background-image: -webkit-image-set(
		url("/images/oreo-1080.webp") 1x type("image/webp"),
		url("/images/oreo-1920.webp") 2x type("image/webp"),
		url("/images/oreo-3840.webp") 3x type("image/webp"),
		url("/images/oreo-1080.jpg") 1x type("image/jpeg"),
		url("/images/oreo-1920.jpg") 2x type("image/jpeg"),
		url("/images/oreo-3840.jpg") 3x type("image/jpeg")
	);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

@media screen and (max-width: 768px) {
	.headshot {
		text-align: center;
	}
	h2 {
		// font-size: 3rem !important;
		font-size: calc(2rem + 0.9vw);
	}
	.copy {
		padding: calc(2vw);

		p {
			font-size: calc(0.8rem + 0.9vw);
		}
	}
}
</style>
