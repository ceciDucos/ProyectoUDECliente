export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.multiatlas('equipo1avion1', 'assets/images/airplanes/player1/equipo1avion1.json', 'assets/images/airplanes/player1');
        this.load.multiatlas('equipo1avion2', 'assets/images/airplanes/player1/equipo1avion2.json', 'assets/images/airplanes/player1');
        this.load.multiatlas('equipo1avion3', 'assets/images/airplanes/player1/equipo1avion3.json', 'assets/images/airplanes/player1');
        this.load.multiatlas('equipo1avion4', 'assets/images/airplanes/player1/equipo1avion4.json', 'assets/images/airplanes/player1');
    }

    create ()
    {
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 2, zeroPad: 1,
            prefix: 'animacionVolar/equipo1avion1Volar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1Volar', frames: this.frameNames, frameRate: 24, repeat: 0 });

        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 14, zeroPad: 1,
            prefix: 'animacionDespegar/equipo1avion1Despegar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1Despegar', frames: this.frameNames, frameRate: 12, repeat: 0 });

        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 13, zeroPad: 1,
            prefix: 'animacionExplotar/equipo1avion1Explotar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1Explotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 2, zeroPad: 1,
            prefix: 'animacionDoblarIzquierda/equipo1avion1DoblarIzquierda-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1DoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 2, zeroPad: 1,
            prefix: 'animacionDoblarDerecha/equipo1avion1DoblarDerecha-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1DoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

        





        this.scene.start('Bootloader');
        /*this.loading.once('pointerdown', () => {
            this.scene.start('Bootloader');
        });*/
    }
}