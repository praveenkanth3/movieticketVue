export const mutations = {
    setSelectedMovie(state, payload) {
        state.movie = payload;
    },

    setBookedTickets(state, { movie , seats}) {
        console.log(movie, seats);
        state.ticketsDetails = {...state.ticketsDetails, [movie]: [...state.ticketsDetails?.[movie] || [],...seats]}
        console.log(state.ticketsDetails);
    }
}