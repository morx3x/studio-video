
<template lang="pug">
transition
  .StudioText
    h1 STUDIO
</template>

<script>
export default {
  name: 'StudioText'
}
</script>

<style lang="stylus" scoped>
.StudioText
  position absolute
  width 100%
  height 100%
  display flex
  align-items center
  align-content center
  justify-content center
  &.v-enter
    h1
      transform scale(1)
      // letter-spacing -4px
      // font-size 149px
  &.v-enter-active
    transition 3.6s cubic-bezier(0.13, 0.52, 0.2, 1.01)
    h1
      transition 3.6s cubic-bezier(0.13, 0.52, 0.2, 1.01)
  h1
    font-size 160px
    letter-spacing -2px
    color #000
    font-weight 900
    transform scale(0.9)
    transform-origin center
    
</style>
