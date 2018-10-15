
<template lang="pug">
.timeline2(:style="timelineStyle")
  .bar(:style="barStyle")
  .line(
    v-for="i in 16"
    :style="{left: `${(i - 1) * 60}px`}"
    :class="{done: i - 1 < beat % 16, bold: i % 4 === 1}"
  )
    .dots(
      v-for="k in 3"
      :style="{left: `${k * 15}px`}"
      :class="{done: i - 1 < beat % 16}"
    )
  p {{dispBeat}}
</template>

<script>
// import music1 from '@/assets/music1.mp3'
import music2 from '@/assets/music2.mp3'

export default {
  name: 'Timeline2',
  props: {
    player: Object
  },
  mounted() {
    this.player.audio = new Audio()
    this.player.audio.src = music2
    this.player.audio.volume = 1
    this.player.audio.load()
  },
  computed: {
    beat() {
      return (this.player.time / 6) * 16.04
    },
    dispBeat() {
      return Math.ceil(this.beat)
    },
    timelineStyle() {
      return {
        width: `${16 * 60}px`
      }
    },
    barStyle() {
      const x = ((this.beat % 16) - 16) * 60
      return {
        transform: `translateX(${x}px)`
      }
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.timeline2
  position relative
  width 1000px
  height 80px
  margin-top 20px
  background rgba(0,0,0,0.05)
  overflow hidden
  .bar
    position absolute
    bottom 0
    width 100%
    height 5px
    background rgba(0,0,0,0.4)
    pointer-events none
  .line
    position absolute
    top 0
    left 0
    width 1px
    height 100%
    background rgba(0,0,0,1)
    opacity 0.1
    &.done
      background rgba(0,0,0,1)
      opacity 0.3
    &.bold
      box-shadow 0 0 0 2px rgba(0,0,0,1)
    .dots
      position absolute
      width 2px
      height 2px
      background #000
      &.done
        background rgba(0,0,0,1)
        opacity 0.3
  p
    top 0
    left 0
    position absolute
</style>
