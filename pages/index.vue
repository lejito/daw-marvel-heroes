<template>
	<div class="heroes">
		<div class="hero" v-for="hero in heroes" :key="hero.id" @click="visualizeHero(hero.id)">
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

const loadHeroes = async () => {
	const timestamp = new Date().getTime();
	const publicKey = "9386e28bb9f2c1907aaae18153ac5ea0";
	const privateKey = "7f2800e7f17ea65a7b81de97708ea05737a02714";
	const hash = md5(timestamp + privateKey + publicKey);
	const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

	await axios.get(url)
	.then((res) => {
		heroes.value = res.data.data.results;
	})
	.catch((err) => {
		console.log(err);
	})
}

const visualizeHero = (idHero) => {
	dialogHero.value = heroes.value.find(hero => hero.id == idHero);
	openDialog.value = true;
}

const closeHeroDialog = () => {
	openDialog.value = false;
}
</script>