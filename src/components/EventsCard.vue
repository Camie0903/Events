<template>
    <div class="col-md-3">
    <router-link :to="{ name: 'oneCard', params: { id: event.id } }">
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="event.Img" class="img-fluid" />
        <div class="card-body">
          <p class="card-text">{{ event.Title }}</p>
          <p class="card-text">{{ event.Date }}</p>
          <p class="card-text">{{ event.Type }}</p>
          <p class="card-text">{{ event.Description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
    export default {
        props: ["event"],
    };
    

</script>
<style>
.img-fluid {
  width: 18rem;
  height: 15rem;
  border-radius: 5px;
  transition: 0.2 linear;
}
.img-fluid:hover {
  transform: scale(1.1);
}
</style>