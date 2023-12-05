<template>
    <div class="homepage-container">
        <HeaderComponent title="Book Your Show" :onChangeSearch="onChangeSearch" :searchValue="searchTxt"/>

        <div class="movies-container">
            <CardComponent v-for="movie in movies" :key="movie.imdbid" :movieDetail="movie" :onClickCard="onClickCard" />
        </div>
        <CustomDrawer :isDrawerOpen="isDrawerOpen" :toggleDrawer="toggleDrawer" :selectedMovie="selectedMovie" />
    </div>

</template>
<script>
import HeaderComponent from '../HeaderComponent/HeaderComponent.vue'
import CardComponent from '../CardComponent/CardComponent.vue'
import CustomDrawer from '../Drawer/CustomDrawer.vue'
import { movies } from  '../../constants/moviesList'

export default {
    name: 'HomePage',

    data () {
        return {
            searchTxt: '',
            selectedMovie: {},
            isDrawerOpen: false
        }
    },

    methods: {

        onClickCard(movie) {
            console.log(movie);
            this.selectedMovie = movie;
            this.isDrawerOpen = true;
        },

        onChangeSearch(val) {
            this.searchTxt = val;
        },

        toggleDrawer() {
            this.isDrawerOpen = !this.isDrawerOpen;
        }
    },

    computed: {
        movies() {
            return movies.filter((val) =>  val.title.toLowerCase().includes(this.searchTxt.toLowerCase()))
        }
    },
    
    components: {
        HeaderComponent,
        CardComponent,
        CustomDrawer
    }
}

</script>
<style>

.movies-container {
    display: flex;
    border-radius: 10px;
    column-gap: 20px;
    padding: 20px;
    row-gap: 20px;
    flex-wrap: wrap;
    background-color:antiquewhite;

}

.homepage-container { 
    display:flex;
    flex-direction: column;
    row-gap: 10px;
}

</style>