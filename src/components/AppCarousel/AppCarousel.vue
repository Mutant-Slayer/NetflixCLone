<template>
  <div class="app-carousel">
    <carousel :items-to-show="$props.Showitem" :wrapAround="infinite" :autoplay="$props.autoPlay">
      <slide v-for="slide in $props.items" :key="slide">
        <slot v-bind:slide="slide" name="custom">
          <app-image :lazy-src="slide.imageUrl" />
        </slot>
      </slide>
      <template #addons>
        <navigation v-if="$props.enableArrows" />
        <pagination v-if="$props.showPagination" />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ICarouselProps } from '@/shared/interfaces';

export default defineComponent({
  name: 'AppCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    /**
     * number of slides to show
     */
    Showitem: {
      type: Number,
      default: 1,
    },
    /**
     * options array to render items
     */
    items: {
      type: Array as () => ICarouselProps[],
      default: (): string[] => [],
    },
    /**
     * infinite sliding.
     * @values Boolean
     */
    infinite: {
      type: Boolean,
      default: true,
    },
    /**
     * Whether to enable nav arrow.
     * @values Boolean
     */
    enableArrows: {
      type: Boolean,
      default: false,
    },
    /**
     * Autoplay slide in ms
     * @values Boolean
     */
    autoPlay: {
      default: 0,
      type: Number,
    },
    /**
     * Whether to enable pagination.
     * @values Boolean
     */
    showPagination: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="css">
@import './appcarousel.css';
</style>