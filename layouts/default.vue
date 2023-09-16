<template>
	<v-layout class="rounded rounded-md">
		<v-app-bar title="Marvel Heroes!">
		</v-app-bar>
		<v-main class="align-center justify-center">
			<!-- slot: Carga el contenido de la página (pages/..) -->
			<slot />
		</v-main>
	</v-layout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Marvel&display=swap');

body {
	font-family: 'Marvel', sans-serif;
}
</style>

<script>
</script>