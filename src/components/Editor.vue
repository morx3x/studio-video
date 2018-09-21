
<template lang="pug">
.editor
  header
  .cuts
  main
  footer
</template>

<script>
export default {
  name: "Editor",
  props: {
    msg: String
  }
};
</script>

<style lang="stylus" scoped>
.editor
  display grid
  width 100vw
  height 100vh
  grid-template-areas "header header" "cuts main" "cuts footer"
  grid-template-columns 240px 1fr
  grid-template-rows 60px 1fr 180px
  header
    grid-area header
    box-shadow 0 0 10px rgba(0,0,0,0.1)
    background #fff
  .cuts
    grid-area cuts
  main
    grid-area main
    background rgba(0,0,0,0.05)
  footer
    grid-area footer
</style>
