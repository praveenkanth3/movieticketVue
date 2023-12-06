export const actions = {
    setSelectedMovie({ commit },payload) {
        commit('setSelectedMovie',payload);
    },

    setBookedTickets({ commit }, payload) {
        commit('setBookedTickets',payload);
    },

    setUser({ commit }, payload) {
        commit('setUser', payload)
    }
};