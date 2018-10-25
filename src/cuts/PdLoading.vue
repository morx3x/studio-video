<template lang="pug">
transition
  .pd__loading
    .icon
      .back
      .front
</template>

<script>
export default {
  name: 'PdLoading'
}
</script>

<style lang="stylus" scoped>
.pd__loading
  position absolute
  width 100%
  height 100%
  background-color rgba(255,255,255,1)
  z-index 1000
  position fixed
  display flex
  align-items center
  align-content center
  justify-content center
  perspective 300px
  transition 0.0s linear
  .icon
    width 24px
    height 240px
    position relative
    transition 0.6s cubic-bezier(0.4, 0.4, 0, 1)
    transform rotate(45deg)
    .back
      position absolute
      top 0
      left 0
      width 24px
      height 240px
      background #f1f1f1
      border-radius 7px
    .front
      position absolute
      bottom 0
      left 0
      width 24px
      height 240px
      background linear-gradient(0deg, #f05, #f94cff)
      clip rect(10px,24px,240px,0px)
      background-position bottom
      border-radius 7px
      transition 0.3s cubic-bezier(0.4, 0.4, 0, 1)
  &.v-enter
    .icon
      .front
        clip rect(240px,24px,240px,0px)
  &.v-enter-active
    .icon
      .front
        transition 4.0s cubic-bezier(.31,.13,0,1)
  &.v-leave-active
    transition 0.4s cubic-bezier(0.4, 0.4, 0, 1) 0.1s
    .icon
      transition 0.4s cubic-bezier(0.4, 0.4, 0, 1) 0.1s
      .front
        transition 0.3s cubic-bezier(0.4, 0.4, 0, 1)
  &.v-leave-to
    background-color rgba(255,255,255,0.0)
    .icon
      transform scale(2) rotate(45deg)
      opacity 0
      .front
        clip rect(0px,22px,320px,0px)
</style>
