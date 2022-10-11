import { createRouter, createWebHistory } from 'vue-router'
import NetflixHome from '../views/NetflixHome'
import ShowDetails from '../views/details/ShowDetails'
import MovieDetails from '../views/details/MovieDetails'
import NotFound from '../views/NotFound'

const routes = [
    {
        path: '/',
        name: 'home',
        component: NetflixHome
    },
    {
        path: '/showDetail/:id',
        name: 'showDetails',
        component: ShowDetails,
        props: true
    },
    {
        path: '/movieDetail/:id',
        name: 'movieDetails',
        component: MovieDetails,
        props: true
    },
    {
        path: '/:notFound(.*)',
        name: 'notFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
