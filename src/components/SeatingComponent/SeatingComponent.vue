<template>
    <div>
        <HeaderComponent title="Book Your Show"/>

        <section class="seat-section">
            <div class="screen">{{ movie.movie.title }}</div>

            <div>
                <div :style="{ color: 'blue', fontSize: '12px' }">Male Booked</div>
                <div :style="{ color: 'pink', fontSize: '12px' }">Female Booked</div>
                <div :style="{ color: 'rgb(168, 218, 168)', fontSize: '12px' }">Selected Seats</div>
            </div>

            <div class="seats">
                <div class="row">
                    <div 
                        tabindex="0" 
                        v-for="n in range(1,60)" 
                        :key="n" @click="() => onClickSeat(n)" 
                        :ref="`seats${n}`"
                        :class="[selectedSeats.includes(n) ? 'selected-seats' : '', ticketsDetails[movie?.movie?.title]?.['Male']?.includes(n) ? 'booked-seats-male': '',ticketsDetails[movie?.movie?.title]?.['Female']?.includes(n) ? 'booked-seats-female': '']"
                    >
                        {{ n }}
                    </div>
                </div>
            </div>
        </section>

        <footer v-if="selectedSeats.length">
            <div>Total Amount: {{ total }}</div>
            <button-component  label="Book Tickets"  :onClickBtn="onClickBookTicket"/>
        </footer>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import HeaderComponent from "../HeaderComponent/HeaderComponent.vue";
import ButtonComponent from "../Button/ButtonComponent.vue";

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
            this.$store.dispatch('setBookedTickets',{ movie:this.movie.movie.title, seats:this.selectedSeats, gender: this.user.gender });
            this.$store.dispatch('setSelectedTickets', this.selectedSeats)
            this.selectedSeats = [];
            this.$router.push({ name: 'SuccessPage', params: this.selectedSeats});
        },

        setSeats(val) {
            if(this.selectedSeats.includes(val)) {
                    this.selectedSeats.splice(this.selectedSeats.indexOf(val),1)
            } else {
                 this.selectedSeats.push(val)
            }
        },

        onClickSeat(val) {
            if(this.user.gender === 'Male') {
                if(this.ticketsDetails?.[this.movie.movie.title]?.['Female']?.includes(val-1) || this.ticketsDetails?.[this.movie.movie.title]?.['Female']?.includes(val+1)) {
                    console.log('near female')
                    alert('Seat is next to the female!');
                }
                else {
                    this.setSeats(val);
                }
            }
            else if (this.user.gender === 'Female') {
                if(this.ticketsDetails?.[this.movie.movie.title]?.['Male']?.includes(val-1) || this.ticketsDetails?.[this.movie.movie.title]?.['Male']?.includes(val+1)) {
                    console.log('near male')
                    alert('Seat is next to the male!');
                }
                else {
                   this.setSeats(val);
                }
            }
        }
    },

    computed: {
    
        ...mapGetters({
            movie: 'movie',
            ticketsDetails: 'ticketsDetails',
            user: 'user'
        }),
        
        total() {
            return this.selectedSeats.length * this.movie.price
        }
    },

    components: {
        HeaderComponent,
        ButtonComponent
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

.booked-seats-male {
    background-color: blue;
    color: white;
    pointer-events: none;
}

.booked-seats-female {
    background-color: pink;
    color: white;
    pointer-events: none;
}

.info-content {
    position: absolute;
    top: 110px;
    right: 0;
}
</style>