class GameOver extends Phaser.Scene {
    constructor() {
        super({key: 'GameOver'});
    }

    init(data) {
        this.team = data.team;
        this.messageTeam1 = data.messageTeam1;
        this.messageTeam2 = data.messageTeam2;
    }

    preload() {
        //this.load.multiatlas('menu', 'assets/images/menu/menu.json', 'assets/images/menu');

    }

    create() {
        if (this.team === 1) {
            if (this.messageTeam1 === 'Ganador') {
                this.gameResult = this.add.sprite(540, 360, 'menu', 'victoria/victoria-1.png');  
                this.gameResult.anims.play('victoria');
            }
            else if (this.messageTeam1 === 'Perdedor'){
                this.gameResult = this.add.sprite(540, 360, 'menu', 'derrota/derrota-1.png');
                this.gameResult.anims.play('derrota');
            }
            else {
                this.gameResult = this.add.sprite(540, 360, 'menu', 'empate/empate-1.png');
                this.gameResult.anims.play('empate');
            }
            //this.message = this.add.text(200, 300, this.messageTeam1, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        }
        else {
            if (this.messageTeam2 === 'Ganador') {
                this.gameResult = this.add.sprite(540, 360, 'menu', 'victoria/victoria-1.png');
                this.gameResult.anims.play('victoria');
            }
            else  if (this.messageTeam2 === 'Perdedor'){
                this.gameResult = this.add.sprite(540, 360, 'menu', 'derrota/derrota-1.png');
                this.gameResult.anims.play('derrota');
            }
            else {
                this.gameResult = this.add.sprite(540, 360, 'menu', 'empate/empate-1.png');
                this.gameResult.anims.play('empate');
            }
            //this.message = this.add.text(200, 300, this.messageTeam2, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        }
        this.mainMenu = this.add.sprite(540, 510, 'menu', 'botones/volver/btn-volver.png')
        this.mainMenu.setInteractive().on('pointerdown', this.pasarEscena, this);
        stompClient.disconnect();
        //this.entrarjuego = this.add.text(400, 10, 'Menu principal', { fill: '#0f0' });
        //this.entrarjuego.setInteractive().on('pointerdown', this.pasarEscena, this);

        //this.frameNames = this.anims.generateFrameNames('menu', {start: 1, end: 1, zeroPad: 1, prefix: 'derrota/derrota-1'});
        //this.anims.create({ key: 'derrota-1', frames: this.frameNames, frameRate: 24, repeat: 0 });

    }

    update(time, delta) {
        //this.scene.anims.play('derrota-1', true);
    }
    
    pasarEscena() {
        //this.entrarjuego.removeInteractive();
        this.scene.restart('Bootloader');
        this.scene.restart('SetBase');
        this.scene.restart('SetTurret');
        this.scene.restart('Field');        
        this.scene.stop('Field');
        this.scene.start('Bootloader');        
        this.scene.bringToTop('Bootloader');
        //this.scene.restart('GameOver');
    }
}

export default GameOver;
