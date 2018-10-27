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

class Social {
    initializer(){}

    share(friendName){
        console.log(friendName + " shares " + this.title);
    }

    like(friendName){
        console.log(friendName + " likes " + this.title);
    }
}

var mixinClasses = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args)
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}

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

class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


class Logger {
    constructor(){}
    
    log(info) {
        console.log(info);
    }
}

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


