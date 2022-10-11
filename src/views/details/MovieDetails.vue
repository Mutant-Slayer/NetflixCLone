<template>
  <div class="bg-yellow-100">
    <div class="my-16">
      <img v-bind:src="getSrc(details)" class="mx-4 py-4" />
      <h1 class="mx-4 font-bold align-middle">
        {{ details.original_title }} ( Release Date :
        {{ details.release_date }} )
      </h1>
    </div>
    <div class="">
      <div v-for="genre in details.genres" :key="genre.id" class="m-10">
        <button
          class="bg-purple-400 w-20 rounded hover:bg-purple-700 hover:text-white"
        >
          {{ genre.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../service/Service";

export default {
  name: "MovieDetail",
  props: ["id"],
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      Service.getMovieDetails(this.id);
    },
    getSrc(ele) {
      return `http://image.tmdb.org/t/p/w780${ele.backdrop_path}`;
    },
  },
  computed: {
    details() {
      return this.$store.state.movieDetails;
    },
  },
};
</script>

<style></style>
