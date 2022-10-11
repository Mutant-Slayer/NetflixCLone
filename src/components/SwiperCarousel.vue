<template>
  <carousel :items-to-show="8">
    <slide v-for="slide in 10" :key="slide">
      <div class="carousel__item"></div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
