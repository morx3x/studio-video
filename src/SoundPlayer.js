function loadResource(src) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', src, true);
    xhr.onload = () => {
      resolve(xhr.response)
    };
    xhr.send();
  })
}

export class SoundPlayer {
  audioBuffer
  stopTime = 0
  constructor () {
    this.context = new (window.AudioContext || window.webkitAudioContext)()
    this.analyser = this.context.createAnalyser();
    this.analyser.fftSize = 2048;
    this.time = 0
    this.duration = 0
  }

  init() {
    this.source = this.context.createBufferSource()
    this.source.connect(this.context.destination);
    this.source.connect(this.analyser);
  }


  set src(url) {
    loadResource(url)
      .then((arrayBuffer) => {
        this.context.decodeAudioData(arrayBuffer, (audioBuffer) => {
          this.audioBuffer = audioBuffer;
        });
      })

  }

  play() {
    this.init()
    this.source.buffer = this.audioBuffer
    this.source.start(0, this.stopTime)
  }

  pause() {
    this.stopTime = this.context.currentTime
    this.source.stop()
  }

  stop() {
    this.stopTime = 0
    this.source.stop()
  }
}
