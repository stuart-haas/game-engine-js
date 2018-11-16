import Input from '../core/input';
import Key from '../core/key';
import Entity from '../entity/entity';
import SpriteSheet from '../sprite/spritesheet';
import Animation from '../sprite/animation';
import Art from '../sprite/Art';

class Player extends Entity {
    constructor() {
        super();
        this.input = new Input();
        this.sprite = new SpriteSheet(this, Art.PLAYER, 32, 32);
    }

    update() {
        if (this.input.isDown(Key.UP)) this.acc.y -= this.maxSpeed;
        if (this.input.isDown(Key.LEFT)) this.acc.x -= this.maxSpeed;
        if (this.input.isDown(Key.DOWN)) this.acc.y += this.maxSpeed;
        if (this.input.isDown(Key.RIGHT)) this.acc.x += this.maxSpeed;

        super.update();
    }

    render(ctx) {
        this.sprite.render(ctx);
    }
}

export {Player as default}