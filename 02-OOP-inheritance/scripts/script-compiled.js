"use strict";

var _movie = _interopRequireDefault(require("models/movie.js"));

var _logger = _interopRequireDefault(require("models/logger.js"));

var _actor = _interopRequireDefault(require("models/actor.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mov1 = new _movie.default("Terminator", 1984, 108);
const mov2 = new _movie.default("Titanic", 1997, 195);
const arnold = new _actor.default('Arnold Schwarzenegger', 50);
const titanicActors = [new _actor.default('Leonardo DiCaprio', 50), new _actor.default('Kate Winslet', 50), new _actor.default('Billy Zane', 50)];
const logger = new _logger.default();
mov1.on("play", movie => {
  logger.log("The 'play' event has been emitted on " + movie.title + " movie");
});
mov1.on("pause", movie => {
  logger.log("The 'pause' event has been emitted on " + movie.title + " movie");
});
mov1.on("resume", movie => {
  logger.log("The 'resume' event has been emitted on " + movie.title + " movie");
});
mov1.play();
mov1.pause();
mov1.resume();
mov1.addCast(arnold);
mov2.addCast(titanicActors);
mov1.share("Santiago");
mov2.like("Carrizo");
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}

var _default = Actor;
exports.default = _default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  emit(eventName, data) {
    const event = this.events[eventName];

    if (event) {
      event.forEach(callback => {
        callback.call(null, data);
      });
    }
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
    }
  }

}

var _default = EventEmitter;
exports.default = _default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Logger {
  constructor() {}

  log(info) {
    console.log(info);
  }

}

var _default = Logger;
exports.default = _default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.match");

require("core-js/modules/web.dom.iterable");

var mixinClasses = (baseClass, ...mixins) => {
  let base = class _Combined extends baseClass {
    constructor(...args) {
      super(...args);
      mixins.forEach(mixin => {
        mixin.prototype.initializer.call(this);
      });
    }

  };

  let copyProps = (target, source) => {
    Object.getOwnPropertyNames(source).concat(Object.getOwnPropertySymbols(source)).forEach(prop => {
      if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) return;
      Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
    });
  };

  mixins.forEach(mixin => {
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });
  return base;
};

var _default = mixinClasses;
exports.default = _default;
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Social {
  initializer() {}

  share(friendName) {
    console.log(friendName + " shares " + this.title);
  }

  like(friendName) {
    console.log(friendName + " likes " + this.title);
  }

}

var _default = Social;
exports.default = _default;
