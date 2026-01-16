<script setup lang="ts">
import pc1 from '~/assets/images/LabPchycho1.png'
import pc2 from '~/assets/images/LabPchycho2.png'
import pc3 from '~/assets/images/LabPchycho3.png'
import pc4 from '~/assets/images/LabPchycho4.png'

interface CardItem {
  title: string
  description: string
  imageSrc: string
  link?: string
  buttonText?: string
}

defineProps<{
  title: string
  cards: CardItem[]
}>()

const emit = defineEmits<{
  (e: 'openModal'): void
}>()
</script>

<template>
  <section id="about" class="flex flex-col gap-4 sm:gap-[30px] mt-[60px] xl:mt-[100px]">
    <Container>
      <h3 class="text-[28px] text-blue sm:text-[40px] lg:text-[48px] xl:text-[64px] leading-[100%] tracking-[-0.05em] font-bold uppercase max-w-[342px] sm:max-w-[1346px] w-full">
        {{ title }}
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-2.5 lg:gap-[15px] mt-4 sm:mt-[30px]">
        <CardService
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :description="card.description"
          :image-src="card.imageSrc"
          :button-text="card.buttonText"
          :link="card.link"
          @modal="emit('openModal')"
        />
      </div>
    </Container>
  </section>
</template>
