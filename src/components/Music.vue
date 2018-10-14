
<template lang="pug">
.music
  .controler
    button(@click="player.play()") play
    button(@click="player.pause()") pause
    button(@click="player.stop()") stop
    p {{player.time}}
    p {{player.duration}}
  .timeline
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
    barStyle() {
      return {
        width: this.player.time / this.player.duration * 100 + '%'
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
    height 80px
    margin-top 20px
    background rgba(0,0,0,0.1)
    overflow hidden
    position relative
    .bar
      position absolute
      left 0
      top 0
      height 100%
      background rgba(0,0,0,0.1)
      pointer-events none
    .wave
        position absolute
        left 0
        width 100%
        top 0
        height 100%
</style>
