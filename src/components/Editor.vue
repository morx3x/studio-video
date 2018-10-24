
<template lang="pug">
.editor
  nav
    .cut-container(
      v-for="(cut, i) in cuts"
      :class="{focus: cutIndex === i}"
      @mousedown="cutIndex = i"
    )
      .inner
        component(:is="cut.name")
  main
    .buttons
      button(@click="screen.scale = 0.5") × 0.5
      button(@click="screen.scale = 0.75") × 0.75
      button(@click="screen.scale = 1") × 1
    Screen(:screen="screen")
      component(:is="cuts[cutIndex].name")
  footer
    Music(:player="player", :cuts="cuts")
</template>

<script>
import Music from './Music.vue'
import Screen from './Screen.vue'

import Cut1 from '../cuts/Cut1.vue'
import Cut2 from '../cuts/Cut2.vue'
import Cut3 from '../cuts/Cut3.vue'
import Cut4 from '../cuts/Cut4.vue'
import Cut5 from '../cuts/Cut5.vue'
import Cut6 from '../cuts/Cut6.vue'
import Cut7 from '../cuts/Cut7.vue'
import Cut8 from '../cuts/Cut8.vue'
import Cut9 from '../cuts/Cut9.vue'
import Cut10 from '../cuts/Cut10.vue'

export default {
  name: 'Editor',
  components: {
    Music,
    Screen,
    Cut1,
    Cut2,
    Cut3,
    Cut4,
    Cut5,
    Cut6,
    Cut7,
    Cut8,
    Cut9,
    Cut10
  },
  data() {
    return {
      cuts: [
        { name: 'Cut1', time: 0 },
        { name: 'Cut3', time: 0.9 },
        { name: 'Cut4', time: 1.9 },
        { name: 'Cut5', time: 2.9 },
        { name: 'Cut1', time: 3.9 },
        { name: 'Cut3', time: 4.9 },
        { name: 'Cut4', time: 5.9 },
        { name: 'Cut5', time: 6.9 },
        { name: 'Cut1', time: 7.9 },
        { name: 'Cut3', time: 8.9 },
        { name: 'Cut1', time: 9.9 },
        { name: 'Cut5', time: 10.9 },
        { name: 'Cut1', time: 11.9 },
        { name: 'Cut5', time: 12.9 },
        { name: 'Cut1', time: 13.9 },
        { name: 'Cut4', time: 14.1 },
        { name: 'Cut5', time: 14.2 },
        { name: 'Cut4', time: 14.3 },
        { name: 'Cut5', time: 14.4 },
        { name: 'Cut3', time: 14.5 },
        { name: 'Cut4', time: 14.6 },
        { name: 'Cut5', time: 14.7 },
        { name: 'Cut3', time: 14.8 },
        { name: 'Cut4', time: 14.9 },
        { name: 'Cut3', time: 15.0 },
        { name: 'Cut4', time: 15.1 },
        { name: 'Cut5', time: 15.2 },
        { name: 'Cut4', time: 15.3 },
        { name: 'Cut5', time: 15.4 },
        { name: 'Cut3', time: 15.5 },
        { name: 'Cut4', time: 15.6 },
        { name: 'Cut5', time: 15.7 },
        { name: 'Cut3', time: 15.8 },
        { name: 'Cut4', time: 15.9 },
        { name: 'Cut5', time: 15.95 },
        { name: 'Cut3', time: 15.97 },
        { name: 'Cut4', time: 16 },
        { name: 'Cut5', time: 16.06 },
        { name: 'Cut1', time: 16.12 }
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
