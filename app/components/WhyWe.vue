<script setup lang="ts">
interface WhyItem {
  text: string
  icon: string
}

defineProps<{
  items: WhyItem[]
}>()
</script>

<template>
  <section class="mt-[60px] lg:mt-[100px]">
    <Container>
      <h3 class="text-blue text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] font-bold uppercase mb-[20px] lg:mb-[40px]">
        Почему мы?
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-[15px]">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="bg-white rounded-[20px] p-5 sm:p-6 flex flex-col gap-4 min-h-[180px] sm:min-h-[220px] lg:min-h-[280px]"
        >
          <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-blue/10 flex items-center justify-center text-2xl sm:text-3xl">
            {{ item.icon }}
          </div>
          <p class="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium leading-[130%]">
            {{ item.text }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
