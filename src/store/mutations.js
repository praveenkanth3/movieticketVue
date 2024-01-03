export const mutations = {
    setSelectedMovie(state, payload) {
        state.movie = payload;
    },

    setBookedTickets(state, { movie , seats, gender}) {
        console.log(movie, seats);
        // state.ticketsDetails = {...state.ticketsDetails, [movie]: [...state.ticketsDetails?.[movie] || [],...seats]}
        state.ticketsDetails = {...state.ticketsDetails, [movie]: { ...state.ticketsDetails?.[movie] || {}, [gender]:[...state.ticketsDetails?.[movie]?.[gender] || [],...seats] }}
        console.log(state.ticketsDetails);
    },

    setUser(state,payload) {
        state.user = payload;
    },

    setSelectedTickets(state,payload) {
        state.selectedTicket = payload;
    },

    setAllUsers(state,payload){
        state.allUsers = payload
    }
}