class Input {
    constructor() {
        this.pressed = {};

        window.onkeyup = this.onKeyup.bind(this);
        window.onkeydown = this.onKeydown.bind(this);
    }

    isDown(keyCode) {
        return this.pressed[keyCode];
    }
      
    onKeydown(event) {
        this.pressed[event.keyCode] = true;
    }
      
    onKeyup(event) {
        delete this.pressed[event.keyCode];
    }
}

export {Input as default}