<template>
  <div id="nav">
  </div>
  <router-view />
</template>
<script>
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
export default {
  mounted() {
    M.AutoInit();
  },
};
</script>
<style lang="scss">
</style>
