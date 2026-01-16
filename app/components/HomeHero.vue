<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import img1 from '~/assets/images/hero-img.png'
import img2 from '~/assets/images/hero-img2.png'

const activeIndex = ref(0)

const images = [
  img1,
  img2,
  img2,
]
</script>

<template>
  <section class="mt-10">
    <Container class="relative min-h-[857px]">
      <div class="flex justify-between items-center">
        <h1 class="font-bold flex-1 relative z-[1] text-[64px] uppercase text-blue max-w-[1034px] leading-[100%]">
          Твой персональный AI-ассистент на каждый день
        </h1>

        <div class="flex-1 max-w-[439px] relative z-[1]">
          <div class="flex flex-col items-center gap-2 bg-white border border-gray rounded-[20px] p-3">
            <div class="flex gap-2 items-center">
              <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8099 0.973065C14.2312 -0.323594 16.0657 -0.323591 16.487 0.973069L19.0982 9.0097C19.2866 9.58958 19.827 9.98219 20.4367 9.98219H28.887C30.2504 9.98219 30.8172 11.7268 29.7142 12.5282L22.8778 17.4951C22.3846 17.8535 22.1782 18.4888 22.3666 19.0687L24.9778 27.1053C25.3991 28.4019 23.9151 29.4802 22.8121 28.6788L15.9757 23.7119C15.4824 23.3535 14.8145 23.3535 14.3212 23.7119L7.48481 28.6788C6.38181 29.4802 4.89773 28.4019 5.31904 27.1053L7.9303 19.0687C8.11872 18.4888 7.91231 17.8535 7.41903 17.4951L0.582662 12.5282C-0.520343 11.7268 0.04653 9.98219 1.40992 9.98219H9.86013C10.4699 9.98219 11.0102 9.58958 11.1987 9.0097L13.8099 0.973065Z" fill="#FDE049" />
              </svg>

              <strong class="text-[32px] text-black-1d/40">
                5.0
              </strong>
            </div>

            <p class="text-black-1d/40 text-xl">
              по отзывам пользователей
            </p>
          </div>

          <p class="text-xl text-center text-black-1d/40">
            на основе 1000+ сессий
          </p>
        </div>
      </div>

      <p class="text-[32px] text-black-1d max-w-[439px] leading-[80%] mt-[15px] relative z-[1]">
        Решай задачи, принимай решения, развивайся — всё в одном месте.
      </p>

      <NuxtLink class="p-5 block max-w-[439px] rounded-[20px] bg-blue text-center font-semibold text-gray mt-[30px] relative z-[1]" href="#">
        Попробовать бесплатно
        (100 токенов)
      </NuxtLink>

      <NuxtLink class="block p-2.5 max-w-[439px] border border-blue mt-2.5 rounded-[20px] text-center font-semibold text-blue text-xl relative z-[1]" href="#">
        Что умеет ассистент?
      </NuxtLink>

        <img
          v-for="(img, index) in images"
          :class="activeIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'"
          class="max-w-[692px] w-full absolute bottom-0 left-1/2 -translate-x-1/2 duration-200"
          :src="img"
          alt="img"
        >

      <swiper
        class="!absolute bottom-0 left-1/2 -translate-x-1/2 w-full"
        slides-per-view="auto"
        space-between="15"
        :loop="true"
        @slideChange="s => activeIndex = s.realIndex"
      >
        <swiper-slide class="!w-[897px] p-10 bg-white rounded-[10px] font-semibold text-[40px] text-center">
          Личные финансы
        </swiper-slide>

        <swiper-slide class="!w-[897px] p-10 bg-white rounded-[10px] font-semibold text-[40px] text-center">
          Помощь с учебой
        </swiper-slide>

        <swiper-slide class="!w-[897px] p-10 bg-white rounded-[10px] font-semibold text-[40px] text-center">
          Карьера и саморазвитие
        </swiper-slide>

        <span class="absolute left-0 top-0 w-[474px] h-full bg-sliderBg z-[1]"></span>
        <span class="absolute right-0 top-0 w-[474px] h-full bg-sliderBg z-[1] -rotate-180"></span>
      </swiper>
    </Container>
  </section>
</template>