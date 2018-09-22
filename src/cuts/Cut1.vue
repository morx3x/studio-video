
<template lang="pug">
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
  p
    font-size 40px
  i
    width 128px
    height 128px
    background-size cover
    background-image url('~@/assets/i-32-studio-icon.svg')
</style>
