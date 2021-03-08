class SetBase extends Phaser.Scene {
    constructor() {
        super({key: 'SetBase'});
    }

    init(data) {
        this.data = data;
    }

    preload() {        
        //this.load.multiatlas('mapa', 'assets/images/maps/mapa.json', 'assets/images/maps');        
        //this.load.image('base', 'assets/images/bomba-sprite1.png');
        this.load.image('baseexample', 'assets/images/baseEquipo1-1sinborde.png');
    }

    create() {      
        this.bootloaderScene = this.scene.get('Bootloader');
        this.physics.world.setFPS(30); 
        this.map = this.add.sprite(540, 360, 'mapa', 'mapa-1.png');
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
        
        //this.input.on('pointerdown', (pointer) => {console.log('x: ' + pointer.x + ', y: ' + pointer.y)});

    }

    update(time, delta) {
    }

    pasarEscena(data) {
        //this.bootloaderScene = this.scene.get('Bootloader');
        console.log('antes de pasar a setTurret');
        console.log(data);
        let i = this.data.enemyTeam - 1;      
        this.data['enemyBaseX'] = data[i].baseEjeX
        this.data['enemyBaseY'] = data[i].baseEjeY
        this.data['enemyControlTowerX'] = data[i].torretaEjeX
        this.data['enemyControlTowerY'] = data[i].torretaEjeY
        this.data['enemyFuelX'] = data[i].tanqueCombustibleEjeX
        this.data['enemyFuelY'] = data[i].tanqueCombustibleEjeY
        this.data['enemyHangarX'] = data[i].hangarEjeX
        this.data['enemyHangarY'] = data[i]. hangarEjeY
        /*this.scene.start('SetTurrets', { team: this.data.team, gameId: this.data.gameId, enemyTeam: this.data.enemyTeam, 
            teamBaseX: this.data.teamBaseX, teamBaseY: this.data.teamBaseY, enemyBaseX: this.data.enemyBaseX, enemyBaseY: this.data.enemyBaseY, mapGrid: this.mapGrid});*/
        this.scene.start('SetTurrets', this.data);
        this.bootloaderScene.setTurretsScene = this.scene.get('SetTurrets');
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
            if (this.data.team === 1) {
                this.data['teamControlTowerX'] = this.data['teamBaseX'] - 37;
                this.data['teamControlTowerY'] = this.data['teamBaseY'] + 21;
                this.data['teamFuelX'] = this.data['teamBaseX'] - 30;
                this.data['teamFuelY'] = this.data['teamBaseY'] - 18;
                this.data['teamHangarX'] = this.data['teamBaseX'] + 35;
                this.data['teamHangarY'] = this.data['teamBaseY'] - 18;
            }
            else {
                this.data['teamControlTowerX'] = this.data['teamBaseX'] + 37;
                this.data['teamControlTowerY'] = this.data['teamBaseY'] - 21;
                this.data['teamFuelX'] = this.data['teamBaseX'] + 30;
                this.data['teamFuelY'] = this.data['teamBaseY'] + 18;
                this.data['teamHangarX'] = this.data['teamBaseX'] - 35;
                this.data['teamHangarY'] = this.data['teamBaseY'] + 18;
            }
            
            //this.add.sprite(this.data['teamBaseX'],  this.data['teamBaseY'], 'baseexample');


            this.bootloaderScene.colocarBase(this.data.gameId, this.data.team, this.data['teamBaseX'], this.data['teamBaseY'], 
                this.data['teamControlTowerX'], this.data['teamControlTowerY'], this.data['teamFuelX'], this.data['teamFuelY'], 
                this.data['teamHangarX'], this.data['teamHangarY']);


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
