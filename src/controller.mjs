class Controller {
  constructor({ view, media, recorder }) {
    this.view = view
    this.media = media
    this.recorder = recorder
  }

  static initialize(deps) {
    const instance = new Controller(deps)

    return instance._init()
  }

  _init() {
    this.view.configureStartRecordingButton(this.onStartRecording.bind(this))
    this.view.configureStopRecordingButton(this.onStopRecording.bind(this))
  }

  async onStartRecording() {
    const audioStream = await this.media.getAudio()
    this.recorder.startRecording(audioStream)
  }

  async onStopRecording() {
    console.log('caiu')
    this.recorder.stopRecording()

    setTimeout(() => {
      const audioURL = this.recorder.getRecordingURL()
      this.view.playAudio(audioURL)
    })
  }

}

export default Controller