
<template lang="pug">
.timeline2(:style="timelineStyle")
  .bar-base
    .bar(:style="barStyle")
  .line(
    v-for="i in 16"
    :style="{left: `${(i - 1) * 60}px`}"
    :class="{done: i - 1 < beat % 16, bold: i % 4 === 1}"
  )
    .dots(
      v-for="k in 4"
      :style="{left: `${(k - 1) * 15}px`}"
      :class="{done: i - 1 + k * 0.25 < beat % 16}"
    )
    p {{Math.round(i + beat - (beat % 16))}}
  .all
    div(v-for="i in 16")
      span(:style="{transform: `translateX(${Math.min(beat / 16 - (i - 1), 1) * 100}%)`}")
  label {{Math.ceil(this.beat)}}
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
    totalBeat() {
      return (this.player.duration / 6) * 16.04
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
  height 90px
  margin-top 20px
  margin-left 80px
  background rgba(0,0,0,0)
  // overflow-x hidden
  .bar-base
    position absolute
    bottom 0
    width 100%
    height 2px
    overflow hidden
    .bar
      position absolute
      bottom 0
      width 100%
      height 2px
      background rgba(20,117,251, 0.5)
      pointer-events none
  .line
    position absolute
    top 0
    left 0
    width 1px
    height 100%
    background rgba(0,0,0,0.15)
    &.done
      background rgb(20,117,251)
      p
        color rgb(20,117,251)
    &.bold
      left -1px
      width 3px
    p
      position absolute
      bottom 2px
      left 5px
      font-size 11px
      font-weight 700
      color rgba(0,0,0,0.2)
    .dots
      position absolute
      width 15px
      height 60px
      background rgba(0,0,0,0.05)
      border-right 1px solid rgba(0,0,0, 0.1)
      &.done
        background rgba(20,117,251, 0.2)
        border-right 1px solid rgba(20,117,251, 0.5)
        opacity 1
  .all
    position absolute
    left -80px
    height 100px
    width 70px
    div
      position relative
      width 100%
      height 4px
      margin-bottom 1px
      background rgba(0,0,0, 0.05)
      overflow hidden
      span
        position absolute
        left 0
        height 100%
        width 100%
        left -100%
        background rgba(20,117,251, 0.3)
  label
    bottom 0
    right 100%
    padding 0 10px
    position absolute
    color rgb(20,117,251)
    font-weight 700
    font-size 15px
    line-height 15px
    text-align right
</style>
