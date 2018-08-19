class Game{
    constructor() {

    }

    start() {
        this.clear();
        this.update();
        this.render();
        this.queue();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    update () {
        
    }
  
    render() {
        
    }
  
    queue() {
        window.requestAnimationFrame(this.start.bind(this));
    }
}

export {Game as default}