<template>

    <div class="header-container">
        <div class="title-section">
            <h1>{{ title }}</h1>
            <i style="font-size:36px" class="fa fa-film"></i>
            <InputBox v-if="onChangeSearch" placeholder="Search" :value="searchValue" :onChange="onChangeSearch"/>
        </div>
    </div>

</template>

<script>
import InputBox from '../Input/InputBox.vue'

export default {

    name: 'HeaderComponent',

    props: {

        title: {
            type: String,
            required: true
        },

        onChangeSearch: {
            type: Function,
            required: false
        },

        searchValue: {
            type: String,
            required: false
        }

    },

    methods: {

    },

    components: {
        InputBox
    }

}


</script>

<style>

.title-section{
    display: flex;
    align-items: center;
    background-color: burlywood;
    border-radius: 10px;
}

.header-container {
    position: sticky;
    top: 0;
}
</style>