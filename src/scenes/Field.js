import Airplane from "../Airplane.js";
import Turret from "../Turret.js"
class Field extends Phaser.Scene {
    constructor() {
        super({key: 'Field'});
    }

    init(data) {
        this.team = data.team;
        this.gameId = data.gameId;
        this.enemyTeam = data.enemyTeam;
        this.teamBaseX = data.teamBaseX;
        this.teamBaseY = data.teamBaseY;
        this.enemyBaseX = data.enemyBaseX;
        this.enemyBaseY = data.enemyBaseY;
        //this.mapGrid = data.mapGrid;
        this.turretsX = data.turretsX;
        this.turretsY = data.turretsY;
    }

    preload() {
        this.load.multiatlas('map', 'assets/images/maps/map_atlas.json', 'assets/images/maps');
        this.load.multiatlas('animacionLateralVolar', 'assets/images/maps/animacionLateralVolar.json', 'assets/images/maps');        
        //this.load.image('base', 'assets/images/baseEquipo1-1.png');
        this.load.image('base', 'assets/images/baseEquipo1-1sinborde.png');
        Airplane.preload(this);
        Turret.preload(this);
    }

    create() {
        this.physics.world.setFPS(30);
        this.bootloaderScene = this.scene.get('Bootloader');
        this.map = this.add.sprite(540, 360, 'map', 'mapa-1.png');
        this.frameNames = this.anims.generateFrameNames('map', {
            start: 1, end: 5, zeroPad: 1,
            prefix: 'mapa-', suffix: '.png'
        });
        this.anims.create({ key: 'move', frames: this.frameNames, frameRate: 2, repeat: -1 });
        this.map.anims.play('move');

        this.base = this.add.image(this.teamBaseX, this.teamBaseY, 'base');
        if (this.team === 2) {
            this.base.setAngle(180);
        }
        //this.base.setScale(2);

        //const map = this.make.tile({key:'map'});
        //const tileset = map.addTilesetImage('mapa', 'tiles', 1080, 720,0,0);
        //const layer1 = map.createStaticLayer('Tile layer 1')
        //this.add.image(540, 360, 'map');
        
        //this.cameras.main.setSize(1080, 720);
        //this.camera0 = this.cameras.main;
        //this.camera1 = this.cameras.add(0, 0, 200, 720);


        /*this.map = new Array(360);        /////////////descomentar!!!!!!!!!!!!!!!!!!!!!!!!!!
        for (let i = 0; i < this.map.length; i++) {
            this.map[i] = new Array(1280).fill(0); // Creating an array of size 4 and filled of 1
        }
        var graphics = this.add.graphics();
        this.drawGrid1(graphics);*/


        //this.turrets = new Turrets({scene:this,x:team1BaseX,y:team1BaseY,texture:'equipo1avion1',frame:'kek-1',team:team});

        this.turrets = this.add.group({ classType: Turret, maxSize: 11, runChildUpdate: true }); /////////////descomentar!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        /*let turretsChildren = this.turrets.getChildren(); // trata de buscar los hijos pero aun no tiene las teclas asignadas entonces falla //ahora se puso en el constructor
        console.log('paso');
        for (let i = 0; i < turretsChildren.length; i++) {
            this.assignTurretKeys(turretsChildren[i]);                
        }*/
        for(let i = 0; i < 11; i++) {
            let turret = this.turrets.get();
            if (turret) {
                turret.setActive(true);
                turret.setVisible(true);
                turret.x = this.turretsX[i];                
                turret.y = this.turretsY[i];
                turret.setScale(0.15);
            }
        }
        


        this.airplanesQuantity = 4; //limitar a 8 el parametro de entrada        
        this.loadLateralPanel();
        this.airplanes = [];
        this.enemies = [];
        let BaseX;
        let BaseY;
        let enemyBaseX;
        let enemyBaseY;
        
        let frame;
        let frame2;
        let texture;
        let enemyTexture;
        if (this.team === 1) {
            texture = 'airplaneplayer1';
            enemyTexture = 'airplaneplayer2';
        }
        else {            
            texture = 'airplaneplayer2';
            enemyTexture = 'airplaneplayer1';
        }
        for (let i = 0; i < this.airplanesQuantity; i++) {
            if (i < 4) {
                frame = 'equipo1avion' + (i + 1);
                frame2 = 'equipo2avion' + (i + 1);
            }
            else {
                frame = 'equipo1avion' + (i - 3);
                frame2 = 'equipo2avion' + (i - 3);
            }
            if (this.team === 1) {
                this.airplanes[i] = new Airplane({ scene: this, x: this.teamBaseX+35, y: this.teamBaseY-23, texture: texture, frame: frame, team: this.team, planeNumber: (i)});
                this.airplanes[i].setInteractive();
                
                /*let bulletsAux = this.airplanes[i].bullets.getChildren();
                console.log(this.airplanes);
                console.log(this.airplanes.bullets.getChildren());
                console.log('se obtuvo los childrens');
                console.log(bulletsAux);
                for(let i = 0; i < bulletsAux.length; i++) {
                    console.log('entro al for de childrens');
                    bulletsAux[i].idBullet = i;
                 }*/
                this.enemies[i] = new Airplane({ scene: this, x: this.enemyBaseX, y: this.enemyBaseY, texture: enemyTexture, frame: frame2, team: this.enemyTeam, planeNumber: (i)});
            }
            else {
                this.airplanes[i] = new Airplane({ scene: this, x: this.teamBaseX, y: this.teamBaseY, texture: texture, frame: frame2, team: this.team, planeNumber: (i)});
                this.airplanes[i].setInteractive();
                this.enemies[i] = new Airplane({ scene: this, x: this.enemyBaseX, y: this.enemyBaseY, texture: enemyTexture, frame: frame, team: this.enemyTeam, planeNumber: (i)});
            }
        }        


        
        this.cursors = this.input.keyboard.createCursorKeys();

        //Place turret by clicking on the player´s side of the map
        //this.input.on('pointerdown', this.placeTurret, this);     /////////////descomentar!!!!!!!!!!!!!!!!!!!!!!!!!!

        for (let i = 0; i < this.airplanesQuantity; i++) {
            this.assignAirplaneKeys(this.airplanes[i]);
        }

        this.input.setTopOnly(true);
        this.input.on('gameobjectdown', function (pointer, gameObject) {
            let turretsChildren = this.scene.turrets.getChildren();
            for (let i = 0; i < turretsChildren.length; i++) {
                turretsChildren[i].selected = false;                
            }
            for (let i = 0; i < this.scene.airplanesQuantity; i++) {
                this.scene.airplanes[i].selected = false;
            }
            gameObject.selected = true;
        });
        this.selectAirplaneKeys();
    }

