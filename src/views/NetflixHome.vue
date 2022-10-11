<template>
  <div class="my-20 text-white">
    <p class="cursor-pointer font-bold mx-2">Trending Movies</p>
    <ul class="flex">
      <carousel :items-to-show="4">
        <slide v-for="ele in $store.state.trendingMovieList" :key="ele.id">
          <div class="carousel__item">
            <li class="w-30">
              <router-link
                :to="{ name: 'movieDetails', params: { id: ele.id } }"
              >
                <img
                  class="p-2 cursor-pointer h-48 poster w-80"
                  v-bind:src="getSrc(ele)"
                />
                <div class="my-2 mx-2 cursor-pointer">{{ ele.title }}</div>
              </router-link>
            </li>
          </div>
        </slide>

        <template #addons>
          <navigation class="mx-4" />
        </template>
      </carousel>
    </ul>

    <p class="cursor-pointer font-bold mx-2">Trending Shows</p>
    <ul class="flex">
      <carousel :items-to-show="4">
        <slide v-for="ele in $store.state.trendingShowList" :key="ele.id">
          <div class="carousel__item">
            <li class="w-30">
              <router-link
                :to="{ name: 'showDetails', params: { id: ele.id } }"
              >
                <img
                  class="p-2 cursor-pointer h-48 poster w-80"
                  v-bind:src="getSrc(ele)"
                />
                <div class="my-2 mx-2 cursor-pointer">{{ ele.name }}</div>
              </router-link>
            </li>
          </div>
        </slide>
        <template #addons>
          <navigation class="mx-4" />
        </template>
      </carousel>
    </ul>
    <p class="cursor-pointer font-bold mx-2">Top Rated Shows</p>
    <ul class="flex">
      <carousel :items-to-show="4">
        <slide v-for="ele in $store.state.topRatedShowList" :key="ele.id">
          <div class="carousel__item">
            <li class="w-30">
              <router-link
                :to="{ name: 'showDetails', params: { id: ele.id } }"
              >
                <img
                  class="p-2 cursor-pointer h-48 poster w-80"
                  v-bind:src="getSrc(ele)"
                />
                <div class="my-2 mx-2 cursor-pointer">{{ ele.name }}</div>
              </router-link>
            </li>
          </div>
        </slide>
        <template #addons>
          <navigation class="mx-4" />
        </template>
      </carousel>
    </ul>
  </div>
</template>

<script>
import Service from "../service/Service";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "MovieGenre",
  mounted() {
    this.getPost();
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    getPost() {
      Service.getTrendingMovieList();
      Service.getTrendingShowsList();
      Service.getTopRatedMovies();
      Service.getTopRatedShows();
      Service.getMovieGenreList();
    },
    getSrc(ele) {
      return `http://image.tmdb.org/t/p/w780${ele.backdrop_path}`;
    },
  },
};
</script>

<style>
.poster:hover {
  transform: scale(1.5);
}

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
