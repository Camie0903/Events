<template>
    <div v-if="Events">
    <div v-for="Event of Events" :key="Event.ID">
    {{ Event.Title }}
    <img :src="Event.img"/> 
        </div>
    </div>
    <div v-else>Loading...</div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch("getEvents");
    },
    computed: {
        Events(){
          return  this.$store.state.Events;
        },
    },
};
</script>
<style>
    
</style>