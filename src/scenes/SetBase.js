class SetBase extends Phaser.Scene {
    constructor() {
        super({key: 'SetBase'});
    }

    init(data) {
        this.data = data;
    }

    preload() {        
        this.load.multiatlas('mapa', 'assets/images/maps/mapa.json', 'assets/images/maps');        
        //this.load.image('base', 'assets/images/bomba-sprite1.png');
    }

    create() {
        this.physics.world.setFPS(30); 
        this.map = this.add.sprite(540, 360, 'mapa', 'mapa-1.png');
        this.frameNames = this.anims.generateFrameNames('mapa', {
            start: 1, end: 5, zeroPad: 1,
            prefix: 'mapa-', suffix: '.png'
        });
        this.anims.create({ key: 'move', frames: this.frameNames, frameRate: 2, repeat: -1 });
        this.map.anims.play('move');
        this.data.teamBaseX = 200;
        this.data.enemyBaseX = 200;
        let i = Math.floor(720 / 30);
        let j = Math.floor(1080 / 40);
        this.mapGrid = new Array(i);
        for (let i = 0; i < this.mapGrid.length; i++) {
            this.mapGrid[i] = new Array(j).fill(0);
        }
        var graphics = this.add.graphics();
        this.drawGrid1(graphics);
        
        
        this.input.on('pointerdown', this.placeBase, this);

    }

    update(time, delta) {
    }

    pasarEscena() {
        //this.bootloaderScene = this.scene.get('Bootloader');
        this.scene.start('SetTurrets', { team: this.data.team, gameId: this.data.gameId, enemyTeam: this.data.enemyTeam, 
            teamBaseX: this.data.teamBaseX, teamBaseY: this.data.teamBaseY, enemyBaseX: this.data.enemyBaseX, enemyBaseY: this.data.enemyBaseY, mapGrid: this.mapGrid});
        //console.log(this.data);
        //this.bootloaderScene.fieldScene = this.scene.get('Field');
        //this.scene.boo.fieldScene = this.scene.get('SetBase');
    }

    drawGrid1(graphics) {
        graphics.lineStyle(1, 0x004200, 0.8); //0x0000ff
        if (this.data.team === 1) {
            for (let i = 0; i < 13; i++) {
                graphics.moveTo(0, i * 30);
                graphics.lineTo(1080, i * 30);
            }
            for (let j = 0; j < 28; j++) {
                graphics.moveTo(j * 40, 0);
                graphics.lineTo(j * 40, 360);
            }
        }
        else {
            for (let i = 12; i < 26; i++) {
                graphics.moveTo(0, i * 30);
                graphics.lineTo(1080, i * 30);
            }
            for (let j = 0; j < 28; j++) {
                graphics.moveTo(j * 40, 360);
                graphics.lineTo(j * 40, 720);
            }
        } 
        graphics.strokePath();
    }

    canPlace(i, j) {
        if (this.data.team === 1) {   
            if (j >= 2 && j <= 24 && i >= 2 && i <= 9) {
                return true;
            }
            return false;
        }
        else {  
            if (j >= 2 && j <= 24 && i >= 14 && i <= 21) {
                return true;
            }
            return false;
        }
    }

    placeBase(pointer) {
        let i = Math.floor(pointer.y / 30);
        let j = Math.floor(pointer.x / 40);
        //let canPlace = (this.mapGrid[i][j] === 0);
        if (this.canPlace(i, j)) { 
            this.data['teamBaseX'] = j * 40 + 40 / 2;
            this.data['teamBaseY'] = i * 30 + 30 / 2; 
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {                        
                    this.mapGrid[k][l] = 1;
                }
            }
            this.data['mapGrid'] = this.mapGrid; 
            this.pasarEscena();
            /*this.base = this.add.image(this.data['teamBaseX'], this.data['teamBaseY'], 'base');
            this.base.setScale(2);
            console.log(this.mapGrid);
            this.bomb.setActive(true);
            this.bomb.setVisible(true);*/
        }
    }

}

export default SetBase;
