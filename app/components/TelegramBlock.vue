<script setup lang="ts">
import atlabTg from '~/assets/images/AtlabTG.png'
</script>

<template>
  <section class="mt-[60px] lg:mt-[150px]">
    <Container>
      <h3 class="text-blue text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] font-bold uppercase">
        AtLabs в Telegram
      </h3>
      <p class="text-blue/60 font-medium text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[32px] leading-[120%]">
        Ваш AI-помощник всегда в мессенджере: отвечает на вопросы, генерирует тексты, решает задачи и помогает учиться.
      </p>
      <div class="w-full flex items-center mt-[30px] lg:mt-0 justify-center">
        <img :src="atlabTg" class="w-[200px] sm:w-[600px] lg:w-[800px] xl:w-[1000px]" alt="">
      </div>
      <Button :variant="1">
        Открыть в Telegram
      </Button>
    </Container>
  </section>
</template>
