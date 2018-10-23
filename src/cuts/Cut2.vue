
<template lang="pug">
transition
  .cut
    i
</template>

<script>
export default {
  name: 'Cut2',
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.cut
  // background #000
  // transition 0.4s cubic-bezier(0.4, 0.4, 0, 1)
  &.v-enter
    opacity 0
    i
      transform scale(0.1)
  &.v-leave-to
    opacity 0
    i
      transform scale(1.5)
  i
    width 128px
    height 128px
    background-size cover
    background-image url('~@/assets/i-32-studio-icon.svg')
    // transition 1.6s cubic-bezier(0.59, 0.15, 0.07, 1.01)
</style>
