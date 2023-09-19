<template>
	<div class="heroes">
		<div class="hero" v-for="hero in heroes.slice(0, 50)" :key="hero.id" @click="visualizeHero(hero.id)">
			<div class="hero__container-img">
				<img :src="hero.thumbnail.path + '.' + hero.thumbnail.extension" alt="hero.name" class="hero__img">
			</div>
			<div class="hero__info">
				<h3 class="hero__name">
					{{ hero.name }}
				</h3>
			</div>
		</div>
	</div>

	<div class="loading" v-if="areHeroesLoading">
		<span class="loading__text">Loading heroes...</span>
		<span class="loading__loader"></span>
	</div>

	<div class="noheroes" v-if="!areHeroesLoading && heroes.length === 0">
		<span class="noheroes__text">No heroes to show...</span>
	</div>

	<Dialog v-if="openDialog" :hero="dialogHero" @closeHeroDialog="closeHeroDialog" />
</template>


<script setup>
import axios from 'axios';
import md5 from 'md5';

onBeforeMount(() => {
	loadHeroes();
});

const heroes = ref([]);
const dialogHero = ref({});
const openDialog = ref(false);
const areHeroesLoading = ref(false);

const loadHeroes = async () => {
	areHeroesLoading.value = true;
	const timestamp = new Date().getTime();
	const publicKey = "9386e28bb9f2c1907aaae18153ac5ea0";
	const privateKey = "7f2800e7f17ea65a7b81de97708ea05737a02714";
	const hash = md5(timestamp + privateKey + publicKey);
	const limit = 100;
	const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`;

	await axios.get(url)
		.then((res) => {
			heroes.value = res.data.data.results.filter(hero => {
				return hero.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
			});
		})
		.catch((err) => {
			console.log(err);
		})
	areHeroesLoading.value = false;
}

const visualizeHero = (idHero) => {
	dialogHero.value = heroes.value.find(hero => hero.id == idHero);
	openDialog.value = true;
}

const closeHeroDialog = () => {
	openDialog.value = false;
}
</script>