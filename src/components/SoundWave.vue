<template>
    <canvas></canvas>
</template>
<style>
    canvas {
        width: 100%;
        height: 100%;
    }
</style>
<script>
    export default {
      name: 'sound-wave',
      props: {
        audioBuffer: {},
        rate: {
          type: Number,
          default: () => 44100
        }
      },
      data() {
        return {rect:null}
      },
      watch: {
        audioBuffer() {
          this.resize()
          this.draw()
        }
      },

      methods: {
        resize() {
          const rect = this.rect = this.$el.getBoundingClientRect()
          console.log(rect.width)
          this.$el.width = rect.width * 2
          this.$el.height = rect.height * 2
        },

        draw() {
          const audioBuffer = this.audioBuffer
          const bufferFl32 = new Float32Array(audioBuffer.length)
          const msec = Math.floor(Math.pow(10, -3) * this.rate)
          const leng = bufferFl32.length
          bufferFl32.set(audioBuffer.getChannelData(0));
          const w = this.rect.width * 2
          const h = this.rect.height * 2
          const canvasCtx = this.$el.getContext('2d')
          canvasCtx.moveTo(bufferFl32[0].x, bufferFl32[0].y);
          for (let idx = 1; idx < leng; idx++) {
            if (idx % msec === 0) {
              const x = w * (idx / leng)
              const y = (1 - bufferFl32[idx]) / 2 * h
              canvasCtx.lineTo(x, y);
            }
          }

          canvasCtx.strokeStyle = '#6cc7ff';
          canvasCtx.stroke();
        }
      }

    }
</script>
