class GameOver extends Phaser.Scene {
    constructor() {
        super({key: 'GameOver'});
    }

    init(data) {
        this.team = data.team;
        this.messageTeam1 = data.messageTeam1;
        this.messageTeam2 = data.messageTeam2;
        console.log('llega al init de gameover');
        
        this.scene.stop('Field');
    }

    preload() {

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
        

    }

    update(time, delta) {
    }

    pasarEscena() {
        console.log('pasa de escena de gameover');
        //this.scene.stop('Field');
        this.entrarjuego.removeInteractive(); 
        //this.scene.restart('Field');
        this.scene.restart('Bootloader');
        this.scene.bringToTop('Bootloader');
        this.scene.start('Bootloader');
    }
}

export default GameOver;
