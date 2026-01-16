<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

interface Slide {
  title: string
  text: string
  image: string
}

defineProps<{
  slides: Slide[]
}>()
</script>

<template>
  <section id="howitworks" class="flex flex-col gap-3 sm:gap-5 lg:gap-[60px] mt-[60px] xl:mt-[100px] overflow-hidden">
    <Container>
      <div class="flex flex-col gap-[15px] text-left">
        <h2 class="text-blue text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] leading-[100%] font-bold uppercase tracking-[-0.05em]">
          Как это работает
        </h2>
        <p class="text-blue/60 text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[32px] leading-[120%]">
          От запроса до готового решения — всего 30 секунд
        </p>
      </div>
    </Container>

    <div class="max-w-[1840px] mx-auto w-full">
      <Swiper
        :modules="[FreeMode]"
        :free-mode="true"
        slides-per-view="auto"
        :space-between="0"
        class="w-full !px-5"
      >
        <template v-for="(slide, index) in slides" :key="index">
          <SwiperSlide class="!w-auto">
            <div class="relative rounded-[20px] h-[234px] sm:h-[382px] lg:h-[300px] xl:h-[330px] w-[234px] sm:w-[359px] lg:w-[360px] xl:w-[440px] bg-white p-6 flex flex-col justify-between">
              <h4 class="z-10 text-[16px] sm:text-[24px] lg:text-[20px] xl:text-[24px] tracking-[-0.05em] leading-[100%] font-bold uppercase">
                {{ slide.title }}
              </h4>
              <img class="absolute z-0 top-[50px] right-0 lg:max-w-[180px] xl:max-w-none max-w-[120px] sm:max-w-[180px]" :src="slide.image" alt="">
              <p class="z-10 text-[12px] sm:text-[18px] lg:text-[16px] xl:text-[20px] leading-[120%] font-medium">
                {{ slide.text }}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide v-if="index !== slides.length - 1" class="!w-auto">
            <div class="h-[163px] sm:h-[315px] lg:h-[300px] xl:h-[330px] w-[26px] sm:w-[15px] bg-blue rounded-[10px]" />
          </SwiperSlide>
        </template>
      </Swiper>
    </div>

    <Container>
      <Button href="/premium/problem-solve" class="lg:mt-[-30px]" :variant="1">
        Попробовать бесплатно
      </Button>
    </Container>
  </section>
</template>
