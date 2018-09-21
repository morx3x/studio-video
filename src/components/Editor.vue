
<template lang="pug">
.editor
  nav
  main
    .screen
  footer
    button(@click="play") play
    button(@click="pause") pause
    p {{time}}/{{duration}}
</template>

<script>
import music1 from '@/assets/music1.mp3'
export default {
  name: 'Editor',
  props: {
    msg: String
  },
  data() {
    return {
      audio: null,
      time: 0,
      duration: 0
    }
  },
  mounted() {
    this.audio = new Audio()
    this.audio.src = music1
    this.audio.volume = 1
    this.audio.load()
  },
  methods: {
    play() {
      this.audio.play()
      this.timer()
    },
    pause() {
      this.audio.pause()
    },
    timer() {
      this.time = this.audio.currentTime
      this.duration = this.audio.duration
      requestAnimationFrame(() => {
        if (!this.audio.paused) this.timer()
      })
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
  main
    grid-area main
    background rgba(0,0,0,0.05)
    display flex
    align-items center
    align-content center
    justify-content center
    overflow hidden
    .screen
      width 960px
      height 540px
      background #fff
      box-shadow 0 0 10px rgba(0,0,0,0.1)
  footer
    grid-area footer
    border-top 1px solid rgba(0,0,0,0.08)
</style>
