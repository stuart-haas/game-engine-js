import Vector from '../math/vector';

class Entity {
    constructor(pos, maxForce, maxSpeed, mass, damp, size, color) {
        this.pos = pos || new Vector();
        this.vel = new Vector();
        this.acc = new Vector();
        this.maxForce = maxForce || .25;
        this.maxSpeed = maxSpeed || 1;
        this.mass = mass || 100;
        this.damp = damp || .95
        this.size = size || 16;
        this.color = color || '#000';
    }

    update() {
        this.vel.add(this.acc);
        this.vel.multiply(this.damp);
        this.acc.divide(this.mass);
        this.pos.add(this.vel);
    }
}

export {Entity as default}