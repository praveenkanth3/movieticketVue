import Vue from "vue";
import Vuex from 'vuex';
import { actions } from "./actions";
import { mutations } from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        ticketsDetails: {},
        movie: {},
        user: {}
    },

    getters: {
        ticketsDetails: state => state.ticketsDetails,
        movie: state => state.movie,
        user: state => state.user

    },

    mutations,

    actions

});