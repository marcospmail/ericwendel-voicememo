class Media {
  async getAudio() {
    return navigator.mediaDevices.getUserMedia({
      audio: true
    })
  }
}

export default Media