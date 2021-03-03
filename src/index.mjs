import View from "./view.mjs";
import Controller from "./controller.mjs";
import Media from "./media.mjs";
import Recorder from "./recorder.mjs";

const view = new View()
const media = new Media()
const recorder = new Recorder()

Controller.initialize({
  view,
  media,
  recorder
})