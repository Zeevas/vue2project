<template>
  <div class="home">
    <div class="characters-list">
       <character-block 
          v-for="character in characters" 
          :key="character.id"
          :character="character" 
        />
    </div>
   
       
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
