import Player from '../entity/player';
import Spawner from '../core/spawner';

class Game{
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.entities = [];
    }

    init() {
        this.player = new Player();
        this.spawner = new Spawner(this);
    }

    addEntity(entity) {
        this.entities.push(entity);
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
        this.player.update();
        this.spawner.update(this.player.pos);
        
        for(let i = 0; i < this.entities.length; i ++) {
            let entity = this.entities[i];
            entity.update(this.player.pos);
        }
    }
  
    render() {
        this.player.render(this.ctx);
        
        for(let i = 0; i < this.entities.length; i ++) {
            let entity = this.entities[i];
            entity.render(this.ctx);
        }
    }
  
    queue() {
        window.requestAnimationFrame(this.start.bind(this));
    }
}

export {Game as default}