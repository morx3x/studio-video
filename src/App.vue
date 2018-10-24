<template lang="pug">
#app
  Editor(msg="Welcome to Your Vue.js App")
</template>

<script>
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  components: {
    Editor
  }
}
</script>

<style lang="stylus">
// html
// body
//   overflow hidden
*
  padding 0
  margin 0

#app
  font-family "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #000

.cut
  position absolute
  width 100%
  height 100%
  display flex
  align-items center
  align-content center
  justify-content center
  h1
    font-size 172px
    letter-spacing -4px
    color #000
    font-weight 900
</style>
