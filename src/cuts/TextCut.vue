
<template lang="pug">
.TextCut
  h1 {{option.text}}
</template>

<script>
export default {
  name: 'TextCut',
  props: {
    option: Object
  }
}
</script>

<style lang="stylus" scoped>
.TextCut
  position absolute
  width 100%
  height 100%
  display flex
  align-items center
  align-content center
  justify-content center
  h1
    font-size 154px
    letter-spacing -4px
    color #000
    font-weight 900
</style>
