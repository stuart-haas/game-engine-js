import Entity from '../entity/entity';
import SpriteSheet from '../sprite/spritesheet';
import Animation from '../sprite/animation';
import Art from '../sprite/Art';

class Coin extends Entity {
    constructor(pos) {
        super(pos);
        this.sprite = new SpriteSheet(Art.COIN, 32, 32);
        this.animation = new Animation(this, this.sprite, 5, 0, 7);
    }

    update() {
        this.animation.update();
    }

    render(ctx) {
        this.animation.render(ctx);
    }
}

export {Coin as default}