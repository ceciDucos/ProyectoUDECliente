import Field from './scenes/Field.js';
import SetBase from './scenes/SetBase.js';
import Bootloader from './Bootloader.js';
import SetTurrets from './scenes/SetTurrets.js';
import Preloader from './scenes/Preloader.js';

const config = {
    title: "Bombs Away",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 1280,
        height: 720,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#484824",
    pixelArt: false,
    physics: {
        default: "arcade",
        "arcade": {
            debug: false,
            gravity: {
                y: 0
            }
        }
    },
    scene: [Preloader, Bootloader, SetBase, SetTurrets, Field]
};

new Phaser.Game(config);