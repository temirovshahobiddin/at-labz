<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

defineProps<{
  items: FaqItem[]
}>()

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="mt-[60px] lg:mt-[100px]">
    <Container>
      <h3 class="text-blue text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] font-bold uppercase mb-[20px] lg:mb-[40px]">
        Часто задаваемые вопросы
      </h3>
      <div class="flex flex-col gap-2.5">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="bg-white rounded-[20px] overflow-hidden"
        >
          <button
            class="w-full flex justify-between items-center p-5 sm:p-6 lg:p-8 text-left cursor-pointer"
            @click="toggle(index)"
          >
            <span class="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] font-semibold leading-[120%] pr-4">
              {{ item.question }}
            </span>
            <span
              class="text-blue text-[24px] sm:text-[32px] font-bold transition-transform duration-300 flex-shrink-0"
              :class="{ 'rotate-45': openIndex === index }"
            >
              +
            </span>
          </button>
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[500px] opacity-100"
            leave-from-class="max-h-[500px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="openIndex === index" class="overflow-hidden">
              <p class="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 lg:pb-8 text-[14px] sm:text-[18px] lg:text-[22px] leading-[140%] text-black-1d/80">
                {{ item.answer }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </Container>
  </section>
</template>
