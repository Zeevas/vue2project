<template>
    <div class="character-block">
        <div class="character-block-image">
            <img :src="character.image" :alt="character.name">
        </div>
        <div class="character-block-info">
            <span @click="detailedInfo">
                {{character.name}}
            </span>    
            <span>
                {{character.status}} - {{character.species}}
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

        }
    },
    
    
    
};
</script>