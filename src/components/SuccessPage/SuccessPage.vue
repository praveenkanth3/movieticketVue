<template>
    <div class="body-container">
        <img class="success-icon" src="../../constants/successIcon.svg" />
        <h1>Successfully Booked The {{ selectedTicket.join(',') }} Tickets</h1>
        <div tabindex="0" @click="onClickGoHome" class="goto-home">Go To Home</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    name: "SuccessPage",

    computed: {
    
        ...mapGetters({
            selectedTicket: 'selectedTicket'
        })
    },

    methods: {
        onClickGoHome() {
            this.$router.push({ name: 'HomePage'})
            this.$store.dispatch('setSelectedTickets', {})
        }
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