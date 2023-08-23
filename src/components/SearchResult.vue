<template>
    <div v-if="data.found" class="flex items-center justify-center w-2/5 shadow-[0_0_10px_rgba(0,0,0,0.3)] justify-between p-8 bg-gray-600 rounded-xl text-white m-10">
        <div class="flex gap-5 items-center justify-center">
            <img v-bind:src="data.image" alt="Image not found.">
            <div class="text-xl">{{ data.name }}</div>
        </div>
        <div class="flex gap-5 text-xl items-center justify-center">
            <div>{{ data.description }}</div>
            <div class="font-medium">{{ data.temp }}°C</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchResult",
        data() {
            return {
                data: this.$store.state.searchResult,
            }
        }
    }
</script>