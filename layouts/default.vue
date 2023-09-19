<template>
	<div class="layout">
		<nav class="navbar">
			<a class="navbar__link" href=".">
				<img src="../deadpool.png" alt="Logo" class="navbar__img">
				<h1 class="navbar__title">
					{{ appTitle }}
				</h1>
			</a>

			<a href="http://marvel.com" target="_blank">Data provided by Marvel. © 2023 MARVEL</a>
		</nav>

		<main class="content">
			<slot />
		</main>
	</div>
</template>

<script setup>
const appTitle = 'Marvel Heroes!';
</script>