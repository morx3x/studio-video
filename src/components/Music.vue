
<template lang="pug">
.music
  .controler
    button(@click="player.play()") play
    button(@click="player.pause()") pause
    button(@click="player.stop()") stop
    p {{player.time}}
    p {{player.duration}}
  .timeline(:style="timelineStyle")
    sound-wave(:audio-buffer="player.audioBuffer")
    .bar(:style="barStyle")
</template>

<script>
// import music1 from '@/assets/music1.mp3'
import music2 from '@/assets/music2.mp3'
import SoundWave from './SoundWave.vue'

export default {
  name: 'Music',
  components: {SoundWave},
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
    position relative
    .bar
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      background rgba(0,0,0,0.1)
      pointer-events none
    .wave
        position absolute
        left 0
        width 100%
        top 0
        height 100%
</style>
