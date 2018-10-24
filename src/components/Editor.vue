
<template lang="pug">
.editor
  nav
    .cut-container(
      v-for="(cut, i) in cuts"
      :class="{focus: cutIndex === i}"
      @mousedown="cutIndex = i"
    )
      .inner
        component(:is="cut.name", :option="cut.option")
  main
    .buttons
      button(@click="screen.scale = 0.5") × 0.5
      button(@click="screen.scale = 0.75") × 0.75
      button(@click="screen.scale = 1") × 1
    Screen(:screen="screen")
      component(:is="cuts[cutIndex].name", :option="cuts[cutIndex].option")
  footer
    Music(:player="player", :cuts="cuts")
</template>

<script>
import Music from './Music.vue'
import Screen from './Screen.vue'

import Empty from '../cuts/Empty.vue'
import TextCut from '../cuts/TextCut.vue'
import StudioText from '../cuts/StudioText.vue'
import Cut2 from '../cuts/Cut2.vue'
import Cut3 from '../cuts/Cut3.vue'
import PdLoading from '../cuts/PdLoading.vue'

export default {
  name: 'Editor',
  components: {
    Music,
    Screen,
    Empty,
    TextCut,
    StudioText,
    Cut2,
    Cut3,
    PdLoading
  },
  data() {
    return {
      cuts: [
        { name: 'Empty', time: 0 },
        { name: 'TextCut', time: 0.9, option: { text: 'The' } },
        { name: 'TextCut', time: 2.4, option: { text: 'all' } },
        { name: 'TextCut', time: 3.15, option: { text: 'new' } },
        { name: 'StudioText', time: 3.85 },
        { name: 'Cut2', time: 7.4 },
        { name: 'PdLoading', time: 7.9 },
        { name: 'Empty', time: 15.4 }
      ],
      cutIndex: 0,
      player: {
        audio: null,
        time: 0,
        duration: 0
      },
      screen: {
        scale: 0.5
      }
    }
  },
  watch: {
    beat(val, oldVal) {
      this.cuts.forEach((c, i) => {
        if (oldVal < c.time && c.time < val) this.cutIndex = i
        if (c.time === val) this.cutIndex = i
      })
    }
  },
  mounted() {},
  computed: {
    beat() {
      return (this.player.time / 6) * 16.04
    }
  },
  methods: {
    next() {
      // this.cutIndex = (this.cutIndex + 1) % this.cuts.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.editor
  display grid
  width 100vw
  height 100vh
  grid-template-areas "nav main" "nav footer"
  grid-template-columns 240px 1fr
  grid-template-rows 1fr 180px
  nav
    grid-area nav
    border-right 1px solid rgba(0,0,0,0.08)
    padding 12px
    overflow-y scroll
    .cut-container
      width 192px
      height 108px
      overflow hidden
      margin 12px
      position relative
      user-selct none
      background #fff
      border 1px solid rgba(0,0,0,0.1)
      box-sizing border-box
      transition 0.3s cubic-bezier(0.4, 0.4, 0, 1)
      &.focus
        box-shadow 0 0 0 4px rgba(20,117,251,0.25)
      .inner
        position absolute
        left 0
        top 0
        width 1920px
        height 1080px
        transform-origin left top
        transform scale(0.1)
        pointer-events none
  main
    grid-area main
    background rgba(0,0,0,0.1)
    display flex
    align-items center
    align-content center
    justify-content center
    overflow hidden
    position relative
    .buttons
      position absolute 
      left 20px
      bottom 20px
      display flex
      z-index 100
      button
        padding 5px
        margin-right 10px
  footer
    grid-area footer
    border-top 1px solid rgba(0,0,0,0.08)
    padding 20px
</style>
