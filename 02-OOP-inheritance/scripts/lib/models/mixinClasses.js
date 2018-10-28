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