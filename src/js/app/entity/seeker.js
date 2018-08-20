import Entity from '../entity/entity';
import Shape from '../draw/shape';

class Seeker extends Entity {
    constructor(pos, maxForce, seekThreshold, color) {
        super(pos, maxForce);
        this.seekThreshold = seekThreshold || 200;
        this.color = color || '#f00';
    }

    update(target) {
        this.distance = target.clone().subtract(this.pos);
        if(this.distance.getLength() > this.seekThreshold) {
            this.force = this.distance.normalize().multiply(this.maxForce);
            this.acc.add(this.force);
        }

        super.update();
    }

    render(ctx) {
        Shape.circle(ctx, this.pos, this.size, this.color);
    }
}

export {Seeker as default}