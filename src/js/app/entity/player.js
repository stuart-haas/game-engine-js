import Shape from '../draw/shape';
import Input from '../core/input';
import Key from '../core/key';
import Entity from '../entity/entity';

class Player extends Entity {
    constructor() {
        super();
        this.input = new Input();
    }

    update() {
        if (this.input.isDown(Key.UP)) this.acc.y -= this.maxSpeed;
        if (this.input.isDown(Key.LEFT)) this.acc.x -= this.maxSpeed;
        if (this.input.isDown(Key.DOWN)) this.acc.y += this.maxSpeed;
        if (this.input.isDown(Key.RIGHT)) this.acc.x += this.maxSpeed;

        super.update();
    }

    render(ctx) {
        Shape.circle(ctx, this.pos, this.size, this.color);
    }
}

export {Player as default}