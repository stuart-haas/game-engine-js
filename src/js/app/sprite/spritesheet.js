class SpriteSheet {
    constructor(path, frameWidth, frameHeight) {
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;

        this.image = new Image();

        this.image.onload = this.loadImage.bind(this);

        this.image.src = path;
    }

    loadImage() {
        this.framesPerRow = Math.floor(this.image.width / this.frameWidth);
    }
}

export {SpriteSheet as default}