<template>

    <div class='btn-container'>
        <button @click="onClickBtn" :class="customClass">{{ label }}</button>
    </div>

</template>

<script>

export default {
    name: 'ButtonComponent',

    props: {
        label: {
            type: String,
            required: true,
        },

        onClickBtn: {
            type: Function,
            required: true,
        },

        customClass: {
            type: String,
            required: false
        }
    }
}

</script>

<style>

button {
    width:fit-content;
}

.btn-container {
    display: flex;
    justify-content: center;
}

</style>