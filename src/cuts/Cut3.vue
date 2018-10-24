<template lang="pug">
transition
  .v2__loading(:class='{enter: enter}')
    div
</template>

<script>
export default {
  name: 'V2Loading',
  data() {
    return {
      enter: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.enter = false
    }, 100)
  }
}
</script>

<style lang="stylus">
.v2__loading
  width 100%
  height 100%
  background-color rgba(255,255,255,1)
  z-index 100000
  align-items center
  align-content center
  justify-content center
  position fixed
  perspective 300px
  transition 0s linear
  div
    width 14px
    height 140px
    border-radius 3px
    background linear-gradient(0deg, #f05, #f94cff)
    transition 0.4s cubic-bezier(0.4, 0.4, 0, 1)
    transform rotate(45deg)
  &.enter
    background-color rgba(255,255,255,0)
    div
      transform rotate(45deg) scale(1, 0.5)
      opacity 0
  &.v-leave-active 
    transition 0.6s linear
    div
      transition 0.6s cubic-bezier(0.4, 0.4, 0, 1)
  &.v-leave-to
    background-color rgba(255,255,255,0)
    div
      transform rotate(45deg) scale(1.8)
      opacity 0
</style>
