<template>
    <div class="body-container">
        <img class="success-icon" src="../../constants/successIcon.svg" />
        <h1>Successfully Booked The Tickets</h1>
        <div tabindex="0" @click="onClickGoHome" class="goto-home">Go To Home</div>
    </div>
</template>

<script>

export default {
    name: "SuccessPage",

    methods: {
        onClickGoHome() {
            this.$router.push({ name: 'HomePage'})
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