<template>
    <div>
        <HeaderComponent title="Book Your Show"/>

        <section class="seat-section">
            <div class="screen">{{ movie.movie.title }}</div>

            <div class="seats">
                <div class="row">
                    <div tabindex="0" v-for="n in range(1,28)" :key="n" @click="() => onClickSeat(n)" :class="[selectedSeats.includes(n) ? 'selected-seats' : '', ticketsDetails[movie?.movie?.title]?.includes(n) ? 'booked-seats': '']">{{ n }}</div>
                </div>
                <div class="row">
                    <div tabindex="0" v-for="n in range(29,56)" :key="n" @click="() => onClickSeat(n)" :class="[selectedSeats.includes(n) ? 'selected-seats' : '',ticketsDetails[movie?.movie?.title]?.includes(n) ? 'booked-seats': '']">{{ n }}</div>
                </div>
            </div>
        </section>

        <footer v-if="selectedSeats.length">
            <div>Total Amount: {{ total }}</div>
            <CustomButton  label="Book Tickets"  :onClickBtn="onClickBookTicket"/>
        </footer>
    </div>

</template>

<script>
import HeaderComponent from "../HeaderComponent/HeaderComponent.vue";
import CustomButton from "../Button/CustomButton.vue";
import { mapGetters } from 'vuex';

export default {

    name: 'SeatingComponent',

    data() {
        return {
            selectedSeats: [],
        }
    },

    mounted() {
        console.log(this.movie)

    },

    methods: {
        range(start, end) {
            return Array.from({ length: end - start + 1 }, (_, index) => start + index);
        },

        onClickBookTicket() {
            this.$store.dispatch('setBookedTickets',{ movie:this.movie.movie.title, seats:this.selectedSeats});
            this.selectedSeats = [];
            this.$router.push({ name: 'SuccessPage'})
        },

        onClickSeat(val) {
            if(this.selectedSeats.includes(val)) {
                this.selectedSeats.splice(this.selectedSeats.indexOf(val),1)
            } else {
                this.selectedSeats.push(val)
            }
        }
    },

    computed: {
    
        ...mapGetters({
            movie: 'movie',
            ticketsDetails: 'ticketsDetails'
        }),
        
        total() {
            return this.selectedSeats.length * this.movie.price
        }
    },

    components: {
        HeaderComponent,
        CustomButton
    }
}

</script>

<style>

.seat-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.screen {
    background-color: #eae7e7;
    width: 500px;
    height: 200px;
    border: 1px solid gray;
    text-align: center;
}

.seats {
    display: flex;
    column-gap: 60px;
    margin-top: 60px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    row-gap: 40px;
    column-gap: 40px;
}

.row > div {
    border: 1px solid;
    width: 40px;
    text-align: center;
    cursor: pointer;
}

.selected-seats {
    background-color: rgb(168, 218, 168);

}

.booked-seats {
    background-color: red;
    pointer-events: none;
}

.info-content {
    position: absolute;
    top: 110px;
    right: 0;
}
</style>