'use strict';

class Social {
    initializer(){}

    share(friendName){
        console.log(friendName + " shares " + this.title);
    }

    like(friendName){
        console.log(friendName + " likes " + this.title);
    }
}
export default Social;