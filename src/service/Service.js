import store from "@/store";
import axios from "axios";

const movieAPI = {
    baseURL: 'https://api.themoviedb.org/3/',
    key: '599d1b5ce7294bd131dc1fee1b8949fb'
}

export default {
    getTrendingMovieList() {
        axios
            .get(`${movieAPI.baseURL}trending/movie/week?api_key=${movieAPI.key}`)
            .then((response) => {
                store.state.trendingMovieList = response.data.results
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getTrendingShowsList() {
        axios
            .get(`${movieAPI.baseURL}trending/tv/week?api_key=${movieAPI.key}`)
            .then((response) => {
                store.state.trendingShowList = response.data.results
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getTopRatedMovies() {
        axios
            .get(`${movieAPI.baseURL}movie/top_rated?api_key=${movieAPI.key}`)
            .then((response) => {
                store.state.topRatedMovieList = response.data.results
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getTopRatedShows() {
        axios
            .get(`${movieAPI.baseURL}tv/top_rated?api_key=${movieAPI.key}`)
            .then((response) => {
                store.state.topRatedShowList = response.data.results
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getMovieDetails(id) {
        axios
            .get(`${movieAPI.baseURL}movie/${id}?api_key=${movieAPI.key}`)
            .then((response) => {
                store.state.movieDetails = response.data
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getShowDetails(id) {
        axios
            .get(`${movieAPI.baseURL}tv/${id}?api_key=${movieAPI.key}`)
            .then((response) => {
                store.state.showDetails = response.data
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getMovieGenreList() {
        axios
            .get(`${movieAPI.baseURL}genre/movie/list?api_key=${movieAPI.key}`)
            .then((response) => {
                store.state.genreList = response.data
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getSearchDetails(input) {
        axios
            .get(`${movieAPI.baseURL}search/movie?api_key=${movieAPI.key}&query=${input}`)
            .then((response) => {
                console.log('hello');
                store.state.searchList = response.data
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}