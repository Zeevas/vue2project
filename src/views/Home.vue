<template>
  <div class="home">
  <label class="label"> The Rick and Morty characters</label>
  
    <div class="characters-list">
      
       <character-block 
          v-for="character in characters" 
          :key="character.id"
          :character="character" 
        />
    </div>
    <paginate
      v-model="currentPage"
      :page-count="pages"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Previous'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'">
  </paginate>
   
       
  </div>
</template>

<script>

import CharacterBlock from '@/components/CharacterBlock.vue';
import Paginate from 'vuejs-paginate';



export default {
  name: 'home',
  components: {
  CharacterBlock,
  Paginate
  },
  data() {
    return {
      currentPage: 1,
    }

  },
  
  computed:{
    
    characters() {
      console.log(this.$store.getters['getCharactersByPage'](this.currentPage),'characters');
      return this.$store.getters['getCharactersByPage'](this.currentPage);
    },
    firstCharacter() {
      return this.$store.getters['getCharacterById']({id:1,page:1});
      
    },
    pages() {
      return this.$store.state.pages;
    }
  },
  watch: {
    currentPage: {
      handler(page) {
        this.$store.dispatch('fetchCharacters',page);
        
      },
      immediate:true
    },
    

  },
  methods: {
    clickCallback(pageNum) {
      console.log({pageNum});
      
    },
  },
}
</script>
