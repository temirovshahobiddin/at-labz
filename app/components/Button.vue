<script setup lang="ts">
interface Props {
  variant?: 1 | 2 | 3 | 4 | 5
  rounded?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 1,
  rounded: '20',
})

const baseClasses = 'p-5 w-full block text-center tracking-[-0.05em] leading-none transition-all cursor-pointer text-xl font-semibold rounded-[20px]'
</script>

<template>
  <NuxtLink
    v-if="href"
    :to="href"
    :class="[
      baseClasses,
      variant === 1 && 'bg-blue text-gray',
      variant === 2 && 'bg-[#7470B7] text-white',
      variant === 3 && 'bg-transparent text-blue border border-blue',
      variant === 4 && 'bg-white text-black-1d',
      variant === 5 && 'bg-gray2 text-black-1d',
    ]"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :class="[
      baseClasses,
      variant === 1 && 'bg-blue text-gray',
      variant === 2 && 'bg-[#7470B7] text-white',
      variant === 3 && 'bg-transparent text-blue border border-blue',
      variant === 4 && 'bg-white text-black-1d',
      variant === 5 && 'bg-gray2 text-black-1d',
    ]"
  >
    <slot />
  </button>
</template>
