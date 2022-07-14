<template>
  <div class="wave">
    <v-footer class="wave">
      <p>20 Lower Long Street</p>
      <p>Riversdale (Located on the Garden Route)</p>
      <p>Western Cape</p>
      <p>South Africa</p>
      <p class="copy">Made with love @ C-A-S-H EVENTS</p>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.wave {
  height: 90px;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  bottom: 0;
  width: 100%;
}

.copy {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
