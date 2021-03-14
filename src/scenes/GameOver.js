class GameOver extends Phaser.Scene {
    constructor() {
        super({key: 'GameOver'});
    }

    init(data) {
        this.team = data.team;
        this.messageTeam1 = data.messageTeam1;
        this.messageTeam2 = data.messageTeam2;
        console.log('llega al init de gameover');
    }

    preload() {
        //this.load.multiatlas('menu', 'assets/images/menu/menu.json', 'assets/images/menu');

    }

    create() {
        console.log('llega al create de gameover');
        if (this.team === 1) {
            this.message = this.add.text(200, 300, this.messageTeam1, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        }
        else {
            this.message = this.add.text(200, 300, this.messageTeam2, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        }
        this.entrarjuego = this.add.text(400, 10, 'Menu principal', { fill: '#0f0' });
        this.entrarjuego.setInteractive().on('pointerdown', this.pasarEscena, this);
        console.log('sale del create de gameover');

        //this.frameNames = this.anims.generateFrameNames('menu', {start: 1, end: 1, zeroPad: 1, prefix: 'derrota/derrota-1'});
        //this.anims.create({ key: 'derrota-1', frames: this.frameNames, frameRate: 24, repeat: 0 });

    }

    update(time, delta) {
        //this.scene.anims.play('derrota-1', true);
    }
    
    pasarEscena() {
        this.entrarjuego.removeInteractive();
        this.scene.restart('Bootloader');
        this.scene.restart('SetBase');
        this.scene.restart('SetTurret');
        this.scene.restart('Field');
        this.scene.start('Bootloader');        
        this.scene.restart('GameOver');
    }
}

export default GameOver;
