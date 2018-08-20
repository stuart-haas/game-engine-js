class Animation {
    constructor(parent, spritesheet, frameSpeed, startFrame, endFrame) {
        this.parent = parent;
        this.spritesheet = spritesheet;
        this.frameSpeed = frameSpeed;
        this.startFrame = startFrame;
        this.endFrame = endFrame;

        this.animationSequence = []; 
        this.currentFrame = 0; 
        this.counter = 0; 

        for (let frameNumber = this.startFrame; frameNumber <= this.endFrame; frameNumber++)
            this.animationSequence.push(frameNumber);
    }

    update() {
        if (this.counter == (this.frameSpeed - 1))
            this.currentFrame = (this.currentFrame + 1) % this.animationSequence.length;

        this.counter = (this.counter + 1) % this.frameSpeed;
    }

    render(ctx) {
        let row = Math.floor(this.animationSequence[this.currentFrame] / this.spritesheet.framesPerRow);
        let col = Math.floor(this.animationSequence[this.currentFrame] % this.spritesheet.framesPerRow);
     
        ctx.drawImage(
            this.spritesheet.image,
            col * this.spritesheet.frameWidth, row * this.spritesheet.frameHeight,
            this.spritesheet.frameWidth, this.spritesheet.frameHeight,
            this.parent.pos.x, this.parent.pos.y,
            this.spritesheet.frameWidth, this.spritesheet.frameHeight);
    }
}

export {Animation as default}