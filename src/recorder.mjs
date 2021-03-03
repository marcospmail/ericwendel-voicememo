class Recorder {
  constructor() {
    this.audioType = 'audio/webm;codecs=opus'
    this.mediaRecorder = {}

    this.recordBlobs = []
  }

  _setup() {
    const options = { mimeType: this.audioType }
    const isSupported = MediaRecorder.isTypeSupported(options.mimeType)
    if (!isSupported) {
      const msg = `the coded ${options.mimeType} isnt supported!!`
      alert(msg)

      throw new Error(msg)
    }

    return options
  }

  startRecording(stream) {
    const options = this._setup()
    this.mediaRecorder = new MediaRecorder(stream, options)

    this.mediaRecorder.onstop = event => {
      console.log('Recorded blobs', this.recordBlobs)
    }

    this.mediaRecorder.ondataavailable = event => {
      if (!event.data || !event.data.size) return

      this.recordBlobs.push(event.data)
    }

    this.mediaRecorder.start()
    console.log(this.mediaRecorder)
  }

  async stopRecording() {
    if (this.mediaRecorder.state === 'inactive') return

    this.mediaRecorder.stop()
  }

  getRecordingURL() {
    const blob = new Blob(this.recordBlobs, { type: this.audioType })
    return window.URL.createObjectURL(blob)
  }
}

export default Recorder