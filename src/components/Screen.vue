
<template lang="pug">
.screen(:style="screenStyle")
  slot
</template>

<script>
export default {
  name: 'Screen',
  props: {
    screen: Object
  },
  computed: {
    screenStyle() {
      return {
        transform: `scale(${this.screen.scale})`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.screen
  min-width 1920px
  min-height 1080px
  background #fff
  // box-shadow 0 0 10px rgba(0,0,0,0.1)
  position relative
  overflow hidden
  user-select none
  transition 0.5s cubic-bezier(0.4, 0.4, 0, 1)
</style>
