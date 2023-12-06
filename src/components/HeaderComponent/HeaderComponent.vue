<template>

    <div class="header-container">
        <div class="title-section">
            <h1>{{ title }}</h1>
            <i style="font-size:36px" class="fa fa-film"></i>
            <InputBox v-if="onChangeSearch" placeholder="Search" :value="searchValue" :onChange="onChangeSearch"/>
        </div>
        <div class="user-section" v-if="user.name">
            <div>{{ user.name }}</div>
            <div class="logout-btn" tabindex="0" @click="onClickLogOut">Logout</div>
        </div>
    </div>

</template>

<script>
import InputBox from '../Input/InputBox.vue'
import { mapGetters } from 'vuex';

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
        onClickLogOut() {
            this.$store.dispatch('setUser', {});
            this.$router.push({ name: 'LandingPage' });
            localStorage.setItem('user',JSON.stringify({}));

        }
    },

    computed: {
        ...mapGetters({
            user: 'user'
        })
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
}

.header-container {
    position: sticky;
    top: 0;
    background-color: burlywood;
    border-radius: 10px;
}

.logout-btn {
    color: blue;
}

.user-section {
    display: flex;
    column-gap: 10px;
    margin: 5px;
}
</style>