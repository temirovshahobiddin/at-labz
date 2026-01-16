<script setup lang="ts">
import logoSvg from '~/assets/images/logo.svg'
</script>

<template>
  <section class="mt-[60px] lg:mt-[100px]">
    <Container>
      <h3 class="text-blue mb-[15px] text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] leading-[100%] tracking-[-0.05em] font-bold uppercase">
        О продукте
      </h3>
      <div class="flex justify-center my-2.5 py-3.5 bg-white sm:hidden">
        <img :src="logoSvg" alt="AtLabs Logo" class="h-8">
      </div>
      <div class="w-full sm:bg-white rounded-[40px] sm:p-[30px] font-medium leading-[120%] tracking-[-0.05em] flex flex-col gap-[16px]">
        <p class="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] font-medium leading-[130%] tracking-[-0.03em]">
          <span class="text-blue text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[28px] font-bold">Это</span> не просто AI, а
          персональные онлайн-сервисы, которые помогают решать реальные задачи. Наши инструменты помогают студентам
          и школьникам решать задачи, писать рефераты, эссе и курсовые, готовиться к экзаменам.
        </p>
        <p class="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] font-medium leading-[130%] tracking-[-0.03em]">
          AtLabs — это
          <span class="text-blue text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[28px] font-bold">Персональный комплекс сервисов</span>,
          который экономит ваше время, помогает принимать решения и двигаться вперёд.
        </p>
        <p class="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] font-medium leading-[130%] tracking-[-0.03em]">
          <span class="text-blue text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[28px] font-bold">Личный финансовый помощник</span>
          подскажет, как планировать бюджет, распределять расходы и сделать первые инвестиции. Коуч по развитию
          поможет выстроить план развития, проведет карьерную консультацию, поделится полезными материалами.
        </p>
        <p class="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] font-medium leading-[130%] tracking-[-0.03em]">
          <span class="text-blue text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[28px] font-bold">ИИ Психолог</span> поможет заглянуть
          вглубь себя, проанализировать ситуацию, посмотреть с другого ракурса.
        </p>
      </div>
    </Container>
  </section>
</template>
