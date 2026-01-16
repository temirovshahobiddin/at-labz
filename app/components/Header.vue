<script setup>
import Student from "~/components/icons/Student.vue"
import ArrowGrowt from "~/components/icons/ArrowGrowt.vue"
import Psychology from "~/components/icons/psychology.vue"
import Money from "~/components/icons/Money.vue"
import Burger from "~/components/icons/Burger.vue"

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
</script>

<template>
  <header class="pt-[30px]">
    <Container>
      <div class="flex justify-between items-center gap-2.5 py-[14px] px-10 rounded-[40px] bg-white max-[1282px]:px-5">
        <NuxtLink href="/">
          <img
            src="~/assets/images/logo.svg"
            alt="logo"
            width="117"
            height="36"
          >
        </NuxtLink>

        <nav class="max-[1282px]:hidden">
          <ul class="flex gap-[30px] max-[1762px]:gap-2.5">
            <li v-for="link in navLinks">
              <NuxtLink class="text-xl text-black-1d max-[1762px]:text-base max-[1370px]:text-sm" :href="link.href" v-if="!link.hasDropdown">
                {{ link.text }}
              </NuxtLink>

              <div class="relative flex items-center cursor-pointer gap-[5px] text-xl group max-[1762px]:text-base max-[1370px]:text-sm" v-else>
                {{ link.text }}

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                
                <div class="absolute left-0 top-full pt-10 duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <div class="grid grid-cols-2 gap-x-5 gap-y-2.5 bg-white p-[30px] rounded-[20px] min-w-[384px]">
                    <NuxtLink class="flex items-center gap-2.5">
                      <span class="flex shrink-0 justify-center items-center text-blue w-[42px] h-[42px] bg-gray2 rounded-[10px]">
                        <Student />
                      </span>

                      Обучение
                    </NuxtLink>

                    <NuxtLink class="flex items-center gap-2.5">
                      <span class="flex shrink-0 justify-center items-center text-blue w-[42px] h-[42px] bg-gray2 rounded-[10px]">
                        <ArrowGrowt />
                      </span>

                      Развитие
                    </NuxtLink>

                    <NuxtLink class="flex items-center gap-2.5">
                      <span class="flex shrink-0 justify-center items-center text-blue w-[42px] h-[42px] bg-gray2 rounded-[10px]">
                        <Psychology />
                      </span>

                      Психология
                    </NuxtLink>

                    <NuxtLink class="flex items-center gap-2.5">
                      <span class="flex shrink-0 justify-center items-center text-blue w-[42px] h-[42px] bg-gray2 rounded-[10px]">
                        <Money />
                      </span>

                      Финансы
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div class="flex gap-[30px] max-[1762px]:gap-2.5 max-[1282px]:hidden">
          <NuxtLink class="p-5 font-semibold text-xl tracking-[0.05em] text-blue border border-blue rounded-[20px] text-center max-[1762px]:text-base" href="#">
            Зарегистрироваться
          </NuxtLink>

          <NuxtLink class="p-5 font-semibold text-xl tracking-[0.05em] text-gray bg-blue rounded-[20px] text-center max-[1762px]:text-base" href="#">
            Войти
          </NuxtLink>
        </div>

        <button class="hidden text-black-1d max-[767px]:w-6 max-[1282px]:block" type="button">
          <Burger />
        </button>
      </div>
    </Container>
  </header>
</template>