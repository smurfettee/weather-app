import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        searchValue: "",
        APIKEY: "ae1e5bdab21107b11fb9d7c159cef4db",
        searchResult: {
          name: "",
          description: "",
          temp: "",
          found: false,
          image: "",
        },
      }
    },
    mutations: {
      setSearchValue (state, data) {
        state.searchValue = data;
        //console.log(state.searchValue);
      }
    }
})

export default store;