<template>
  <div class="dialog">
    <div class="dialog__card">
      <div class="dialog__header">
        <h2 class="dialog__title">{{ hero.name }}</h2>
      </div>

      <div class="dialog__content">
        <div class="dialog__left">
          <img :src="hero.thumbnail.path + '.' + hero.thumbnail.extension" :alt="hero.name" class="dialog__img">
        </div>

        <div class="dialog__right">
          <p class="dialog__description">
            {{ hero.description || 'No description to show...' }}
          </p>

          <div class="dialog__extra">
            <div class="dialog__statistics">
              <h3 class="statistics__title">Statistics</h3>
              <ul class="statistics__list">
                <li class="statistics__item">
                  <v-icon icon="mdi-thought-bubble" size="x-small"></v-icon>
                  <span>
                    <b>Number of comics:</b>
                    {{ hero.comics.available }}
                  </span>
                </li>
                <li class="statistics__item">
                  <v-icon icon="mdi-filmstrip-box" size="x-small"></v-icon>
                  <span>
                    <b>Number of series:</b>
                    {{ hero.series.available }}
                  </span>
                </li>
                <li class="statistics__item">
                  <v-icon icon="mdi-book-open-page-variant" size="x-small"></v-icon>
                  <span>
                    <b>Number of stories:</b>
                    {{ hero.stories.available }}
                  </span>
                </li>
                <li class="statistics__item">
                  <v-icon icon="mdi-calendar-star" size="x-small"></v-icon>
                  <span>
                    <b>Number of events:</b>
                    {{ hero.events.available }}
                  </span>
                </li>
              </ul>
            </div>

            <div class="dialog__series">
              <h3 class="series__title">Some series</h3>
              <ul class="series__list">
                <li class="series__item" v-for="(serie, index) in hero.series.items.slice(0,3)" :key="index">
                  <v-icon icon="mdi-star" size="x-small"></v-icon>
                  {{ serie.name }}
                </li>
                <span v-if="hero.series.items.length === 0">
                  No series to show...
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="dialog__footer">
        <button class="dialog__button" @click="closeDialog">Close</button>
      </div>
    </div>
  </div>
</template>


<script setup>
onBeforeMount(() => {
  hero.value = props.hero;
});

const props = defineProps({
  hero: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['closeHeroDialog']);

const hero = ref({});

const closeDialog = () => {
  emit('closeHeroDialog');
}
</script>