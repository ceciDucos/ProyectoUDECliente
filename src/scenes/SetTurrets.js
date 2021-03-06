import Turret from "../Turret.js"
class SetTurrets extends Phaser.Scene {
    constructor() {
        super({key: 'SetTurrets'});
    }

    init(data) {
        this.gameId = data.gameId;
        this.team = data.team;
        this.enemyTeam = data.enemyTeam;
        this.turretQuantity = data.turretQuantity;
        this.teamBaseX = data.teamBaseX;
        this.teamBaseY = data.teamBaseY;
        this.mapGrid = data.mapGrid;
        this.teamControlTowerX = data.teamControlTowerX;
        this.teamControlTowerY = data.teamControlTowerY;
        this.teamFuelX = data.teamFuelX;
        this.teamFuelY = data.teamFuelY;
        this.teamHangarX = data.teamHangarX;
        this.teamHangarY = data.teamHangarY;
        this.enemyBaseX = data.enemyBaseX;
        this.enemyBaseY = data.enemyBaseY;
        this.enemyControlTowerX = data.enemyControlTowerX;
        this.enemyControlTowerY = data.enemyControlTowerY;
        this.enemyFuelX = data.enemyFuelX;
        this.enemyFuelY = data.enemyFuelY;
        this.enemyHangarX = data.enemyHangarX;
        this.enemyHangarY = data.enemyHangarY;
    }

    preload() {
    }

    create() {              
        this.scene.bringToTop('SetTurrets'); 
        this.bootloaderScene = this.scene.get('Bootloader');
        this.turretsX = [];
        this.turretsY = [];
        this.turretCount = 0;
        this.physics.world.setFPS(30); 
        this.map = this.add.sprite(540, 360, 'mapa', 'mapa-1.png');
        this.map.anims.play('move');
        var graphics = this.add.graphics();
        this.drawGrid1(graphics);

        if (this.team === 2) {
            this.base = this.add.sprite(this.teamBaseX, this.teamBaseY, 'base', 'equipo2/baseEquipo2.png');
        }
        else{
            this.base = this.add.sprite(this.teamBaseX, this.teamBaseY, 'base', 'equipo1/baseEquipo1.png');
        }

        this.turrets = this.add.group({ classType: Turret, maxSize: this.turretQuantity, runChildUpdate: true });
        this.input.on('pointerdown', this.placeTurret, this);   //Hay que ver como hacer el loop de las 11 torretas con el evento del puntero para luego pasar a la escena Field. No hacerlo en el placeTurret porque es un solo evento de click
        if(this.team === 1)
        {
            this.colocarArtilleria =  this.add.image(540, 540, 'menu', 'mensajeColocarArtilleria/colocarArtilleria-1.png');
        }
        else{
            this.colocarArtilleria =  this.add.image(540, 180, 'menu', 'mensajeColocarArtilleria/colocarArtilleria-1.png');
        }
    }

    update(time, delta) {
        if (this.turretCount === 11) {
            this.input.off('pointerdown', this.placeTurret, this);
        }
    }

    pasarEscena(data) {
        if (data[0][0].nombrePartida === this.gameId) {
            if (this.team === data[0][0].idJugador) {
                this.teamTurrets = data[0];
                this.enemyTurrets = data[1];
            }
            else {
                this.teamTurrets = data[1];
                this.enemyTurrets = data[0];
            }
            this.scene.start('Field', { gameId: this.gameId, team: this.team, enemyTeam: this.enemyTeam, teamBaseX: this.teamBaseX, teamBaseY: this.teamBaseY,
                mapGrid: this.mapGrid, teamControlTowerX: this.teamControlTowerX, teamControlTowerY: this.teamControlTowerY, teamFuelX: this.teamFuelX,
                teamFuelY: this.teamFuelY, teamHangarX: this.teamHangarX, teamHangarY: this.teamHangarY, enemyBaseX: this.enemyBaseX, enemyBaseY: this.enemyBaseY,
                enemyControlTowerX: this.enemyControlTowerX, enemyControlTowerY: this.enemyControlTowerY, enemyFuelX: this.enemyFuelX, enemyFuelY: this.enemyFuelY,
                enemyHangarX: this.enemyHangarX, enemyHangarY: this.enemyHangarY, teamTurrets: this.teamTurrets, enemyTurrets: this.enemyTurrets,
                turretQuantity: this.turretQuantity});
            this.bootloaderScene.fieldScene = this.scene.get('Field');
        }
    }

    drawGrid1(graphics) {
        graphics.lineStyle(1, 0x004200, 0.8);
        if (this.team === 1) {
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
        let available = false;
        if (this.team === 1) {   
            if (j >= 1 && j <= 25 && i >= 1 && i <= 10) {
                if (this.mapGrid[i][j] !== 1) {
                    available = true;
                }
            }
        }
        else {  
            if (j >= 1 && j <= 25 && i >= 13 && i <= 22) {
                if (this.mapGrid[i][j] !== 1) {
                    available = true;
                }
            }
        }
        return available;
    }

    placeTurret(pointer) {
        let i = Math.floor(pointer.y / 30);
        let j = Math.floor(pointer.x / 40);      
        if (this.canPlace(i, j)) {
            this.turretId = this.turretCount;
            this.turretsX[this.turretId] =  j * 40 + 40 / 2;
            this.turretsY[this.turretId] = i * 30 + 30 / 2;  
            this.mapGrid[i][j] = 1;
            this.turret = this.add.image(this.turretsX[this.turretId], this.turretsY[this.turretId], 'base', 'animacionArtilleria/artilleriaMover-1.png');
            this.turret.setScale(0.15);
            this.bootloaderScene.colocarTorreta(this.gameId, this.team, this.turretId, 
                this.turretsX[this.turretId], this.turretsY[this.turretId], 0, false);
            this.turretCount++;
        }
    }
}

export default SetTurrets;
