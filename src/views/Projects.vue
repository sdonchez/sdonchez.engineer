<template>
	<div
		class="flex shrink basis-auto lg:max-w-[1140px] w-full px-4 ml-auto mr-auto"
	>
		<div class="flex flex-wrap h-fit">
			<InfoCard v-for="card in cards" :key="card.title" :card="card" />
		</div>
	</div>
</template>
<!--suppress SpellCheckingInspection -->
<script>
import { useHead } from "@unhead/vue";
import InfoCard from "@/components/InfoCard";
export default {
	name: "Projects",
	components: {
		InfoCard,
	},
	data: () => {
		return {
			cards: [
				{
					title: "An Efficient and Secure Architecture for FPGA-based Multi-Tenant Cloud Applications",
					subtitles: ["Master's Research"],
					slug: "Masters",
					text: [
						"I recently completed my thesis, which focused on enabling the use of FPGAs in a cloud environment. The complete work is available on <a class='link-accent' href=\"https://www.proquest.com/docview/2821495143\">ProQuest</a>, but the abstract and a link to the GitHub repository containing the corresponding technical artifacts can be found on my <a class='link-accent' href=\"/publications\">publications page</a>. If this work interests you, I'm happy to discuss it and/or see about making the full text available to you. Please don't hesitate to contact me if that's the case.",
					],
					icon: "ConceptDiagramSimplified.png",
					iconRight: true,
					iconPreview: true,
					avatarSquare: true,
					Alt: "Concept Diagram depicting the architecture presented in the Thesis",
				},
				{
					title: "ChemCAT",
					subtitles: [
						"Villanova University Chemical Container and Asset Tracker",
					],
					slug: "ChemCAT",
					text: [
						"Villanova's Chemical Container and Asset Tracker (ChemCAT) system is a recent project to provide comprehensive cradle-to-grave tracking of the university's chemical assets. The project maintains a history of every chemical asset's movement throughout the university from its procurement through its distribution, use, and disposal. It also provides the capacity to look up the Safety Data Sheet (SDS) information associated with each chemical, as well as the ability to generate reports on individual assets or aggregate data.",

						"The system is built utilizing the Laravel PHP framework to provide a easily navigable user interface. This interface interacts with a MySQL database, via Laravel's PDO driver. It also harnesses the power of AJAX to facilitate the dynamic loading of content. The project was developed following a substantial design process, including the generation of a highly detailed specification and preliminary UI design.",

						"Unfortunately, the project's codebase is owned by the university and not publicly available. However, I will gladly answer any questions regarding the details of its implementation.",
					],
					icon: "ChemCat.png",
					avatarSquare: true,
					iconPreview: true,
					Alt: "Screenshot of the ChemCAT Dashboard",
				},
				{
					title: "VUTC Website Redesign",
					subtitles: ["Villanova University Tech Crew"],
					slug: "VUTC-site",
					text: [
						"Beginning in the spring of 2020, I, alongside a group of like minded students, began a redesign of VUTC's website, through which all aspects of the organization's operations are managed. The current site (as the redesign is still in progress following several periods of paused work) was developed in PHP without the use of any framework or cohesive style, and the effort of maintaining it was beginning to exceed the effort involved in re-writing it from the ground up.",

						"The new site, like the ChemCAT project above, is built with the Laravel PHP framework and a bootstrapped front-end. The site also utilizes a MySQL/PDO database system, as well as extensive authentication and authorization gates to mitigate access to privileged portions of the site.",
					],
					icon: "VUTCWebsite.png",
					iconRight: true,
					avatarSquare: true,
					iconPreview: true,
					Alt: "Screenshot from the legacy VUTC website",
				},
				{
					title: "PrintCheck3D",
					subtitles: ["Senior Capstone Project"],
					slug: "PrintCheck3D",
					text: [
						"Villanova's ECE capstone project is a three semester, group based experience that is designed to provide students with experience in the implementation of a concept under real world circumstances. For our capstone project, my team worked to implement what became the PrintCheck3D system, a system that monitored the college's fleet of 3D Printers to detect failed printjobs, and took action on those failures in order to preserve the print where possible, and otherwise to stop the print in order to prevent damage to the printer or the waste of additional consumable resources.",

						"The project required, like most embedded systems, a fusion of hardware and software work. It centered around a Raspberry Pi, which ran a minimized linux operating system. The project code was authored in C++, and consisted of a number of subsystems responsible for various portions of the system's operation. The project harnessed a number of publicly available libraries to perform image processing and hardware interfaces, including the OpenCV library.",
						"On the hardware side, the project required the use of an infrared camera, as well as a photogate with custom logic to convert its output to values appropriate for the Raspberry Pi's GPIO interface. It also required the design and manufacturing of several custom hardware mounts to affix the system components to the printer.",
					],
					actions: [
						{
							link: "https://github.com/sdonchez/SeniorDesign",
							text: "Visit the project Github Repo",
						},
					],
					icon: "PrintCheck3D.jpg",
					avatarSquare: true,
					iconPreview: true,
					Alt: "Picture of a 3D printer monitored by PrintCheck3D",
				},
				{
					title: "HKA Database Management System",
					subtitles: ["Hoover Karate Academy"],
					slug: "HKADB",
					text: [
						"One of my earliest major development projects, the HKA Database Management System was designed in response to a drastic need for improvement to the school's pre-existing system for tracking student records. It affords users a simple, intuitive interface for managing almost all aspects of the school's operations, including attendance, student progression through the various ranks, tuition payment, and the generation of assorted administrative paperwork. It serves to automate a number of process that were previously done by hand, saving considerable time for the school's administrative staff.",

						"The system is built on Microsoft Access, with data located in a separate MySQL database. It implements a custom designed set of authentication mechanisms (as none were present in Access at the time of development), and facilitates simultaneous access from both local and remote users to afford convenience to the school's staff.",
					],
					icon: "HKADB.png",
					iconRight: true,
					avatarSquare: true,
					iconPreview: true,
					Alt: "Screenshot of the main menu of the HKA Database Application",
				},
			],
		};
	},
	mounted() {
		useHead({
			title: "Projects",
			meta: [
				{
					name: "description",
					content:
						"Stephen Donchez's projects, including his research on FPGAs, various web applications, Capstone project, and Database Management Application.",
				},
			],
		});
	},
};
</script>
