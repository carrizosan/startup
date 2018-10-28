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