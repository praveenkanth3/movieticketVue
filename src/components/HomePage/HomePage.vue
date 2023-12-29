<template>
    <div class="homepage-container">
        <div :class="{'blur-content': isDrawerOpen}">
            <HeaderComponent 
                title="Book Your Show" 
                :onChangeSearch="onChangeSearch" 
                :searchValue="searchTxt"
                :searchOptions="searchOptions"
                :changeSeachInputForValue="changeSeachInputForValue"
            />

            <div class="movies-container">
                <CardComponent 
                    v-for="movie in movies" 
                    :key="movie.imdbid" 
                    :movieDetail="movie" 
                    :onClickCard="onClickCard" 
                />
            </div>
        </div>

        <CustomDrawer 
            :isDrawerOpen="isDrawerOpen"
            :toggleDrawer="toggleDrawer" 
            :selectedMovie="selectedMovie"
        />
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
            console.log(movies);
            console.log(this.searchOptions);
            this.selectedMovie = movie;
            this.isDrawerOpen = true;
        },

        onChangeSearch(val) {
            this.searchTxt = val;
        },

        toggleDrawer() {
            this.isDrawerOpen = !this.isDrawerOpen;
        },

        changeSeachInputForValue(val) {
            this.searchTxt = val
        },
    },

    computed: {
        movies() {
            return movies.filter((val) =>  val.title.toLowerCase().includes(this.searchTxt.toLowerCase()))
        },

        searchOptions() {
            return this.movies.map(val => val.title);
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
    column-gap: 70px;
    padding: 20px;
    row-gap: 20px;
    flex-wrap: wrap;
    background-color:antiquewhite;

}

.blur-content{
  filter: blur(5px);
  pointer-events: none;
}

.homepage-container { 
    display:flex;
    flex-direction: column;
    row-gap: 10px;
}

</style>