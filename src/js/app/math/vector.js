class Vector{
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    subtract(vector) {
        this.x -= vector.x
        this.y -= vector.y;
        return this;
    }

    multiply(value) {
        return new Vector(this.x *= value, this.y *= value);
    }

    divide(value) {
        return new Vector(this.x /= value, this.y /= value);
    }

    distSq(vector){
		let dx = vector.x - this.x;
		let dy = vector.y - this.y;
		return dx * dx + dy * dy;
	}

    normalize() {
		if (this.getLength() != 0){
			this.x /= this.getLength();
			this.y /= this.getLength();
		}
		return this;
	}
    
    getLength() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    getAngle() {
        return Math.atan2(this.y, this.x);
    }

    clone() {
        return new Vector(this.x, this.y);
    }

    static fromAngle(angle, magnitude) {
        return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
    }
}

export {Vector as default}