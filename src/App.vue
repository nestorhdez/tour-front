<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
  components: {
  },
});
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #2c3e50;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f7fa;
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
}
</style>
