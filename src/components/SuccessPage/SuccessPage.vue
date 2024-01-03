<template>
    <div class="body-container">
        <img class="success-icon" src="../../constants/successIcon.svg" />
        <h1>Successfully Booked The {{ selectedTicket.seats.length }} Tickets</h1>
        <div>Movie: {{ selectedTicket.name }}</div>
        <div>Seats: {{ selectedTicket.seats.join(',') }}</div>
        <div>Total Amount: {{ selectedTicket.amount }}</div>        
        <div tabindex="0" @click="onClickGoHome" class="goto-home">Go To Home</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "SuccessPage",

    methods: {
        onClickGoHome() {
            this.$router.push({ name: 'HomePage'})
            this.$store.dispatch('setSelectedTickets', {})
        },

        onClickPayment() {
            console.log('payment logic')
        }
    },

    computed: {
    
        ...mapGetters({
            selectedTicket: 'selectedTicket'
        })
    },

    components: {
    }
}
</script>

<style>
.success-icon {
    width:250px;
    height:250px;
}

.body-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.goto-home {
    color: blue;
    cursor:pointer;
}
</style>