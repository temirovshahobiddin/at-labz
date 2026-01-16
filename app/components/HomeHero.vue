<script setup lang="ts">
import hero from '~/assets/images/hero.png'
import hero2 from '~/assets/images/hero2.png'
import hero3 from '~/assets/images/hero3.png'
import hero4 from '~/assets/images/hero4.png'

const emit = defineEmits<{
  (e: 'openModal'): void
}>()

const currentSlide = ref(0)
const isAnimating = ref(false)
const touchStart = ref<number | null>(null)
const touchEnd = ref<number | null>(null)
const isDragging = ref(false)
const dragOffset = ref(0)

const carouselSlides = [
  { id: 1, img: hero, text: 'Помощь с учебой' },
  { id: 2, img: hero2, text: 'Карьера и саморазвитие' },
  { id: 3, img: hero3, text: 'Личные финансы' },
  { id: 4, img: hero4, text: 'Психологическая поддержка' },
]

const currentSlideData = computed(() => carouselSlides[currentSlide.value])
const prevSlideData = computed(() => carouselSlides[(currentSlide.value - 1 + carouselSlides.length) % carouselSlides.length])
const nextSlideData = computed(() => carouselSlides[(currentSlide.value + 1) % carouselSlides.length])

function goToSlide(index: number) {
  if (isAnimating.value) return
  isAnimating.value = true
  currentSlide.value = index
  setTimeout(() => (isAnimating.value = false), 700)
}

function nextSlide() {
  if (isAnimating.value) return
  isAnimating.value = true
  currentSlide.value = (currentSlide.value + 1) % carouselSlides.length
  setTimeout(() => (isAnimating.value = false), 700)
}

function prevSlide() {
  if (isAnimating.value) return
  isAnimating.value = true
  currentSlide.value = (currentSlide.value - 1 + carouselSlides.length) % carouselSlides.length
  setTimeout(() => (isAnimating.value = false), 700)
}

const minSwipeDistance = 50

function onTouchStart(e: TouchEvent) {
  touchEnd.value = null
  touchStart.value = e.targetTouches[0].clientX
  isDragging.value = true
}

function onTouchMove(e: TouchEvent) {
  if (!touchStart.value) return
  const currentTouch = e.targetTouches[0].clientX
  touchEnd.value = currentTouch
  dragOffset.value = currentTouch - touchStart.value
}