    update(time, delta) {
        this.selectAirplane();
        for (let i = 0; i < this.airplanesQuantity; i++) {
            this.airplanes[i].update(time, delta, this);
        }
    }

    assignAirplaneKeys(airplane) {
        airplane.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            fire: Phaser.Input.Keyboard.KeyCodes.SPACE,
            ascend: Phaser.Input.Keyboard.KeyCodes.E,
            descend: Phaser.Input.Keyboard.KeyCodes.Q,
            dropBomb: Phaser.Input.Keyboard.KeyCodes.F,
        })
    }

    assignTurretKeys(turret) {
        turret.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
    }

    selectAirplaneKeys() {
        this.inputKeys = this.input.keyboard.addKeys({
            airplane1: Phaser.Input.Keyboard.KeyCodes.ONE,
            airplane2: Phaser.Input.Keyboard.KeyCodes.TWO,
            airplane3: Phaser.Input.Keyboard.KeyCodes.THREE,
            airplane4: Phaser.Input.Keyboard.KeyCodes.FOUR,
            airplane5: Phaser.Input.Keyboard.KeyCodes.FIVE,
            airplane6: Phaser.Input.Keyboard.KeyCodes.SIX,
            airplane7: Phaser.Input.Keyboard.KeyCodes.SEVEN,
            airplane8: Phaser.Input.Keyboard.KeyCodes.EIGHT,
        })
    }

    deselectTurrets() {
        let turretsChildren = this.turrets.getChildren();
        for (let i = 0; i < turretsChildren.length; i++) {
            turretsChildren[i].selected = false;                
        }
    }

    deselectAirplanes(selected) {
        for (let i = 0; i < this.airplanesQuantity; i++) {
            if (i === selected) {
                this.airplanes[i].selected = true;
            }
            else {
                this.airplanes[i].selected = false;
            }
        }
    }

    selectAirplane() {
        if (this.inputKeys.airplane1.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(0);
            /*for (let i = 0; i < this.airplanesQuantity; i++) {
                if (i === 0) {
                    this.airplanes[i].selected = true;
                }
                else {
                    this.airplanes[i].selected = false;
                }
            }*/
        }
        if (this.inputKeys.airplane2.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(1);
            /*for (let i = 0; i < this.airplanesQuantity; i++) {
                if (i === 1) {
                    this.airplanes[i].selected = true;
                }
                else {
                    this.airplanes[i].selected = false;
                }
            }*/
        }
        if (this.inputKeys.airplane3.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(2);
            /*for (let i = 0; i < this.airplanesQuantity; i++) {
                if (i === 2) {
                    this.airplanes[i].selected = true;
                }
                else {
                    this.airplanes[i].selected = false;
                }
            }*/
        }
        if (this.inputKeys.airplane4.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(3);
            /*for (let i = 0; i < this.airplanesQuantity; i++) {
                if (i === 3) {
                    this.airplanes[i].selected = true;
                }
                else {
                    this.airplanes[i].selected = false;
                }
            }*/
        }
        if (this.inputKeys.airplane5.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(4);
            /*for (let i = 0; i < this.airplanesQuantity; i++) {
                if (i === 4) {
                    this.airplanes[i].selected = true;
                }
                else {
                    this.airplanes[i].selected = false;
                }
            }*/
        }
        if (this.inputKeys.airplane6.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(5);
            /*for (let i = 0; i < this.airplanesQuantity; i++) {
                if (i === 5) {
                    this.airplanes[i].selected = true;
                }
                else {
                    this.airplanes[i].selected = false;
                }
            }*/
        }
        if (this.inputKeys.airplane7.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(6);
            /*for (let i = 0; i < this.airplanesQuantity; i++) {
                if (i === 6) {
                    this.airplanes[i].selected = true;
                }
                else {
                    this.airplanes[i].selected = false;
                }
            }*/
        }
        if (this.inputKeys.airplane8.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(7);
            /*for (let i = 0; i < this.airplanesQuantity; i++) {
                if (i === 7) {
                    this.airplanes[i].selected = true;
                }
                else {
                    this.airplanes[i].selected = false;
                }
            }*/
        }
    }

    drawGrid1(graphics) {
        graphics.lineStyle(1, 0x0000ff, 0.8);
        for (let i = 0; i < 26; i++) {
            graphics.moveTo(0, i * 30);
            graphics.lineTo(1080, i * 30);
        }
        for (let j = 0; j < 28; j++) {
            graphics.moveTo(j * 40, 0);
            graphics.lineTo(j * 40, 720);
        }
        graphics.strokePath();
    }

    /*placeTurret(pointer) {
        if (pointer.y < 360) {
            let i = Math.floor(pointer.y / 30);
            let j = Math.floor(pointer.x / 40);
            //let canPlace = (this.map[i][j] === 0);
            //if (canPlace) {
            let turret = this.turrets.get();
            if (turret) {
                turret.setActive(true);
                turret.setVisible(true);
                turret.y = i * 30 + 30 / 2;
                turret.x = j * 40 + 40 / 2;
                turret.setScale(0.5);
                //this.map[i][j] = 1;
            }
            //}
        }
    }*/

    loadLateralPanel() {
        this.lateral = this.add.sprite(1180, 360, 'animacionLateralVolar', 'equipo1avion1LateralVolar-1.png');
        this.lateral.setDepth(3);
        this.frameNamesLateral = this.anims.generateFrameNames('animacionLateralVolar', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'equipo1avion1LateralVolar-', suffix: '.png'
        });
        this.anims.create({ key: 'moveLateral', frames: this.frameNamesLateral, frameRate: 24, repeat: -1 });
        this.lateral.anims.play('moveLateral');
    }

    moveEnemyAirplane(data) {
        //if (this.bootloaderScene.gameId === data.nombrePartida) {}   //Chequear si corresponde, dependiendo de como se comporten las multiples partidas en el server
        if (data.idJugador !== this.team) {
            this.enemies[data.idAvion].moveEnemyAirplane(data);
        }
    }

    blowUpAirplanes(data) {
        if (data.idJugador !== this.team) {
            this.enemies[data.idAvion].blowUpAirplane(data);
        }
        else {
            this.airplanes[data.idAvion].blowUpAirplane(data);
        }
    }

    updateBullet(data) {
        console.log('data: ');
        console.log(data);
        if (data.visble === true) {
            console.log('entro al updatebullet true visible');
            if (data.idJugador !== this.team) {
                console.log('entro al distinto equipo');
                let bullet = this.airplanes[data.idAvion].bullets.get();
                if (bullet) {      
                    console.log('entro al hay bullet');                 
                    if (bullet.idBullet == '') {
                        console.log('entro al index de bullet');
                        bullet.idBullet = this.airplanes[data.idAvion].bulletQuantity + 1;
                    }
                    bullet.planeNumber = this.airplanes[data.idAvion].planeNumber;
                    bullet.estadoAvion = this.airplanes[data.idAvion].estado;
                    this.airplanes[data.idAvion].bulletQuantity++;
                    bullet.fire(this, this.airplanes[data.idAvion].x, this.airplanes[data.idAvion].y, this.airplanes[data.idAvion].angle);
                    this.lastFired = time + 200;
                }
            }
        }
    }
}

export default Field;
