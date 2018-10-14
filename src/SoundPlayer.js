import Frame from './Frame'
import loadSound from './loadSound'

export class SoundPlayer {
  audioBuffer
  stopTime = 0
  time = 0
  duration = 0
  constructor () {

    this.frame = new Frame()
    this.frame.on(this.update.bind(this))
    this.time = 0
    this.duration = 0
    this.reset()
  }


  reset() {
    this.context = new (window.AudioContext || window.webkitAudioContext)()
    this.analyser = this.context.createAnalyser();
    this.analyser.fftSize = 2048;
  }

  init() {
    this.source = this.context.createBufferSource()
    this.source.connect(this.context.destination);
    this.source.connect(this.analyser);
  }

  update() {
    this.time = this.context.currentTime
  }

  set src(url) {
    loadSound(url)
      .then((arrayBuffer) => {
        this.context.decodeAudioData(arrayBuffer, (audioBuffer) => {
          this.audioBuffer = audioBuffer;
          this.duration = this.audioBuffer.duration
        });
      })

  }

  play() {
    this.init()
    this.source.buffer = this.audioBuffer
    this.frame.start()
    this.source.start(0, this.stopTime)
  }

  pause() {
    this.stopTime = this.context.currentTime
    this.frame.stop()
    this.source.stop()
  }

  stop() {
    this.stopTime = 0
    this.frame.stop()
    this.source.stop()
    this.context.close()
    this.reset()
  }
}
