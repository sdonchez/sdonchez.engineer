<template>
	<div
		class="flex shrink basis-auto lg:max-w-[1140px] w-full px-4 ml-auto mr-auto"
	>
		<div class="flex flex-wrap h-fit">
			<InfoCard v-for="card in cards" :key="card.title" :card="card" />
		</div>
	</div>
</template>

<script>
import { useHead } from "@unhead/vue";
import InfoCard from "@/components/InfoCard";
export default {
	name: "Education",
	components: {
		InfoCard,
	},
	data: () => {
		return {
			cards: [
				{
					title: "Villanova University",
					subtitles: [
						"Bachelor of Science, Computer Engineering (2016-2020)",
						"Master of Science, Computer Engineering (2020-2022)",
					],
					slug: "VU",
					text: [
						"I earned my Bachelor of Science in Computer Engineering from Villanova University's College of Engineering between August 2016 and May of 2020. During this time, I also completed a minor in Computer Science, and worked on <a class='link-accent' href='#/projects'>a number of interesting projects</a>.",

						"I then continued on to earn my Master of Science in Computer Engineering at Villanova, recently completing this degree in Spring of 2022. I researched Embedded Systems design and FPGA security during my time in this program, with a focus on securing multi-tenant heterogeneous systems in a cloud environment.",

						"Outside my curricular activities at Villanova, I was heavily involved in Villanova University Tech Crew, an on campus event production company. Additionally, I <a class='link-accent' href='#/work'>worked</a> for Villanova's Department of Environmental Health and Safety, providing web and asset management, database development and administration, and assorted related services.",
					],
					actions: [
						{
							link: "https://www1.villanova.edu/content/university/engineering/academic-programs/departments/electrical-computer.html",
							text: "Learn more about Villanova Computer Engineering",
						},
					],
					/*noinspect*/
					icon: "VUENG.jpg",
					iconRight: false,
					alt: "Villanova College of Engineering Seal",
				},
				{
					title: "Lehigh Valley Academy",
					subtitles: ["High School (2012-2016)"],
					slug: "LVA",
					text: [
						"From 2012 to 2016, I attended Lehigh Valley Academy Regional Charter School for my high school degree. LVA is actually a K-12 Charter School, and I attended there for all 13 years of my primary and secondary education.",

						"In addition to my traditional high school diploma, LVA afforded me the opportunity to receive an International Baccalaureate Diploma through the <a class='link-accent' href='https://ibo.org/programmes/diploma-programme/' target='_blank'>IB Diploma Programme</a>. This comprehensive program stressed a balance of liberal arts and STEM courses, while also putting an emphasis on community service and individual research.",

						"Outside of class, a large portion of my time in High School at LVA was occupied by a club I was heavily invested in, the <a class='link-accent' href='https://tsaweb.org/' target='_blank'>Technology Student Association.</a>As a member of TSA, I worked to create unique physical products, as well as develop my problem solving skills. I also served as the Pennsylvania State Historian for the organization. This position required me to produce all multimedia content for the statewide organization, as well as work alongside the other 7 state officers to plan and execute our 2,000 person state conference.",
					],
					actions: [
						{
							link: "https://www.lvacademy.org/",
							text: "Learn more about Lehigh Valley Academy",
						},
					],
					icon: "LVAJaguar.png",
					iconRight: true,
					alt: "Lehigh Valley Academy Logo",
				},
			],
		};
	},
	mounted() {
		useHead({
			title: "Education",
			meta: [
				{
					name: "description",
					content:
						"Stephen Donchez's education history, including his Bachelors and MAsters from Villanova University, as well as his high school education at Lehigh Valley Academy.",
				},
			],
		});
	},
};
</script>
