<script setup lang="ts">
import tryNowImg from '~/assets/images/JustNow.png'
</script>

<template>
  <section class="mt-[60px] lg:mt-[100px]">
    <Container>
      <div class="flex flex-col relative justify-between bg-blue w-full h-[370px] sm:h-[450px] lg:h-[500px] xl:h-[600px] rounded-[30px] p-4 pt-6 sm:p-[40px] lg:p-[50px] xl:p-[60px]">
        <div class="flex flex-col gap-2 sm:gap-6">
          <h3 class="text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] font-bold uppercase leading-[100%] text-white">
            Попробуйте прямо сейчас!
          </h3>
          <p class="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[32px] font-medium leading-[120%] text-white max-w-[913px] w-full">
            Получите готовое решение или совет уже через 30 секунд. Без подписки — первые 100 токенов бесплатно
          </p>
        </div>
        <div class="absolute w-full z-10 flex justify-end bottom-[60px] sm:bottom-[100px] lg:bottom-[80px] xl:bottom-[120px] right-5 sm:right-[50px] lg:right-[70px] xl:right-[100px]">
          <img
            :src="tryNowImg"
            alt=""
            class="w-[188px] h-[188px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px] xl:w-[324px] xl:h-[324px]"
          >
        </div>
        <Button href="/premium/problem-solve" class="z-20" :variant="4">
          Попробуй нашего ассистента
        </Button>
      </div>
    </Container>
  </section>
</template>
