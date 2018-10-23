
<template lang="pug">
.music
  .controler
    button(@click="play") play
    button(@click="pause") pause
    button(@click="stop") stop
    p {{player.time}}
    p {{player.duration}}
  //- .timeline(:style="timelineStyle")
    .bar(:style="barStyle")
  Timeline2(:player="player", :cuts="cuts")
</template>

<script>
import music1 from '@/assets/music1.mp3'
import music2 from '@/assets/music2.mp3'
import Timeline2 from './Timeline2'

export default {
  name: 'Music',
  components: {
    Timeline2
  },
  props: {
    player: Object,
    cuts: Array
  },
  mounted() {
    this.player.audio = new Audio()
    this.player.audio.src = music2
    this.player.audio.volume = 1
    this.player.audio.load()
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
  },
  methods: {
    play() {
      this.player.audio.play()
      this.update()
    },
    pause() {
      this.player.audio.pause()
    },
    stop() {
      this.player.audio.pause()
      this.player.audio.currentTime = 0
      this.update()
    },
    update() {
      this.player.time = this.player.audio.currentTime
      this.player.duration = this.player.audio.duration
      requestAnimationFrame(() => {
        if (!this.player.audio.paused) this.update()
      })
    },
    webAudioApi() {
      // console.log('?')
      // window.AudioContext = window.AudioContext || window.webkitAudioContext
      // const context = new window.AudioContext()
      // let source = context.createBufferSource()
      // let request = new XMLHttpRequest()
      // request.responseType = 'Arraybuffer'
      // request.onreadystatechange = () => {
      //   context.decodeAudioData(request.response, buffer => {
      //     source.buffer = buffer
      //     source.connect(context.destination)
      //     // source.start(0)
      //   })
      // }
      // request.open('GET', music1, true)
      // request.send()
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
