export default class Base extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y) {
        super(scene, x, y, 'base');
        this.setScale(3);
        this.selected = true;
        //this.lastFired = 0;
    }
}