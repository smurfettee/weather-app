<template>
    <div class="hover:bg-gray-400 rounded-xl p-2 cursor-pointer">{{ city }}</div>
</template>

<script>
    export default {
        name: "CityBar",
        props: {
            city: String,
        }
    }
</script>