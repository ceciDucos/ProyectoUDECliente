export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {        
        this.load.multiatlas('mapa', 'assets/images/maps/mapa.json', 'assets/images/maps');
        this.load.multiatlas('base', 'assets/images/base/base.json', 'assets/images/base');
        
        this.load.multiatlas('equipo1avion1', 'assets/images/airplanes/player1/equipo1avion1.json', 'assets/images/airplanes/player1');
        this.load.multiatlas('equipo1avion2', 'assets/images/airplanes/player1/equipo1avion2.json', 'assets/images/airplanes/player1');
        this.load.multiatlas('equipo1avion3', 'assets/images/airplanes/player1/equipo1avion3.json', 'assets/images/airplanes/player1');
        this.load.multiatlas('equipo1avion4', 'assets/images/airplanes/player1/equipo1avion4.json', 'assets/images/airplanes/player1'); 

        this.load.multiatlas('equipo2avion1', 'assets/images/airplanes/player2/equipo2avion1.json', 'assets/images/airplanes/player2');
        this.load.multiatlas('equipo2avion2', 'assets/images/airplanes/player2/equipo2avion2.json', 'assets/images/airplanes/player2');
        this.load.multiatlas('equipo2avion3', 'assets/images/airplanes/player2/equipo2avion3.json', 'assets/images/airplanes/player2');
        this.load.multiatlas('equipo2avion4', 'assets/images/airplanes/player2/equipo2avion4.json', 'assets/images/airplanes/player2');

        this.load.image('vistaLateral', 'assets/images/airplanes/marco.png');
        this.load.image('bullet', 'assets/images/bala.png'); 
        this.load.multiatlas('others', 'assets/images/others/others.json', 'assets/images/others');
        this.load.html('nameform', 'assets/images/text/nameform.html');
        this.load.css('textStyle', 'assets/images/text/80stypography.css');

    }

    create ()
    {
        //animaciones del mapa

        this.frameNames = this.anims.generateFrameNames('mapa', {
            start: 1, end: 5, zeroPad: 1,
            prefix: 'mapa-', suffix: '.png'
        });
        this.anims.create({ key: 'move', frames: this.frameNames, frameRate: 2, repeat: -1 });

        //animaciones de los elementos de la base
        
        this.frameNames = this.anims.generateFrameNames('base', {
            start: 1, end: 10, zeroPad: 1,
            prefix: 'equipo1/animacionHangarExplota/animacionHangarExplota-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1animacionHangarExplota', frames: this.frameNames, frameRate: 12, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('base', {
            start: 1, end: 10, zeroPad: 1,
            prefix: 'equipo2/animacionHangarExplota/animacionHangarExplota-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo2animacionHangarExplota', frames: this.frameNames, frameRate: 12, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('base', {
            start: 1, end: 10, zeroPad: 1,
            prefix: 'animacionTanqueExplota/animacionTanqueExplota-', suffix: '.png'
        });
        this.anims.create({ key: 'animacionTanqueExplota', frames: this.frameNames, frameRate: 12, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('base', {
            start: 1, end: 10, zeroPad: 1,
            prefix: 'equipo1/animacionTorreExplota/animacionTorreExplota-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo1animacionTorreExplota', frames: this.frameNames, frameRate: 12, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('base', {
            start: 1, end: 10, zeroPad: 1,
            prefix: 'equipo2/animacionTorreExplota/animacionTorreExplota-', suffix: '.png'
        });
        this.anims.create({ key: 'equipo2animacionTorreExplota', frames: this.frameNames, frameRate: 12, repeat: 0 });
        
        this.frameNames = this.anims.generateFrameNames('base', {
            start: 1, end: 10, zeroPad: 1,
            prefix: 'animacionArtilleriaExplota/artilleriaEplotar-', suffix: '.png'
        });
        this.anims.create({ key: 'artilleriaEplotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

        //animaciones de bomba
        
        this.frameNames = this.anims.generateFrameNames('others', {
            start: 1, end: 7, zeroPad: 1,
            prefix: 'bomba-', suffix: '.png'
        });
        this.anims.create({ key: 'bomba', frames: this.frameNames, frameRate: 6, repeat: 0 });

        

        



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                        animaciones equipo1avion1                                                        ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////
//ANIMACIONES SUPERIORES// 
/////////////////////////

//animacionAterrizar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'animacionAterrizar/equipo1avion1Aterriza-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1Aterriza', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 8, zeroPad: 1,
    prefix: 'animacionAterrizarConPocaVida/equipo1avion1AterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1AterrizaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDespegar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'animacionDespegar/equipo1avion1Despegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1Despegar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'animacionDespegarConPocaVida/equipo1avion1DespegarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1DespegarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarDerecha/equipo1avion1DoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1DoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarDerechaConPocaVida/equipo1avion1DoblarDerechaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1DoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarIzquierda/equipo1avion1DoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1DoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarIzquierdaConPocaVida/equipo1avion1DoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1DoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionExplotar/equipo1avion1Explotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1Explotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionVolar/equipo1avion1-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1Volar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionVolarConPocaVida/equipo1avion1VolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

/////////////////////////
//ANIMACIONES LATERALES// 
/////////////////////////          

//vistaLateralanimacionAumentarAltura
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAltura/equipo1avion1AumentarAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1AumentarAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionAumentarAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAlturaConPocaVida/equipo1avion1AumentarAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1AumentarAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAltura
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAltura/equipo1avion1DisminuirAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1DisminuirAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAlturaConPocaVida/equipo1avion1DisminuirAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1DisminuirAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionEnHangar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 1, zeroPad: 1,
    prefix: 'vistaLateral/animacionEnHangar/equipo1avion1EnHangar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1EnHangar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralAterrizar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizar/equipo1avion1LateralAterrizar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1LateralAterrizar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizarConPocaVida/equipo1avion1LateralAterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1LateralAterrizarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralDespegar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegar/equipo1avion1LateralDespegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1LateralDespegar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegarConPocaVida/equipo1avion1LateralDespegarPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1LateralDespegarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO ALTO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo1avion1VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloAltoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerechaConPoca Vida/equipo1avion1VueloAltoLateralDoblarDerechaConPoca Vida-1-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloAltoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierda/equipo1avion1VueloAltoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloAltoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierdaConPocaVida/equipo1avion1VueloAltoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloAltoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralExplotar/equipo1avion1VueloAltoLateraExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloAltoLateraExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBomba/equipo1avion1VueloAltoLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloAltoLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBombaConPocaVida/equipo1avion1VueloAltoLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloAltoLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolar/equipo1avion1VueloAltoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloAltoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolarConPocaVida/equipo1avion1VueloAltoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloAltoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO BAJO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerecha/equipo1avion1VueloBajoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloBajoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerechaConPoca Vida/equipo1avion1VueloBajoLateralDoblarDerechaConPoca Vida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloBajoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierda/equipo1avion1VueloBajoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloBajoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierdaConPocaVida/equipo1avion1VueloBajoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloBajoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 17, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralExplotar/equipo1avion1VueloBajoLateralExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloBajoLateralExplotado', frames: this.frameNames, frameRate: 24, repeat: -1 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBomba/equipo1avion1VueloBajoLateralLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloBajoLateralLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBombaConPocaVida/equipo1avion1VueloBajoLateralLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VueloBajoLateralLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolar/equipo1avion1VolarBajoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VolarBajoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolarConPocaVida/equipo1avion1VueloBajoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion1VolarBajoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                        animaciones equipo1avion2                                                        ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////
//ANIMACIONES SUPERIORES// 
/////////////////////////

//animacionAterrizar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 12, zeroPad: 1,
    prefix: 'animacionAterrizar/equipo1avion2Aterriza-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2Aterriza', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 8, zeroPad: 1,
    prefix: 'animacionAterrizarConPocaVida/equipo1avion2AterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2AterrizaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDespegar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegar/equipo1avion2Despegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2Despegar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegarConPocaVida/equipo1avion2DespegarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2DespegarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarDerecha/equipo1avion2DoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2DoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarDerechaConPocaVida/equipo1avion2DoblarDerechaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2DoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarIzquierda/equipo1avion2DoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2DoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarIzquierdaConPocaVida/equipo1avion2DoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2DoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionExplotar/equipo1avion2Explotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2Explotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionVolar/equipo1avion2-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2Volar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'animacionVolarConPocaVida/equipo1avion2VolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

/////////////////////////
//ANIMACIONES LATERALES// 
/////////////////////////          

//vistaLateralanimacionAumentarAltura
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAltura/equipo1avion2AumentarAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2AumentarAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionAumentarAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAlturaConPocaVida/equipo1avion2AumentarAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2AumentarAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAltura
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAltura/equipo1avion2DisminuirAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2DisminuirAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAlturaConPocaVida/equipo1avion2DisminuirAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2DisminuirAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionEnHangar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 1, zeroPad: 1,
    prefix: 'vistaLateral/animacionEnHangar/equipo1avion2EnHangar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2EnHangar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralAterrizar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizar/equipo1avion2LateralAterrizar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2LateralAterrizar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizarConPocaVida/equipo1avion2LateralAterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2LateralAterrizarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralDespegar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegar/equipo1avion2LateralDespegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2LateralDespegar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegarConPocaVida/equipo1avion2LateralDespegarPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2LateralDespegarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO ALTO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo1avion2VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloAltoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo1avion2VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloAltoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierda/equipo1avion2VueloAltoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloAltoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierdaConPocaVida/equipo1avion2VueloAltoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloAltoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralExplotar/equipo1avion2VueloAltoLateraExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloAltoLateraExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBomba/equipo1avion2VueloAltoLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloAltoLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBombaConPocaVida/equipo1avion2VueloAltoLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloAltoLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolar/equipo1avion2VueloAltoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloAltoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolarConPocaVida/equipo1avion2VueloAltoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloAltoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO BAJO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerecha/equipo1avion2VueloBajoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloBajoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerechaConPoca Vida/equipo1avion2VueloBajoLateralDoblarDerechaConPoca Vida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloBajoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierda/equipo1avion2VueloBajoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloBajoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierdaConPocaVida/equipo1avion2VueloBajoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloBajoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 17, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralExplotar/equipo1avion2VueloBajoLateralExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloBajoLateralExplotado', frames: this.frameNames, frameRate: 24, repeat: -1 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBomba/equipo1avion2VueloBajoLateralLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloBajoLateralLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBombaConPocaVida/equipo1avion2VueloBajoLateralLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VueloBajoLateralLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolar/equipo1avion2VolarBajoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VolarBajoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolarConPocaVida/equipo1avion2VueloBajoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion2VolarBajoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                        animaciones equipo1avion3                                                        ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////
//ANIMACIONES SUPERIORES// 
/////////////////////////

//animacionAterrizar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 12, zeroPad: 1,
    prefix: 'animacionAterrizar/equipo1avion3Aterriza-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3Aterriza', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 8, zeroPad: 1,
    prefix: 'animacionAterrizarConPocaVida/equipo1avion3AterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3AterrizaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDespegar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegar/equipo1avion3Despegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3Despegar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegarConPocaVida/equipo1avion3DespegarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3DespegarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarDerecha/equipo1avion3DoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3DoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarDerechaConPocaVida/equipo1avion3DoblarDerechaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3DoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarIzquierda/equipo1avion3DoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3DoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarIzquierdaConPocaVida/equipo1avion3DoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3DoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionExplotar/equipo1avion3Explotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3Explotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionVolar/equipo1avion3-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3Volar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'animacionVolarConPocaVida/equipo1avion3VolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

/////////////////////////
//ANIMACIONES LATERALES// 
/////////////////////////          

//vistaLateralanimacionAumentarAltura
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAltura/equipo1avion3AumentarAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3AumentarAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionAumentarAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAlturaConPocaVida/equipo1avion3AumentarAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3AumentarAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAltura
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAltura/equipo1avion3DisminuirAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3DisminuirAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAlturaConPocaVida/equipo1avion3DisminuirAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3DisminuirAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionEnHangar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 1, zeroPad: 1,
    prefix: 'vistaLateral/animacionEnHangar/equipo1avion3EnHangar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3EnHangar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralAterrizar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizar/equipo1avion3LateralAterrizar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3LateralAterrizar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizarConPocaVida/equipo1avion3LateralAterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3LateralAterrizarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralDespegar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegar/equipo1avion3LateralDespegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3LateralDespegar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegarConPocaVida/equipo1avion3LateralDespegarPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3LateralDespegarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO ALTO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo1avion3VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloAltoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo1avion3VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloAltoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierda/equipo1avion3VueloAltoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloAltoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierdaConPocaVida/equipo1avion3VueloAltoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloAltoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralExplotar/equipo1avion3VueloAltoLateraExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloAltoLateraExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBomba/equipo1avion3VueloAltoLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloAltoLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBombaConPocaVida/equipo1avion3VueloAltoLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloAltoLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolar/equipo1avion3VueloAltoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloAltoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolarConPocaVida/equipo1avion3VueloAltoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloAltoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO BAJO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerecha/equipo1avion3VueloBajoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloBajoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerechaConPoca Vida/equipo1avion3VueloBajoLateralDoblarDerechaConPoca Vida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloBajoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierda/equipo1avion3VueloBajoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloBajoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierdaConPocaVida/equipo1avion3VueloBajoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloBajoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 17, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralExplotar/equipo1avion3VueloBajoLateralExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloBajoLateralExplotado', frames: this.frameNames, frameRate: 24, repeat: -1 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBomba/equipo1avion3VueloBajoLateralLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloBajoLateralLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBombaConPocaVida/equipo1avion3VueloBajoLateralLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VueloBajoLateralLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolar/equipo1avion3VolarBajoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VolarBajoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolarConPocaVida/equipo1avion3VueloBajoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion3VolarBajoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                        animaciones equipo1avion4                                                        ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////
//ANIMACIONES SUPERIORES// 
/////////////////////////

//animacionAterrizar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionAterrizar/equipo1avion4Aterriza-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4Aterriza', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 8, zeroPad: 1,
    prefix: 'animacionAterrizarConPocaVida/equipo1avion4AterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4AterrizaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDespegar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegar/equipo1avion4Despegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4Despegar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegarConPocaVida/equipo1avion4DespegarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4DespegarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarDerecha/equipo1avion4DoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4DoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarDerechaConPocaVida/equipo1avion4DoblarDerechaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4DoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarIzquierda/equipo1avion4DoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4DoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarIzquierdaConPocaVida/equipo1avion4DoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4DoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionExplotar/equipo1avion4Explotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4Explotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionVolar/equipo1avion4-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4Volar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'animacionVolarConPocaVida/equipo1avion4VolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

/////////////////////////
//ANIMACIONES LATERALES// 
/////////////////////////          

//vistaLateralanimacionAumentarAltura
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAltura/equipo1avion4AumentarAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4AumentarAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionAumentarAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAlturaConPocaVida/equipo1avion4AumentarAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4AumentarAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAltura
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAltura/equipo1avion4DisminuirAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4DisminuirAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAlturaConPocaVida/equipo1avion4DisminuirAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4DisminuirAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionEnHangar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 1, zeroPad: 1,
    prefix: 'vistaLateral/animacionEnHangar/equipo1avion4EnHangar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4EnHangar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralAterrizar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizar/equipo1avion4LateralAterrizar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4LateralAterrizar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizarConPocaVida/equipo1avion4LateralAterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4LateralAterrizarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralDespegar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegar/equipo1avion4LateralDespegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4LateralDespegar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegarConPocaVida/equipo1avion4LateralDespegarPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4LateralDespegarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO ALTO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo1avion4VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloAltoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerechaConPoca Vida/equipo1avion4VueloAltoLateralDoblarDerechaConPoca Vida-1-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloAltoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierda/equipo1avion4VueloAltoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloAltoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierdaConPocaVida/equipo1avion4VueloAltoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloAltoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralExplotar/equipo1avion4VueloAltoLateraExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloAltoLateraExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBomba/equipo1avion4VueloAltoLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloAltoLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBombaConPocaVida/equipo1avion4VueloAltoLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloAltoLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolar/equipo1avion4VueloAltoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloAltoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolarConPocaVida/equipo1avion4VueloAltoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloAltoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO BAJO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerecha/equipo1avion4VueloBajoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloBajoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerechaConPoca Vida/equipo1avion4VueloBajoLateralDoblarDerechaConPoca Vida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloBajoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierda/equipo1avion4VueloBajoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloBajoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierdaConPocaVida/equipo1avion4VueloBajoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloBajoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 17, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralExplotar/equipo1avion4VueloBajoLateralExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloBajoLateralExplotado', frames: this.frameNames, frameRate: 24, repeat: -1 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBomba/equipo1avion4VueloBajoLateralLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloBajoLateralLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBombaConPocaVida/equipo1avion4VueloBajoLateralLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VueloBajoLateralLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolar/equipo1avion4VolarBajoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VolarBajoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo1avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolarConPocaVida/equipo1avion4VueloBajoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo1avion4VolarBajoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                        animaciones equipo2avion1                                                        ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////
//ANIMACIONES SUPERIORES// 
/////////////////////////

//animacionAterrizar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionAterrizar/equipo2avion1Aterriza-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1Aterriza', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 8, zeroPad: 1,
    prefix: 'animacionAterrizarConPocaVida/equipo2avion1AterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1AterrizaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDespegar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 2, end: 13, zeroPad: 1,
    prefix: 'animacionDespegar/equipo2avion1Despegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1Despegar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegarConPocaVida/equipo2avion1DespegarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1DespegarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarDerecha/equipo2avion1DoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1DoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarDerechaConPocaVida/equipo2avion1DoblarDerechaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1DoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarIzquierda/equipo2avion1DoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1DoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarIzquierdaConPocaVida/equipo2avion1DoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1DoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionExplotar/equipo2avion1Explotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1Explotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionVolar/equipo2avion1-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1Volar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'animacionVolarConPocaVida/equipo2avion1VolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

/////////////////////////
//ANIMACIONES LATERALES// 
/////////////////////////          

//vistaLateralanimacionAumentarAltura
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAltura/equipo2avion1AumentarAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1AumentarAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionAumentarAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAlturaConPocaVida/equipo2avion1AumentarAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1AumentarAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAltura
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAltura/equipo2avion1DisminuirAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1DisminuirAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAlturaConPocaVida/equipo2avion1DisminuirAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1DisminuirAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionEnHangar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 1, zeroPad: 1,
    prefix: 'vistaLateral/animacionEnHangar/equipo2avion1EnHangar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1EnHangar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralAterrizar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizar/equipo2avion1LateralAterrizar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1LateralAterrizar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizarConPocaVida/equipo2avion1LateralAterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1LateralAterrizarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralDespegar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegar/equipo2avion1LateralDespegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1LateralDespegar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegarConPocaVida/equipo2avion1LateralDespegarPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1LateralDespegarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO ALTO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo2avion1VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloAltoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerechaConPoca Vida/equipo2avion1VueloAltoLateralDoblarDerechaConPoca Vida-1-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloAltoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierda/equipo2avion1VueloAltoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloAltoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierdaConPocaVida/equipo2avion1VueloAltoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloAltoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralExplotar/equipo2avion1VueloAltoLateraExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloAltoLateraExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBomba/equipo2avion1VueloAltoLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloAltoLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBombaConPocaVida/equipo2avion1VueloAltoLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloAltoLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolar/equipo2avion1VueloAltoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloAltoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolarConPocaVida/equipo2avion1VueloAltoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloAltoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO BAJO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerecha/equipo2avion1VueloBajoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloBajoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerechaConPoca Vida/equipo2avion1VueloBajoLateralDoblarDerechaConPoca Vida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloBajoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierda/equipo2avion1VueloBajoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloBajoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierdaConPocaVida/equipo2avion1VueloBajoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloBajoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 17, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralExplotar/equipo2avion1VueloBajoLateralExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloBajoLateralExplotado', frames: this.frameNames, frameRate: 24, repeat: -1 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBomba/equipo2avion1VueloBajoLateralLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloBajoLateralLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBombaConPocaVida/equipo2avion1VueloBajoLateralLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VueloBajoLateralLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolar/equipo2avion1VolarBajoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VolarBajoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion1', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolarConPocaVida/equipo2avion1VueloBajoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion1VolarBajoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                        animaciones equipo2avion2                                                       ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////
//ANIMACIONES SUPERIORES// 
/////////////////////////

//animacionAterrizar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionAterrizar/equipo2avion2Aterriza-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2Aterriza', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 8, zeroPad: 1,
    prefix: 'animacionAterrizarConPocaVida/equipo2avion2AterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2AterrizaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDespegar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegar/equipo2avion2Despegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2Despegar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegarConPocaVida/equipo2avion2DespegarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2DespegarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarDerecha/equipo2avion2DoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2DoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarDerechaConPocaVida/equipo2avion2DoblarDerechaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2DoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarIzquierda/equipo2avion2DoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2DoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarIzquierdaConPocaVida/equipo2avion2DoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2DoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionExplotar/equipo2avion2Explotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2Explotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionVolar/equipo2avion2-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2Volar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'animacionVolarConPocaVida/equipo2avion2VolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

/////////////////////////
//ANIMACIONES LATERALES// 
/////////////////////////          

//vistaLateralanimacionAumentarAltura
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAltura/equipo2avion2AumentarAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2AumentarAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionAumentarAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAlturaConPocaVida/equipo2avion2AumentarAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2AumentarAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAltura
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAltura/equipo2avion2DisminuirAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2DisminuirAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAlturaConPocaVida/equipo2avion2DisminuirAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2DisminuirAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionEnHangar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 1, zeroPad: 1,
    prefix: 'vistaLateral/animacionEnHangar/equipo2avion2EnHangar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2EnHangar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralAterrizar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizar/equipo2avion2LateralAterrizar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2LateralAterrizar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizarConPocaVida/equipo2avion2LateralAterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2LateralAterrizarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralDespegar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegar/equipo2avion2LateralDespegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2LateralDespegar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegarConPocaVida/equipo2avion2LateralDespegarPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2LateralDespegarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO ALTO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo2avion2VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloAltoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerechaConPoca Vida/equipo2avion2VueloAltoLateralDoblarDerechaConPoca Vida-1-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloAltoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierda/equipo2avion2VueloAltoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloAltoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierdaConPocaVida/equipo2avion2VueloAltoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloAltoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralExplotar/equipo2avion2VueloAltoLateraExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloAltoLateraExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBomba/equipo2avion2VueloAltoLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloAltoLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBombaConPocaVida/equipo2avion2VueloAltoLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloAltoLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolar/equipo2avion2VueloAltoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloAltoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolarConPocaVida/equipo2avion2VueloAltoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloAltoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO BAJO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerecha/equipo2avion2VueloBajoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloBajoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerechaConPoca Vida/equipo2avion2VueloBajoLateralDoblarDerechaConPoca Vida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloBajoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierda/equipo2avion2VueloBajoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloBajoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierdaConPocaVida/equipo2avion2VueloBajoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloBajoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 17, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralExplotar/equipo2avion2VueloBajoLateralExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloBajoLateralExplotado', frames: this.frameNames, frameRate: 24, repeat: -1 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBomba/equipo2avion2VueloBajoLateralLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloBajoLateralLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBombaConPocaVida/equipo2avion2VueloBajoLateralLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VueloBajoLateralLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolar/equipo2avion2VolarBajoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VolarBajoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion2', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolarConPocaVida/equipo2avion2VueloBajoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion2VolarBajoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                        animaciones equipo2avion3                                                        ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////
//ANIMACIONES SUPERIORES// 
/////////////////////////

//animacionAterrizar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 12, zeroPad: 1,
    prefix: 'animacionAterrizar/equipo2avion3Aterriza-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3Aterriza', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 8, zeroPad: 1,
    prefix: 'animacionAterrizarConPocaVida/equipo2avion3AterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3AterrizaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDespegar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegar/equipo2avion3Despegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3Despegar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 8, zeroPad: 1,
    prefix: 'animacionDespegarConPocaVida/equipo2avion3DespegarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3DespegarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarDerecha/equipo2avion3DoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3DoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarDerechaConPocaVida/equipo2avion3DoblarDerechaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3DoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarIzquierda/equipo2avion3DoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3DoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarIzquierdaConPocaVida/equipo2avion3DoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3DoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionExplotar/equipo2avion3Explotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3Explotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionVolar/equipo2avion3-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3Volar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'animacionVolarConPocaVida/equipo2avion3VolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

/////////////////////////
//ANIMACIONES LATERALES// 
/////////////////////////          

//vistaLateralanimacionAumentarAltura
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAltura/equipo2avion3AumentarAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3AumentarAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionAumentarAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAlturaConPocaVida/equipo2avion3AumentarAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3AumentarAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAltura
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAltura/equipo2avion3DisminuirAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3DisminuirAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAlturaConPocaVida/equipo2avion3DisminuirAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3DisminuirAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionEnHangar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 1, zeroPad: 1,
    prefix: 'vistaLateral/animacionEnHangar/equipo2avion3EnHangar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3EnHangar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralAterrizar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizar/equipo2avion3LateralAterrizar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3LateralAterrizar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizarConPocaVida/equipo2avion3LateralAterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3LateralAterrizarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralDespegar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegar/equipo2avion3LateralDespegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3LateralDespegar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegarConPocaVida/equipo2avion3LateralDespegarPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3LateralDespegarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO ALTO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo2avion3VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloAltoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerechaConPoca Vida/equipo2avion3VueloAltoLateralDoblarDerechaConPoca Vida-1-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloAltoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierda/equipo2avion3VueloAltoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloAltoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierdaConPocaVida/equipo2avion3VueloAltoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloAltoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralExplotar/equipo2avion3VueloAltoLateraExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloAltoLateraExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBomba/equipo2avion3VueloAltoLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloAltoLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBombaConPocaVida/equipo2avion3VueloAltoLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloAltoLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolar/equipo2avion3VueloAltoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloAltoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolarConPocaVida/equipo2avion3VueloAltoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloAltoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO BAJO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerecha/equipo2avion3VueloBajoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloBajoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerechaConPoca Vida/equipo2avion3VueloBajoLateralDoblarDerechaConPoca Vida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloBajoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierda/equipo2avion3VueloBajoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloBajoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierdaConPocaVida/equipo2avion3VueloBajoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloBajoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 17, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralExplotar/equipo2avion3VueloBajoLateralExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloBajoLateralExplotado', frames: this.frameNames, frameRate: 24, repeat: -1 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBomba/equipo2avion3VueloBajoLateralLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloBajoLateralLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBombaConPocaVida/equipo2avion3VueloBajoLateralLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VueloBajoLateralLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolar/equipo2avion3VolarBajoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VolarBajoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion3', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolarConPocaVida/equipo2avion3VueloBajoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion3VolarBajoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                        animaciones equipo2avion4                                                        ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////
//ANIMACIONES SUPERIORES// 
/////////////////////////

//animacionAterrizar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionAterrizar/equipo2avion4Aterriza-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4Aterriza', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 8, zeroPad: 1,
    prefix: 'animacionAterrizarConPocaVida/equipo2avion4AterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4AterrizaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDespegar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionDespegar/equipo2avion4Despegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4Despegar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 2, end: 8, zeroPad: 1,
    prefix: 'animacionDespegarConPocaVida/equipo2avion4DespegarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4DespegarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarDerecha/equipo2avion4DoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4DoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarDerechaConPocaVida/equipo2avion4DoblarDerechaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4DoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionDoblarIzquierda/equipo2avion4DoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4DoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 7, zeroPad: 1,
    prefix: 'animacionDoblarIzquierdaConPocaVida/equipo2avion4DoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4DoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 13, zeroPad: 1,
    prefix: 'animacionExplotar/equipo2avion4Explotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4Explotar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//animacionVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 2, zeroPad: 1,
    prefix: 'animacionVolar/equipo2avion4-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4Volar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//animacionVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'animacionVolarConPocaVida/equipo2avion4VolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

/////////////////////////
//ANIMACIONES LATERALES// 
/////////////////////////          

//vistaLateralanimacionAumentarAltura
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAltura/equipo2avion4AumentarAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4AumentarAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionAumentarAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionAumentarAlturaConPocaVida/equipo2avion4AumentarAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4AumentarAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAltura
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAltura/equipo2avion4DisminuirAltura-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4DisminuirAltura', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionDisminuirAlturaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionDisminuirAlturaConPocaVida/equipo2avion4DisminuirAlturaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4DisminuirAlturaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionEnHangar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 1, zeroPad: 1,
    prefix: 'vistaLateral/animacionEnHangar/equipo2avion4EnHangar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4EnHangar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralAterrizar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizar/equipo2avion4LateralAterrizar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4LateralAterrizar', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralAterrizarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 14, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralAterrizarConPocaVida/equipo2avion4LateralAterrizarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4LateralAterrizarConPocaVida', frames: this.frameNames, frameRate: 12, repeat: 0 });

//vistaLateralanimacionLateralDespegar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegar/equipo2avion4LateralDespegar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4LateralDespegar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionLateralDespegarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 18, zeroPad: 1,
    prefix: 'vistaLateral/animacionLateralDespegarConPocaVida/equipo2avion4LateralDespegarPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4LateralDespegarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO ALTO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerecha/equipo2avion4VueloAltoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloAltoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarDerechaConPoca Vida/equipo2avion4VueloAltoLateralDoblarDerechaConPoca Vida-1-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloAltoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierda/equipo2avion4VueloAltoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloAltoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralDoblarIzquierdaConPocaVida/equipo2avion4VueloAltoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloAltoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralExplotar/equipo2avion4VueloAltoLateraExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloAltoLateraExplotar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBomba/equipo2avion4VueloAltoLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloAltoLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralLanzarBombaConPocaVida/equipo2avion4VueloAltoLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloAltoLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolar/equipo2avion4VueloAltoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloAltoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloAltoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloAlto/animacionLateralVolarConPocaVida/equipo2avion4VueloAltoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloAltoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

////////////////////////////////////////
//ANIMACIONES LATERALES DE VUELO BAJO// 
//////////////////////////////////////

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerecha
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerecha/equipo2avion4VueloBajoLateralDoblarDerecha-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloBajoLateralDoblarDerecha', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarDerechaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarDerechaConPoca Vida/equipo2avion4VueloBajoLateralDoblarDerechaConPoca Vida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloBajoLateralDoblarDerechaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierda
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierda/equipo2avion4VueloBajoLateralDoblarIzquierda-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloBajoLateralDoblarIzquierda', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralDoblarIzquierdaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralDoblarIzquierdaConPocaVida/equipo2avion4VueloBajoLateralDoblarIzquierdaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloBajoLateralDoblarIzquierdaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralExplotar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 17, end: 17, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralExplotar/equipo2avion4VueloBajoLateralExplotar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloBajoLateralExplotado', frames: this.frameNames, frameRate: 24, repeat: -1 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBomba
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBomba/equipo2avion4VueloBajoLateralLanzarBomba-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloBajoLateralLanzarBomba', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralLanzarBombaConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 10, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralLanzarBombaConPocaVida/equipo2avion4VueloBajoLateralLanzarBombaConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VueloBajoLateralLanzarBombaConPocaVida', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolar
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 3, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolar/equipo2avion4VolarBajoLateralVolar-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VolarBajoLateralVolar', frames: this.frameNames, frameRate: 24, repeat: 0 });

//vistaLateralanimacionesVueloBajoanimacionLateralVolarConPocaVida
this.frameNames = this.anims.generateFrameNames('equipo2avion4', {
    start: 1, end: 6, zeroPad: 1,
    prefix: 'vistaLateral/animacionesVueloBajo/animacionLateralVolarConPocaVida/equipo2avion4VueloBajoLateralVolarConPocaVida-', suffix: '.png'
});
this.anims.create({ key: 'equipo2avion4VolarBajoLateralVolarConPocaVida', frames: this.frameNames, frameRate: 24, repeat: -1 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        this.scene.start('Bootloader');
        /*this.loading.once('pointerdown', () => {
            this.scene.start('Bootloader');
        });*/
    }
}