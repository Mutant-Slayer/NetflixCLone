<template>
  <header class="bg-slate-900 text-white h-18 absolute w-full top-0">
    <ul class="flex mx-2 p-4">
      <router-link :to="{ name: 'home' }"
        ><li class="my-2 mx-4 cursor-pointer font-bold text-red-500">
          Netflix
        </li></router-link
      >
      <router-link :to="{ name: 'home' }"
        ><li class="my-2 mx-4 cursor-pointer">Home</li></router-link
      >
      <li class="my-2 mx-4 cursor-pointer">TV Shows</li>
      <li class="my-2 mx-4 cursor-pointer">Movies</li>
      <li class="my-2 mx-4 cursor-pointer">Latest</li>
      <li class="my-2 mx-4 cursor-pointer mr-auto">Children</li>
      <li class="my-2 mx-4 cursor-pointer">
        <font-awesome-icon icon="fa-solid fa-search" @click="textBar()" />
        <input
          type="text"
          name=""
          id="search-box"
          placeholder="name,genres..."
          class="bg-gray-800"
          hidden
        />
      </li>
    </ul>
  </header>
  <router-view />
</template>

<script>
import Service from "@/service/Service";
export default {
  name: "NavBar",
  methods: {
    textBar() {
      var searchBox = document.getElementById("search-box");
      console.log(searchBox.textContent);
      searchBox.hidden = false;
    },
    search() {
      var searchBox = document.getElementById("search-box");
      searchBox.onpointerenter = Service.getSearchDetails(searchBox.textContent);
      console.log(searchBox.textContent);
    },
  },
};
</script>

<style></style>