<template>
  <div class="bg-yellow-100 flex">
    <div class="my-16">
      <div class="container">
        <img
          v-bind:src="getSrc(details)"
          class="mx-4 py-4 image hover:cursor-pointer"
        />
        <div class="middle hover:cursor-pointer">
          <div class="text">
            <font-awesome-icon icon="fa-thin fa-circle-play" />
          </div>
        </div>
      </div>
      <h1 class="mx-4 font-bold align-middle">
        {{ details.original_title }} ( Release Date :
        {{ details.release_date }} )
      </h1>
    </div>
    <div class="">
      <div v-for="genre in details.genres" :key="genre.id" class="m-10">
        <button
          class="bg-purple-400 auto px-2 rounded hover:bg-purple-700 hover:text-white"
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

<style>
.container {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
