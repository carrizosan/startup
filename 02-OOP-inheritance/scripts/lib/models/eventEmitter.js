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