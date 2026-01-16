<script setup lang="ts">
import Student from "~/components/icons/Student.vue"
import ArrowGrowt from "~/components/icons/ArrowGrowt.vue"
import Money from "~/components/icons/Money.vue"
import Psychology from "~/components/icons/psychology.vue"

const navLinks = [
  {
    href: '/about',
    text: 'О AtLabs',
    hasDropdown: false
  },

  {
    href: '/tools',
    text: 'Инструменты',
    hasDropdown: true
  },

  {
    href: '/problem-solving',
    text: 'Решение задач',
    hasDropdown: false
  },

  {
    href: '/writing-papers',
    text: 'Написание работ',
    hasDropdown: false
  },

  {
    href: '/test-help',
    text: 'Помощь с контрольной',
    hasDropdown: false
  },

  {
    href: '/faq',
    text: 'FAQ',
    hasDropdown: false
  },

  {
    href: '/support',
    text: 'Поддержка',
    hasDropdown: false
  },
]

defineProps<{isMenuOpen: boolean}>()
</script>

<template>
  <div class="hidden fixed top-[150px] left-0 w-full h-[calc(100%-150px)] z-10 py-[50px] px-5 bg-white overflow-y-auto max-[1282px]:flex flex-col justify-between duration-200" :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'">
    <nav class="mb-[75px]">
      <ul class="flex flex-col gap-5">
        <li v-for="link in navLinks">
          <NuxtLink class="text-[32px] text-black-1d" :href="link.href" v-if="!link.hasDropdown">
            {{ link.text }}
          </NuxtLink>

          <div class="text-[32px]" v-else>
            {{ link.text }}

            <div class="p-[30px] grid grid-cols-2 gap-x-5 gap-y-2.5 bg-[#F0F0F0] rounded-[20px] max-w-[384px]">
              <NuxtLink class="flex items-center gap-2.5 text-xl font-medium">
                <span class="flex shrink-0 justify-center items-center text-blue w-[42px] h-[42px] bg-gray2 rounded-[10px]">
                  <Student />
                </span>

                Обучение
              </NuxtLink>

              <NuxtLink class="flex items-center gap-2.5 text-xl font-medium">
                <span class="flex shrink-0 justify-center items-center text-blue w-[42px] h-[42px] bg-gray2 rounded-[10px]">
                  <ArrowGrowt />
                </span>

                Развитие
              </NuxtLink>

              <NuxtLink class="flex items-center gap-2.5 text-xl font-medium">
                <span class="flex shrink-0 justify-center items-center text-blue w-[42px] h-[42px] bg-gray2 rounded-[10px]">
                  <Psychology />
                </span>

                Психология
              </NuxtLink>

              <NuxtLink class="flex items-center gap-2.5 text-xl font-medium">
                <span class="flex shrink-0 justify-center items-center text-blue w-[42px] h-[42px] bg-gray2 rounded-[10px]">
                  <Money />
                </span>

                Финансы
              </NuxtLink>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <div class="flex flex-col gap-2.5">
      <NuxtLink class="p-5 bg-blue rounded-[20px] text-center text-xl text-gray" href="#">
        Попробовать бесплатно <br>
        (100 токенов)
      </NuxtLink>

      <NuxtLink class="py-[15px] px-5 text-center font-semibold bg-gray2 rounded-[20px] text-xl text-black-1d" href="#">
        Войти
      </NuxtLink>

      <NuxtLink class="py-[15px] px-5 text-center font-semibold bg-gray2 rounded-[20px] text-xl text-black-1d" href="#">
        Регистрация
      </NuxtLink>

      <p class="text-center text-xl">
        А ещё мы есть в <NuxtLink class="underline" href="#">Telegram</NuxtLink>
      </p>
    </div>
  </div>
</template>