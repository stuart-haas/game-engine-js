import Seeker from "../entity/seeker";
import Coin from "../entity/coin";
import Vector from '../math/vector';

class Spawner {
    constructor(game) {
        this.game = game;
        this.width = this.game.canvas.width;
        this.height = this.game.canvas.height;
        this.inverseSpawnChance = 100;
    }

    update(target) {
        if(this.game.entities.length == 10) return;
        if (Math.floor(Math.random() * this.inverseSpawnChance) == 0)
            this.game.addEntity(new Coin(this.getPos(target)));

        if (this.inverseSpawnChance > 20)
            this.inverseSpawnChance -= 0.005;
    }

    getPos(target) {
		let pos = null;
		do {
			pos = new Vector(Math.random() * this.width, Math.random() * this.height);
		}
		while(pos.distSq(target) < 5 * 5);
		return pos;
	}
}

export {Spawner as default}