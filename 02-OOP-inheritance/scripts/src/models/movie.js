'use strict';
import EventEmitter from '../models/eventEmitter.js';
import Social from '../models/social.js';
import mixinClasses from '../models/mixinClasses.js';

class Movie extends mixinClasses(EventEmitter, Social) {
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

    addCast(...cast){
        if(Array.isArray(cast)){
            this.cast.push(...cast); // add all params to array
        }else {
            this.cast.push(cast);
        }
    }
}
export default Movie;