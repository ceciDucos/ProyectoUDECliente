import Turret from "../Turret.js"
class SetTurrets extends Phaser.Scene {
    constructor() {
        super({key: 'SetTurrets'});
    }

    init(data) {
        this.data = data;
    }

    preload() {        
        this.load.multiatlas('map', 'assets/images/maps/map_atlas.json', 'assets/images/maps');        
        //this.load.image('turret', 'assets/images/bomba-sprite1.png');
        this.load.image('turret', 'assets/images/artilleriaMover-1.png');
        this.load.image('base', 'assets/images/baseEquipo1-1sinborde.png');
        //this.load.image('base', 'assets/images/baseExample.png');
    }

    create() {
        this.data.turretsX = [];
        this.data.turretsY = [];
        this.turretCount = 0;
        this.physics.world.setFPS(30); 
        this.map = this.add.sprite(540, 360, 'map', 'mapa-1.png');
        this.frameNames = this.anims.generateFrameNames('map', {
            start: 1, end: 5, zeroPad: 1,
            prefix: 'mapa-', suffix: '.png'
        });
        this.anims.create({ key: 'move', frames: this.frameNames, frameRate: 2, repeat: -1 });
        this.map.anims.play('move');
        var graphics = this.add.graphics();
        this.drawGrid1(graphics);

        
        this.base = this.add.image(this.data.teamBaseX, this.data.teamBaseY, 'base');

        this.turrets = this.add.group({ classType: Turret, maxSize: 11, runChildUpdate: true });
        this.input.on('pointerdown', this.placeTurret, this);   //Hay que ver como hacer el loop de las 11 torretas con el evento del puntero para luego pasar a la escena Field. No hacerlo en el placeTurret porque es un solo evento de click

    }

    update(time, delta) {
        if (this.turretCount === 11) {
            this.pasarEscena();
        }
    }

    pasarEscena() {
        this.bootloaderScene = this.scene.get('Bootloader');
        this.scene.start('Field', { team: this.data.team, gameId: this.data.gameId, enemyTeam: this.data.enemyTeam, 
            teamBaseX: this.data.teamBaseX, teamBaseY: this.data.teamBaseY, enemyBaseX: this.data.enemyBaseX, enemyBaseY: this.data.enemyBaseY, 
            turretsX: this.data.turretsX, turretsY: this.data.turretsY});
        //console.log(this.data);
        this.bootloaderScene.fieldScene = this.scene.get('Field');
        
        //this.scene.boo.fieldScene = this.scene.get('SetBase');
    }

    drawGrid1(graphics) {
        graphics.lineStyle(1, 0x004200, 0.8);
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

    /*occupiedByBase(i, j) {
        let occupied = false;
        let k = i - 1;
        let l = j - 1;
        while ( k <= (i + 1) && !occupied) {
            while (l <= (j + 1) && !occupied) {
                console.log('k= ' + k + ', l= ' + l);
                if(this.data.mapGrid[k][l] === 1) {
                    occupied = true;
                }
                l++;
            }
            k++;
        }
        return occupied;
    }*/

    canPlace(i, j) {
        let available = false;
        if (this.data.team === 1) {   
            if (j >= 1 && j <= 25 && i >= 1 && i <= 10) {
                if (this.data.mapGrid[i][j] !== 1) {
                    available = true;
                }
            }
        }
        else {  
            if (j >= 1 && j <= 25 && i >= 13 && i <= 22) {
                if (this.data.mapGrid[i][j] !== 1) {
                    available = true;
                }
            }
        }
        return available;
    }

    placeTurret(pointer) {
        let i = Math.floor(pointer.y / 30);
        let j = Math.floor(pointer.x / 40);
        //let turretsX = [];
        //let turretsY = [];
        //let canPlace = (this.mapGrid[i][j] === 0);        
        if (this.canPlace(i, j)) { 
            //turretX = 'turretX' + m;
            //turretY = ;
            this.data.turretsX[this.turretCount] =  j * 40 + 40 / 2;
            this.data.turretsY[this.turretCount] = i * 30 + 30 / 2;                        
            this.data.mapGrid[i][j] = 1;
            //console.log('x en setBase: ' + this.data['teamBaseX'] + 'y en setBase: ' + this.data['teamBaseY']);
            this.turret = this.add.image(this.data.turretsX[this.turretCount], this.data.turretsY[this.turretCount], 'turret');
            this.turret.setScale(0.15);
            this.turretCount++;
            //this.pasarEscena();

            /*this.base = this.add.image(this.data['teamBaseX'], this.data['teamBaseY'], 'base');
            this.base.setScale(2);
            console.log(this.mapGrid);
            this.bomb.setActive(true);
            this.bomb.setVisible(true);*/ 
            //this.data.turretsX = turretsX;
            //this.data.turretsY = turretsY;
        }
        //this.data['mapGrid'] = this.mapGrid;
    }
}

export default SetTurrets;
