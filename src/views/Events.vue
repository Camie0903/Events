<template>
    <div class="row">
       <EventsCard
       v-for="event in Events"
       :key="event.id"
       :event="event"
       /> 
    </div>
</template>
<script>
import EventsCard from "../components/EventsCard.vue";
export default {
    components: {EventsCard},
    data(){
        return{
            Events: [],
        };
    },

    mounted() {
        fetch("http://localhost:3000/Events")
        .then((res)=> res.json())
        .then((data)=> (this.Events = data))
        .catch((err)=> console.log(err.message));
    },
};
</script>
<style>
    
</style>