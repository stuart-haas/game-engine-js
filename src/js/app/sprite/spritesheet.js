class SpriteSheet {
    constructor(parent, path, frameWidth, frameHeight) {
        this.parent = parent;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;

        this.image = new Image();

        this.image.onload = this.loadImage.bind(this);

        this.image.src = path;
    }

    loadImage() {
        this.framesPerRow = Math.floor(this.image.width / this.frameWidth);
    }

    render(ctx) {
        ctx.drawImage(
            this.image,
            this.parent.pos.x, this.parent.pos.y,
            this.frameWidth, this.frameHeight);
    }
}

export {SpriteSheet as default}