function onTouchEnd() {
  if (!touchStart.value || !touchEnd.value) {
    isDragging.value = false
    dragOffset.value = 0
    return
  }

  const distance = touchStart.value - touchEnd.value
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance

  if (isLeftSwipe) nextSlide()
  else if (isRightSwipe) prevSlide()

  isDragging.value = false
  dragOffset.value = 0
  touchStart.value = null
  touchEnd.value = null
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="mt-5 lg:mt-10">
    <Container>
      <div class="flex flex-col gap-[15px] w-full">
        <!-- Header row -->
        <div class="flex justify-between max-lg:flex-col-reverse max-lg:gap-5">
          <h1
            class="max-w-[718px] lg:max-w-[900px] xl:max-w-[1100px] w-full text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] font-bold uppercase tracking-[-0.05em] leading-[100%] text-blue max-sm:text-center"
          >
            Твой персональный AI-ассистент на каждый день
          </h1>
          <div class="xl:max-w-[440px] w-full flex flex-col max-lg:flex-row gap-2.5 items-center max-sm:flex-col">
            <div class="w-full max-w-[416px] xl:max-w-[440px] text-center">
              <div class="border border-gray px-[25px] rounded-[20px] flex flex-col max-lg:flex-row items-center justify-center w-full h-[90px] bg-white max-sm:h-10 max-sm:m-auto">
                <div class="flex items-center justify-center lg:w-full">
                  <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.8099 0.972485C14.2312 -0.324174 16.0657 -0.32417 16.487 0.972489L19.0982 9.00912C19.2866 9.589 19.827 9.98161 20.4367 9.98161H28.887C30.2504 9.98161 30.8172 11.7263 29.7142 12.5276L22.8778 17.4945C22.3846 17.8529 22.1782 18.4882 22.3666 19.0681L24.9778 27.1047C25.3991 28.4014 23.9151 29.4796 22.8121 28.6782L15.9757 23.7113C15.4824 23.3529 14.8145 23.3529 14.3212 23.7113L7.48481 28.6782C6.38181 29.4796 4.89773 28.4014 5.31904 27.1047L7.9303 19.0681C8.11872 18.4882 7.91231 17.8529 7.41903 17.4945L0.582662 12.5276C-0.520343 11.7263 0.04653 9.98161 1.40992 9.98161H9.86013C10.4699 9.98161 11.0102 9.589 11.1987 9.00912L13.8099 0.972485Z"
                      fill="#FDE049"
                    />
                  </svg>
                  <p class="text-[32px] text-black-1d/40 font-bold leading-[120%] text-center max-sm:text-[20px]">
                    5.0
                  </p>
                </div>
                <p class="text-black-1d/40 leading-[120%] font-medium text-[20px] max-sm:text-[14px] w-full">
                  по отзывам пользователей
                </p>
              </div>
            </div>
            <p class="text-center xl:m-auto max-w-[241px] text-black-1d/40 leading-[120%] font-medium text-[20px] max-sm:text-[10px] w-full">
              на основе 1000+ сессий
            </p>
          </div>
        </div>

        <!-- Content area -->
        <div class="lg:max-w-[500px] xl:max-w-[500px] w-full flex flex-col gap-4 sm:gap-[30px] max-md:max-w-[718px]">
          <p class="text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[32px] leading-[120%] tracking-[-0.05em] font-medium max-sm:hidden">
            Решай задачи, принимай решения, развивайся — всё в одном месте.
          </p>

          <!-- Mobile slider -->
          <div
            class="lg:hidden flex flex-col items-center w-screen -ml-5 overflow-hidden touch-pan-y"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
          >
            <div
              class="relative w-[449px] h-[488px] max-md:w-[336px] max-md:h-[365px] overflow-hidden"
              :style="{
                transform: isDragging ? `translateX(${dragOffset}px)` : 'translateX(0)',
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              }"
            >
              <img
                v-for="(slide, index) in carouselSlides"
                :key="slide.id"
                :src="slide.img"
                alt=""
                class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out"
                :class="index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
                :style="{
                  transform: isDragging && index === currentSlide ? `translateX(${dragOffset * 0.5}px)` : undefined,
                }"
                loading="eager"
              >
            </div>
            <div
              class="relative w-full overflow-hidden"
              :style="{
                transform: isDragging ? `translateX(${dragOffset * 0.3}px)` : 'translateX(0)',
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              }"
            >
              <div class="flex gap-2.5 h-[70px] max-sm:h-[53px] justify-center items-center">
                <div class="h-full w-[259px] max-sm:w-[120px] backdrop-blur-[25px] bg-gradient-to-r from-transparent to-white flex items-center justify-center">
                  <span class="text-[20px] max-sm:text-[14px] font-semibold bg-gradient-to-r from-transparent to-black bg-clip-text text-transparent transition-opacity duration-500 text-center leading-[110%]">
                    {{ prevSlideData.text }}
                  </span>
                </div>
                <div class="h-full w-[280px] z-20 max-sm:w-[160px] bg-white flex items-center justify-center text-[20px] max-sm:text-[14px] font-semibold px-2">
                  <span class="transition-opacity duration-500 text-center leading-[110%]">{{ currentSlideData.text }}</span>
                </div>
                <div class="h-full w-[259px] max-sm:w-[120px] backdrop-blur-[25px] bg-gradient-to-r from-white to-transparent flex items-center justify-center">
                  <span class="text-[20px] max-sm:text-[14px] font-semibold bg-gradient-to-r from-black to-transparent bg-clip-text text-transparent transition-opacity duration-500 text-center leading-[110%]">
                    {{ nextSlideData.text }}
                  </span>
                </div>
              </div>
            </div>
            <!-- Mobile navigation dots -->
            <div class="flex gap-2 mt-3">
              <button
                v-for="(_, index) in carouselSlides"
                :key="index"
                class="h-2.5 rounded-full transition-all duration-300"
                :class="index === currentSlide ? 'bg-blue w-6' : 'bg-gray w-2.5'"
                @click="goToSlide(index)"
              />
            </div>
          </div>

          <div class="sm:hidden">
            <p class="text-[16px] leading-[120%] max-w-[306px] m-auto font-medium text-center">
              Решай задачи, принимай решения, развивайся — всё в одном месте.
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col gap-2.5 z-20">
            <Button :variant="1" @click="emit('openModal')">
              Попробовать бесплатно
              <br>
              (100 токенов)
            </Button>
            <Button href="#about" :variant="3">
              Что умеет ассистент?
            </Button>
          </div>
        </div>
      </div>

      <!-- Desktop slider -->
      <div class="flex flex-col max-lg:hidden">
        <div class="w-full flex justify-end 2xl:justify-center -mt-[200px] lg:-mt-[200px] xl:-mt-[280px]">
          <div class="relative w-[500px] lg:w-[550px] xl:w-[692px] h-[550px] lg:h-[600px] xl:h-[752px] overflow-hidden">
            <img
              v-for="(slide, index) in carouselSlides"
              :key="slide.id"
              :src="slide.img"
              alt=""
              class="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out"
              :class="index === currentSlide ? 'opacity-100' : 'opacity-0'"
            >
          </div>
        </div>
        <div class="w-full overflow-hidden relative">
          <div class="flex gap-[15px] h-20 lg:h-20 xl:h-24">
            <div class="h-full min-w-[300px] lg:min-w-[350px] xl:min-w-[439px] backdrop-blur-[25px] bg-gradient-to-r from-transparent to-white flex items-center justify-center">
              <span class="text-[24px] lg:text-[28px] xl:text-[32px] font-semibold bg-gradient-to-r from-transparent to-black bg-clip-text text-transparent transition-opacity duration-500 text-center leading-[110%] px-2">
                {{ prevSlideData.text }}
              </span>
            </div>
            <div class="h-full min-w-[600px] lg:min-w-[700px] xl:min-w-[892px] bg-white flex items-center justify-center text-[24px] lg:text-[28px] xl:text-[32px] font-semibold shrink-0">
              <span class="transition-opacity duration-500 text-center leading-[110%]">{{ currentSlideData.text }}</span>
            </div>
            <div class="h-full min-w-[300px] lg:min-w-[350px] xl:min-w-[439px] backdrop-blur-[25px] bg-gradient-to-r from-white to-transparent flex items-center justify-center">
              <span class="text-[24px] lg:text-[28px] xl:text-[32px] font-semibold bg-gradient-to-r from-black to-transparent bg-clip-text text-transparent transition-opacity duration-500 text-center leading-[110%] px-2">
                {{ nextSlideData.text }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>