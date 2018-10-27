
class Movie extends EventEmitter {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
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
}

class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class EventEmitter {
    constructor(){
        this.events = {};
    }

    on(eventName, callback){

        if(!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName, data) {
        const event = this.events[eventName];
        if( event ) {
            event.forEach(callback => {
            callback.call(null, data);
            });
        }
    }

    off(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
        }
    }
}

const mov1 = new Movie("Terminator", 1984, 108);
const mov2 = new Movie("Titanic", 1997, 195);

