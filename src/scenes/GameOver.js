class GameOver extends Phaser.Scene {
    constructor() {
        super({key: 'GameOver'});
    }

    init(data) {
        this.data = data;
    }

    preload() {

    }

    create() {
        if (this.data.team === 1) {
            this.message = this.add.text(200, 300, this.data.messageTeam1, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });    
        }
        else {
            this.message = this.add.text(200, 300, this.data.messageTeam2, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        }
        this.entrarjuego = this.add.text(400, 10, 'Menu principal', { fill: '#0f0' });        
        this.entrarjuego.setInteractive().on('pointerdown', this.pasarEscena, this);

        

    }

    update(time, delta) {
    }

    pasarEscena(data) {
        this.entrarjuego.removeInteractive();        
        this.scene.start('Bootloader');
    }
}

export default GameOver;
