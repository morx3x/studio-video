
<template lang="pug">
transition
  .cut1
    i
</template>

<script>
export default {
  name: 'Cut1',
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.cut1
  position absolute
  width 100%
  height 100%
  display flex
  align-items center
  align-content center
  justify-content center
  // background #000
  &.v-leave-to
    // opacity 0
    i
      transform scale(0) rotate(1000deg)
  &.v-leave-active
    transition 0.0s cubic-bezier(0.4, 0.4, 0, 1)
    i
       transition 0.0s cubic-bezier(0.4, 0.4, 0, 1)
  i
    width 200px
    height 200px
    background-size cover
    background-image url('~@/assets/i-32-studio-icon.svg')
</style>
