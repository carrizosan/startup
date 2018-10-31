'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventEmitter = _interopRequireDefault(require("../models/eventEmitter.js"));

var _social = _interopRequireDefault(require("../models/social.js"));

var _mixinClasses = _interopRequireDefault(require("../models/mixinClasses.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Movie extends (0, _mixinClasses.default)(_eventEmitter.default, _social.default) {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  play() {
    this.emit("play", this);
  }

  pause() {
    this.emit("pause", this);
  }

  resume() {
    this.emit("resume", this);
  }

  addCast(...cast) {
    if (Array.isArray(cast)) {
      this.cast.push(...cast); // add all params to array
    } else {
      this.cast.push(cast);
    }
  }

}

var _default = Movie;
exports.default = _default;