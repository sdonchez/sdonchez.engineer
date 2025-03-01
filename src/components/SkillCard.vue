<template>
<Card class="my-4 w-full relative break-words min-w-0 h-fit">
  <template #title>{{ card.title }}</template>
  <template #content>
    <div class="flex flex-wrap">
      <div class="w-full px-[15px]">
        <div class="w-full p-4">
          <div v-for="para in card.text" :key="para">
            <p v-html="para" class="w-full"></p>
          </div>
        </div>
        <div v-for="skill in card.skills" :key="skill.title" class="float-left lg:max-w-1/3 w-full relative px-[15px]">
          <h4 class="text-center">
            {{skill.title}}
          </h4>
          <ul v-if="!skill.bullets.exists" class="list-disc">
            <div class="flex flex-wrap mx-[15px]" v-for="bullet in skill.bullets" :key="bullet">
              <li>{{bullet}}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </template>
</Card>
</template>

<script>
import { Card } from 'primevue';
export default {
	props: ["card"],
  computed: {
    skillsColWidth() {
      return 12/(this.card.skills.length)
    }
  }
}
</script>
