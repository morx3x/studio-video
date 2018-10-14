
<template lang="pug">
.music
  .controler
    button(@click="player.play()") play
    button(@click="player.pause()") pause
    button(@click="player.stop()") stop
    p {{player.time}}
    p {{player.duration}}
  .timeline(:style="timelineStyle")
    .bar(:style="barStyle")
</template>

<script>
// import music1 from '@/assets/music1.mp3'
import music2 from '@/assets/music2.mp3'

export default {
  name: 'Music',
  props: {
    player: Object
  },
  mounted() {
    this.player.src = music2
  },
  computed: {
    timelineStyle() {
      return {
        width: `${this.player.duration * 10}px`
      }
    },
    barStyle() {
      return {
        transform: `translateX(${(this.player.time - this.player.duration) * 10}px)`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.music
  display flex
  flex-direction column
  .controler
    display flex
    button
      padding 0 5px
      margin-right 10px
    p
      width 80px
      text-align left
  .timeline
    width 1000px
    height 80px
    margin-top 20px
    background rgba(0,0,0,0.1)
    overflow hidden
    .bar
      width 100%
      height 80px
      background rgba(0,0,0,0.1)
      pointer-events none
</style>
