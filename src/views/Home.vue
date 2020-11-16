<template>
  <div class="home">
    zalas
        <character-block v-for="character in characters" :key="character.id" />
  </div>
</template>

<script>

import CharacterBlock from '@/components/CharacterBlock.vue';

export default {
  name: 'home',
  components: {
  CharacterBlock
  },
  data() {
    return {
      currentPage: 1,
    }

  },
  created() {
    this.$store.dispatch('fetchCharacters',this.currentPage);
  },
  computed:{
    characters() {
      return this.$store.getters['getCharactersByPage'](this.currentPage);
    }
  }
}
</script>
