<template>
	<div class="bg-gray-700 h-screen">
		<div class="h-1/6 flex items-center justify-center text-3xl font-medium text-purple-400 drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]">Weather App</div>
		<div class="flex flex-col items-center h-5/6">
			<SearchBar/>
			<SearchResult/>
		</div>
	</div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import SearchResult from '../components/SearchResult.vue';

	export default {
    name: "HomeView",
    components: {SearchBar, SearchResult},
    
}
</script>