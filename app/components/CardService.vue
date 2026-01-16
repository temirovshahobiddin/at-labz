<script setup lang="ts">
interface Props {
  title: string
  description: string
  imageSrc: string
  buttonText?: string
  link?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: 'Помощь с учебой',
})

const emit = defineEmits<{
  (e: 'modal'): void
}>()
</script>

<template>
  <div
    class="relative flex flex-col justify-between rounded-[20px] bg-white xl:max-w-[439px] px-4 py-6 w-full h-[340px] lg:h-[380px] xl:h-[436px] overflow-hidden cursor-pointer"
    @click="link ? $router.push(link) : emit('modal')"
  >
    <div class="max-w-[338px] w-full z-10">
      <h2 class="text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[32px] font-bold leading-[100%] tracking-[-0.05em] uppercase">
        {{ title }}
      </h2>
    </div>

    <div class="flex flex-col gap-[15px] xl:max-w-[407px] z-10">
      <p v-if="description" class="text-[16px] font-medium leading-[120%]">
        {{ description }}
      </p>
      <Button :href="link" :variant="1">
        {{ buttonText }}
      </Button>
    </div>

    <img
      v-if="imageSrc"
      class="absolute bottom-16 right-3 lg:bottom-20 lg:right-5 xl:bottom-[125px] xl:right-[50px] z-0 object-contain max-w-[120px] lg:max-w-[140px] xl:max-w-none"
      :src="imageSrc"
      :alt="title"
    >
  </div>
</template>
