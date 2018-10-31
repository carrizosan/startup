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