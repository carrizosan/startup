
import Movie from 'models/movie.js';
import Logger from 'models/logger.js';
import Actor from 'models/actor.js';

const mov1 = new Movie("Terminator", 1984, 108);
const mov2 = new Movie("Titanic", 1997, 195);

const arnold = new Actor('Arnold Schwarzenegger', 50);
const titanicActors = [
    new Actor('Leonardo DiCaprio', 50),
    new Actor('Kate Winslet', 50),
    new Actor('Billy Zane', 50)
];

const logger = new Logger();

mov1.on("play", movie => {
    logger.log("The 'play' event has been emitted on " + movie.title + " movie");
})

mov1.on("pause", movie => {
    logger.log("The 'pause' event has been emitted on " + movie.title + " movie");
})

mov1.on("resume", movie => {
    logger.log("The 'resume' event has been emitted on " + movie.title + " movie");
})

mov1.play();
mov1.pause();
mov1.resume();

mov1.addCast(arnold);
mov2.addCast(titanicActors);

mov1.share("Santiago");
mov2.like("Carrizo");


