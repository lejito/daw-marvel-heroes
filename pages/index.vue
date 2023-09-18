<template>
	<div class="heroes">
		<div class="hero" v-for="hero in heroes" :key="hero.id">
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
</template>


<script setup>
import axios from 'axios';
import md5 from 'md5';

onBeforeMount(() => {
	loadHeroes();
});

const heroes = ref([]);

const loadHeroes = async () => {
	const timestamp = new Date().getTime();
	const publicKey = "9386e28bb9f2c1907aaae18153ac5ea0";
	const privateKey = "7f2800e7f17ea65a7b81de97708ea05737a02714";
	const hash = md5(timestamp + privateKey + publicKey);
	const url = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
	console.log(url);

	await axios.get(url)
	.then((res) => {
		console.log(res.data);
		heroes.value = res.data.data.results;
	})
	.catch((err) => {
		console.log(err);
	})
}
</script>