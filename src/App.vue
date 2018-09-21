<template lang="pug">
#app
  Editor(msg="Welcome to Your Vue.js App")
</template>

<script>
import Editor from "./components/Editor.vue";

export default {
  name: "app",
  components: {
    Editor
  }
};
</script>

<style lang="stylus">
html
body
  overflow hidden
*
  padding 0
  margin 0

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
