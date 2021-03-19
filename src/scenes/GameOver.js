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
        }
        this.mainMenu = this.add.sprite(540, 510, 'menu', 'botones/volver/btn-volver.png')
        this.mainMenu.setInteractive().on('pointerdown', this.pasarEscena, this);
        stompClient.disconnect();

    }

    update(time, delta) {
    }
    
    pasarEscena() {
        this.scene.restart('Bootloader');
        this.scene.restart('SetBase');
        this.scene.restart('SetTurret');
        this.scene.restart('Field');          
        this.scene.stop('Field');
        this.scene.start('Bootloader');        
        this.scene.bringToTop('Bootloader');
    }
}

export default GameOver;
