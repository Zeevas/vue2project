<template>
    <div class="character-block">
        <div class="character-block__image" @click="detailedInfo">
            <img :src="character.image" :alt="character.name">
        </div>
        <div class="character-block__info" @click="detailedInfo">
            <span class="characterName" >
                {{character.name}}
                
            </span>    
            
            <span v-if="character.status == 'Alive'" class="alive" >
                {{character.status}}  
            </span>  
            <span v-else-if="character.status == 'Dead'" class="dead" >
                {{character.status}}  
            </span>
            <span v-else class="unknown" >
                {{character.status}}  
            </span>
            <span>
                {{character.species}}
                </span> 
            <span>
                Last known location: {{character.location.name}}
            </span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'character-block',
    props: {
        character: {
            type: Object,
            required: true,
        }
    },
    methods: {
        detailedInfo() {
            this.$router.push({name: 'CharacterDetails', params: { id: this.character.id}});

        },
        
    },
    
    
    
};
</script>
