class SetBase extends Phaser.Scene {
    constructor() {
        super({key: 'SetBase'});
    }

    init(data) {
        this.gameId = data.gameId;
        this.team = data.team;
        this.enemyTeam = data.enemyTeam;
        this.turretQuantity = data.turretQuantity;
    }

    preload() {        
        //this.load.multiatlas('mapa', 'assets/images/maps/mapa.json', 'assets/images/maps');        
        //this.load.image('base', 'assets/images/bomba-sprite1.png');
        //this.load.image('baseexample', 'assets/images/baseEquipo1-1sinborde.png');
    }

    create() {
      
        this.scene.bringToTop('SetBase'); 
        this.bootloaderScene = this.scene.get('Bootloader');
        this.physics.world.setFPS(30); 
        this.map = this.add.sprite(540, 360, 'mapa', 'mapa-1.png');
        this.map.anims.play('move');
        this.teamBaseX = 200;
        this.enemyBaseX = 200;
        let i = Math.floor(720 / 30);
        let j = Math.floor(1080 / 40);
        this.mapGrid = new Array(i);
        /*for (let i = 0; i < this.mapGrid.length; i++) {
            this.mapGrid[i] = new Array(j).fill(0);
        }*/
        var graphics = this.add.graphics();
        this.drawGrid1(graphics);
        
        
        this.input.on('pointerdown', this.placeBase, this);
        if(this.team === 1)
        {
            this.colocarBase =  this.add.image(540, 540, 'menu', 'mensajeColocarBase/colocarBase-1.png');
        }
        else{
            this.colocarBase =  this.add.image(540, 180, 'menu', 'mensajeColocarBase/colocarBase-1.png');
        }
        
        
        //this.input.on('pointerdown', (pointer) => {console.log('x: ' + pointer.x + ', y: ' + pointer.y)});

    }

    update(time, delta) {
    }

    pasarEscena(data) {
        if (data[0].nombrePartida === this.gameId) {
            //this.bootloaderScene = this.scene.get('Bootloader');
            let i = this.enemyTeam - 1;      
            this.enemyBaseX = data[i].baseEjeX;
            this.enemyBaseY = data[i].baseEjeY;
            this.enemyControlTowerX = data[i].torretaEjeX;
            this.enemyControlTowerY = data[i].torretaEjeY;
            this.enemyFuelX = data[i].tanqueCombustibleEjeX;
            this.enemyFuelY = data[i].tanqueCombustibleEjeY;
            this.enemyHangarX = data[i].hangarEjeX;
            this.enemyHangarY = data[i]. hangarEjeY;
            /*this.scene.start('SetTurrets', { team: this.data.team, gameId: this.data.gameId, enemyTeam: this.data.enemyTeam, 
                teamBaseX: this.data.teamBaseX, teamBaseY: this.data.teamBaseY, enemyBaseX: this.data.enemyBaseX, enemyBaseY: this.data.enemyBaseY, mapGrid: this.mapGrid});*/
            this.scene.start('SetTurrets', { gameId: this.gameId, team: this.team, enemyTeam: this.enemyTeam, turretQuantity: this.turretQuantity, 
                teamBaseX: this.teamBaseX, teamBaseY: this.teamBaseY, mapGrid: this.mapGrid, teamControlTowerX: this.teamControlTowerX, 
                teamControlTowerY: this.teamControlTowerY, teamFuelX: this.teamFuelX, teamFuelY: this.teamFuelY, teamHangarX: this.teamHangarX, 
                teamHangarY: this.teamHangarY, enemyBaseX: this.enemyBaseX, enemyBaseY: this.enemyBaseY, enemyControlTowerX: this.enemyControlTowerX, 
                enemyControlTowerY: this.enemyControlTowerY, enemyFuelX: this.enemyFuelX, enemyFuelY: this.enemyFuelY, enemyHangarX: this.enemyHangarX,
                enemyHangarY: this.enemyHangarY});
            this.bootloaderScene.setTurretsScene = this.scene.get('SetTurrets');
            //console.log(this.data);
            //this.bootloaderScene.fieldScene = this.scene.get('Field');
            //this.scene.boo.fieldScene = this.scene.get('SetBase');
        }
    }

    drawGrid1(graphics) {
        graphics.lineStyle(1, 0x004200, 0.8); //0x0000ff
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
        if (this.team === 1) {   
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

    placeBase(pointer) { //revisar si poniendo varias veces el mapa no se llena de 1s el mapGrid y limita la colocacion de torretas
        let i = Math.floor(pointer.y / 30);
        let j = Math.floor(pointer.x / 40);
        //this.mapGrid = new Array(i);
        for (let i = 0; i < this.mapGrid.length; i++) {
            this.mapGrid[i] = new Array(j).fill(0);
        }
        //let canPlace = (this.mapGrid[i][j] === 0);
        if (this.canPlace(i, j)) { 
            this.teamBaseX = j * 40 + 40 / 2;
            this.teamBaseY = i * 30 + 30 / 2; 
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {                        
                    this.mapGrid[k][l] = 1;
                }
            }
            this.mapGrid = this.mapGrid;
            if (this.team === 1) {
                this.teamControlTowerX = this.teamBaseX - 37;
                this.teamControlTowerY = this.teamBaseY + 21;
                this.teamFuelX = this.teamBaseX - 30;
                this.teamFuelY = this.teamBaseY - 18;
                this.teamHangarX = this.teamBaseX + 35;
                this.teamHangarY = this.teamBaseY - 18;
            }
            else {
                this.teamControlTowerX = this.teamBaseX + 37;
                this.teamControlTowerY = this.teamBaseY - 21;
                this.teamFuelX = this.teamBaseX + 30;
                this.teamFuelY = this.teamBaseY + 18;
                this.teamHangarX = this.teamBaseX - 35;
                this.teamHangarY = this.teamBaseY + 18;
            }
            
            if (this.base !== undefined) {
                this.base.destroy();
            }
            //this.base = this.add.sprite(this.['teamBaseX'],  this.['teamBaseY'], 'baseexample');
            if (this.team === 2) {
                this.base = this.add.sprite(this.teamBaseX,  this.teamBaseY, 'base', 'equipo2/baseEquipo2.png');
            }
            else{
                this.base = this.add.sprite(this.teamBaseX,  this.teamBaseY, 'base', 'equipo1/baseEquipo1.png');
            }
            
            
            /*if (this.team === 2) {
                this.base.setAngle(180);
            }*/


            this.bootloaderScene.colocarBase(this.gameId, this.team, this.teamBaseX, this.teamBaseY, 
                this.teamControlTowerX, this.teamControlTowerY, this.teamFuelX, this.teamFuelY, 
                this.teamHangarX, this.teamHangarY);


            //this.pasarEscena(); //moverlo a la escucha del websocket
            
            /*this.base = this.add.image(this.data['teamBaseX'], this.data['teamBaseY'], 'base');
            this.base.setScale(2);
            console.log(this.mapGrid);
            this.bomb.setActive(true);
            this.bomb.setVisible(true);*/
        }
    }

}

export default SetBase;
