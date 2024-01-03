<template>

    <div class="header-container">
        <div class="title-section">
            <div class="logo-section">
                <h1>{{ title }}</h1>
                <i style="font-size:36px" class="fa fa-film"></i>
            </div>
            <!-- <InputBox v-if="onChangeSearch" placeholder="Search" :value="searchValue" :onChange="onChangeSearch"/> -->
            <searchable-dropDown 
                v-if="onChangeSearch"
                placeholder="Search Movie"
                :value="searchValue"
                :changeSeachInput="changeSeachInputForValue"
                :options="searchOptions"
                @onChangeOption="onChangeSearch"
            />
        </div>

        <div v-if="!user.loginId" class="signin-container">
            <div class="user-action" tabindex="0" @click="signinToggle">Sign In</div>
            <div class="user-action" tabindex="0"  @click="signupToggle">Sign Up</div>
        </div>

        <div v-else class="signin-container">
            <div :title="`id:${user.loginId},mobile:${user.mobile}`">{{ user.loginId }}</div>
            <div class="user-action" tabindex="0"  @click="onClickLogOut">Logout</div>
        </div>

        <sign-up v-if="signUpModalVisible" :onCloseModel="signupToggle" />
        <sign-in v-if="signInModalVisible" :onCloseModel="signinToggle" :operatorSignup="signupToggle"/>

    </div>

</template>

<script>
// import InputBox from '../Input/InputBox.vue'
import SearchableDropDown from '../SearchableDropDown/SearchableDropDown.vue'
import SignUp from '../SignUp/Signup.vue'
import SignIn from '../SignInModal/SignIn.vue'
import { mapGetters } from 'vuex';

export default {

    name: 'HeaderComponent',

    props: {

        title: {
            type: String,
            required: true
        },

        onChangeSearch: {
            type: Function
        },

        searchValue: {
            type: String
        },

        searchOptions: {
            type: Array
        },

        changeSeachInputForValue: {
            type: Function
        }

    },

    data() {
        return {
            signUpModalVisible: false,
            signInModalVisible: false
        }
    },

    methods: {
        onClickLogOut() {
            this.$store.dispatch('setUser', {});
            this.$router.push({ name: 'HomePage' });
            // localStorage.setItem('user',JSON.stringify({}));
        },

        signinToggle(val = true) {
            this.signInModalVisible = val
        },

        signupToggle(val = true) {
            this.signUpModalVisible = val
        }
    },

    computed: {
        ...mapGetters({
            user: 'user'
        })
    },

    components: {
        // InputBox,
        SearchableDropDown,
        SignUp,
        SignIn
    }

}


</script>

<style>

.title-section{
    display: flex;
    align-items: center;
    gap: 20px;
}

.user-action {
    cursor: pointer;
}

.header-container {
    position: sticky;
    top: 0;
    background-color: burlywood;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logout-btn {
    color: blue;
}

.logo-section {
    display: flex;
    justify-content: center;
    align-items: center;
}

.signin-container {
    display: flex;
    gap: 20px;
}

.user-section {
    display: flex;
    column-gap: 10px;
    margin: 5px;
}
</style>