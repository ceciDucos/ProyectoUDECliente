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
        this.load.image('vistaLateral', 'assets/images/airplanes/marco.png');
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
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 1, zeroPad: 1,
            prefix: 'vistaLateral/animacionEnHangar/equipo1avion1EnHangar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1EnHangar', frames: this.frameNames, frameRate: 24, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 18, zeroPad: 1,
            prefix: 'vistaLateral/animacionLateralDespegar/equipo1avion1LateralDespegar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1LateralDespegar', frames: this.frameNames, frameRate: 24, repeat: 0 });

        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 14, zeroPad: 1,
            prefix: 'vistaLateral/animacionLateralAterrizar/equipo1avion1LateralAterrizar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1LateralAterrizar', frames: this.frameNames, frameRate: 12, repeat: 0 });


        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolar/equipo1avion1VolarBajoLateralVolar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1VolarBajoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: -1 });
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierda/equipo1avion1VueloBajoLateralDoblarIzquierda-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1VueloBajoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerecha/equipo1avion1VueloBajoLateralDoblarDerecha-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1VueloBajoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });


        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'vistaLateral/animacionAumentarAltura/equipo1avion1AumentarAltura-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1AumentarAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'vistaLateral/animacionDisminuirAltura/equipo1avion1DisminuirAltura-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1DisminuirAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

        
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolar/equipo1avion1VueloAltoLateralVolar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1VueloAltoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: -1 });
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierda/equipo1avion1VueloAltoLateralDoblarIzquierda-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1VueloAltoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo1avion1VueloAltoLateralDoblarDerecha-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1VueloAltoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });


        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 17, zeroPad: 1,
            prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralExplotar/equipo1avion1VueloBajoLateralExplotar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1VueloBajoLateralExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
            start: 1, end: 17, zeroPad: 1,
            prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralExplotar/equipo1avion1VueloAltoLateraExplotar-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1avion1VueloAltoLateraExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });


        

        
        
        





        this.scene.start('Bootloader');
        /*this.loading.once('pointerdown', () => {
            this.scene.start('Bootloader');
        });*/
    }
}