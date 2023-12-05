<template>
    <Transition name="drawer-fade">
        <div v-if="isDrawerOpen" class="custom-drawer">
            <header class="heading">
                <h2 class="title">{{ selectedMovie.title }}</h2>
                <div class="x-button" tabindex="0" @click="toggleDrawer">X</div>
            </header>

            <section class="body-section">
                <img :src="selectedMovie.imageurl[0]" />
                <div>
                    <div><span class="bold-text">Genre: </span>{{ selectedMovie.genre.join(',') }}</div>
                    <div><span class="bold-text">IMDB:</span> {{ selectedMovie.imdbrating || 'N/A' }} <span class="bold-text">Released:</span>{{ selectedMovie.released }}</div>
                    <div><span class="bold-text">Languages:</span>{{  selectedMovie.language.join(',') || 'N/A'  }} <span class="bold-text">Runtime:</span>{{ selectedMovie.runtime }}</div>
                    <div><span class="bold-text">Synopsis:</span>{{ selectedMovie.synopsis }}</div>
                </div>
            </section>

            <footer>
                <div class="bookTicket" tabindex="0" @click="onClickBookShow">Book Your show Here</div>
            </footer>
    </div>
    </Transition>
</template>

<script>
export default {
    name: 'CustomDrawer',

    props: {
        isDrawerOpen: {
            type: Boolean,
            required: true
        },

        toggleDrawer: {
            type: Function,
            required: true
        },

        selectedMovie: {
            type: Object,
            required: true
        }
    },

    methods: {

        onClickBookShow() {
            this.$router.push({ name: 'BookingPage' });
            this.$store.dispatch('setSelectedMovie', { movie: this.selectedMovie,price: 150});
        }
    }

}
</script>

<style scoped>
.custom-drawer {
  position: fixed;
  top: 80px;
  right: 0;
  width: 350px;
  border-radius: 10px;
  height: 100%;
  color: white;
  border: 5px solid antiquewhite;
  background-color: burlywood; /* Add your desired background color */
}

.bold-text {
    color: black;
    font-weight: bold;
}
.heading {
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
}

.title {
    width: 305px;
    margin-top: 0;
}

.bookTicket {
    background-color: white;
    color: black;
    cursor: pointer;
    width: 300px;
    border-radius: 10px;
    margin-top: 10px;
}

.x-button {
    font-size: 20px;
    position: absolute;
    top: 3px;
    right: 4px;
    cursor: pointer;
    padding: 10px;
    border: 5px solid antiquewhite;
    border-radius: 60px;
}

.body-section {
    text-align: center;
    margin-top: -10px;
    font-weight: bold;
}

footer {
    display: flex;
    justify-content: center;
    text-align: center;
}

.drawer-fade-enter,
  .drawer-fade-leave-to {
    opacity: 0;
  }

  .drawer-fade-enter-active,
  .drawer-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>