export class Frame {
  listeners = []
  playing = false
  start() {
    this.playing = true
    const start = () => {
      requestAnimationFrame(() => {
        this.listeners.forEach(listener => listener())
        if (this.playing) start()
      })
    }
    start()
  }

  stop() {
    this.playing = false
  }

  on(handler) {
    this.off(handler)
    this.listeners.push(handler)
  }
  off(handler) {
    this.listeners = this.listeners.filter(d => d !== handler)
  }
}

export default Frame
