<template>
    <div class="m-20 mb-5 flex items-center justify-center w-full gap-4 transition-colors">
        <input class="bg-gray-500 rounded-lg p-2 w-2/5 border-solid border-2 border-gray-800 placeholder:text-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.3)]" v-model="searchValue" type="text" id="search" placeholder="Please enter the city">
        <button class="bg-purple-500 p-2 rounded-lg font-medium text-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:bg-purple-400 duration-200" @click="atClick">Search</button>
    </div>
    <div v-if="!found" class="text-red-500">City not found</div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SearchBar",
        data () {
            return {
                searchValue: "",
                found: true,
            }
        },
        methods: {
            atClick(){
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.searchValue}&appid=${this.$store.state.APIKEY}&units=metric`)
                .then(res => {
                    this.found = true;
                    this.$store.state.searchResult.found = true;
                    this.$store.state.searchResult.name = res.data.name;
                    this.$store.state.searchResult.description = res.data.weather[0].main;
                    this.$store.state.searchResult.temp = res.data.main.temp;
                    this.$store.state.searchResult.found = true;
                    this.$store.state.searchResult.image = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
                    console.log(this.$store.state.searchResult);
                }).catch(err => {
                    this.found = false;
                    this.$store.state.searchResult.found = false;
                    console.log(err);
                });
            }
        },
        watch: {
            searchValue() {
                this.$store.commit("setSearchValue", this.searchValue);
            }
        }
    }
</script>