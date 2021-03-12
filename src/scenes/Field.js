import Airplane from "../Airplane.js";
import Turret from "../Turret.js"
import HealthBar from "../HealthBar.js"

class Field extends Phaser.Scene {
    constructor() {
        super({key: 'Field'});
    }

    init(data) {
        this.gameId = data.gameId;
        this.team = data.team;
        this.enemyTeam = data.enemyTeam;
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
        this.teamTurretsInfo = data.teamTurrets;
        this.enemyTurretsInfo = data.enemyTurrets;
        this.scene.stop('SetTurrets');
        
        
        
        
        
        
        
        
        /*
        this.teamBaseX = data.teamBaseX;
        this.teamBaseY = data.teamBaseY;
        this.enemyBaseX = data.enemyBaseX;
        this.enemyBaseY = data.enemyBaseY;
        //this.mapGrid = data.mapGrid;
        this.teamTurretsX = data.turretsX;
        this.teamTurretsY = data.turretsY;

        this.teamTurrets = data.teamTurrets;
        this.enemyTurrets = data.enemyTurrets;*/
    }

    preload() {
        //this.load.multiatlas('mapa', 'assets/images/maps/mapa.json', 'assets/images/maps');
        //this.load.multiatlas('animacionLateralVolar', 'assets/images/maps/animacionLateralVolar.json', 'assets/images/maps');        
        //this.load.image('base', 'assets/images/baseEquipo1-1.png');
        //this.load.image('base', 'assets/images/baseEquipo1-1sinborde.png');
        Airplane.preload(this);
        Turret.preload(this);
    }

    create() {
        this.physics.world.setFPS(30);
        this.bootloaderScene = this.scene.get('Bootloader');
        this.map = this.add.sprite(540, 360, 'mapa', 'mapa-1.png');
        this.map.anims.play('move');

        this.teamHangarDestroyed = false;
        this.teamFuelDestroyed = false;
        this.teamControlTowerDestroyed = false;
        this.enemyHangarDestroyed = false;
        this.enemyFuelDestroyed = false;
        this.enemyControlTowerDestroyed = false;

        if (this.team === 1) {
            this.base = this.physics.add.image(this.teamBaseX, this.teamBaseY, 'base', 'equipo1/baseEquipo1.png').setImmovable();
            this.teamHangar = this.add.sprite(this.teamHangarX - 2, this.teamHangarY - 2, 'base',
                'equipo1/animacionHangar/animacionHangar-1.png');
            this.teamFuel = this.add.sprite(this.teamFuelX - 8, this.teamFuelY - 9, 'base',
                'amnimacionTanque/animacionTanque-1.png');
            this.teamControlTower = this.add.sprite(this.teamControlTowerX, this.teamControlTowerY, 'base',
                'equipo1/animacionTorre/animacionTorre-1.png');

            this.enemyBase = this.physics.add.image(this.enemyBaseX, this.enemyBaseY, 'base', 'equipo2/baseEquipo2.png').setImmovable().setVisible(false);
            this.enemyHangar = this.add.sprite(this.enemyHangarX - 3, this.enemyHangarY + 2, 'base',
                'equipo2/animacionHangar/animacionHangar-2.png');
            this.enemyHangar.setVisible(false);
            this.enemyFuel = this.add.sprite(this.enemyFuelX - 7, this.enemyFuelY - 6, 'base',
                'amnimacionTanque/animacionTanque-1.png');
            this.enemyFuel.setVisible(false);
            this.enemyControlTower = this.add.sprite(this.enemyControlTowerX - 10, this.enemyControlTowerY, 'base',
                'equipo2/animacionTorre/animacionTorre-2.png');
            this.enemyControlTower.setVisible(false);
        }
        else {
            this.base = this.physics.add.image(this.teamBaseX, this.teamBaseY, 'base', 'equipo2/baseEquipo2.png').setImmovable();
            this.teamHangar = this.add.sprite(this.teamHangarX - 3, this.teamHangarY + 2, 'base',
                'equipo2/animacionHangar/animacionHangar-2.png');
            this.teamFuel = this.add.sprite(this.teamFuelX - 7, this.teamFuelY - 6, 'base',
                'amnimacionTanque/animacionTanque-1.png');
            this.teamControlTower = this.add.sprite(this.teamControlTowerX - 10, this.teamControlTowerY, 'base',
                'equipo2/animacionTorre/animacionTorre-2.png');

            this.enemyBase = this.physics.add.image(this.enemyBaseX, this.enemyBaseY, 'base', 'equipo1/baseEquipo1.png').setImmovable().setVisible(false);
            this.enemyHangar = this.add.sprite(this.enemyHangarX - 2, this.enemyHangarY - 2, 'base',
                'equipo1/animacionHangar/animacionHangar-1.png');         
            this.enemyHangar.setVisible(false);     
            this.enemyFuel = this.add.sprite(this.enemyFuelX - 8, this.enemyFuelY - 9, 'base',
                'amnimacionTanque/animacionTanque-1.png');                
            this.enemyFuel.setVisible(false);
            this.enemyControlTower = this.add.sprite(this.enemyControlTowerX, this.enemyControlTowerY, 'base',
                'equipo1/animacionTorre/animacionTorre-1.png');
            this.enemyControlTower.setVisible(false);
                
        }




        //this.base = this.add.sprite(this.data.teamBaseX, this.data.teamBaseY, 'base', 'terreno/equipo1/baseEquipo1.png').setImmovable();
        //this.base = this.physics.add.image(this.data.teamBaseX, this.data.teamBaseY, 'base', 'terreno/equipo1/baseEquipo1.png').setImmovable();
        //this.base = this.physics.add.image(this.data.teamBaseX, this.data.teamBaseY, 'base').setImmovable();
        //this.enemyBase = this.add.sprite(this.data.teamBaseX, this.data.teamBaseY, 'base', 'terreno/equipo1/baseEquipo2.png').setImmovable();
        //this.enemyBase = this.physics.add.image(this.data.enemyBaseX, this.data.enemyBaseY, 'base', 'terreno/equipo2/baseEquipo2.png').setImmovable();
        //this.enemyBase = this.physics.add.image(this.data.enemyBaseX, this.data.enemyBaseY, 'base').setImmovable();
        /*if (this.team === 2) {
            this.base.setAngle(180);
        }
        else {
            this.enemyBase.setAngle(180);
        }*/
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


        //this.teamTurrets = new Turrets({scene:this,x:team1BaseX,y:team1BaseY,texture:'equipo1avion1',frame:'kek-1',team:team});

        this.teamTurrets = this.add.group({ classType: Turret, maxSize: 11, runChildUpdate: true }); /////////////descomentar!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.enemyTurrets = this.add.group({ classType: Turret, maxSize: 11, runChildUpdate: true }); /////////////descomentar!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        /*let turretsChildren = this.teamTurrets.getChildren(); // trata de buscar los hijos pero aun no tiene las teclas asignadas entonces falla //ahora se puso en el constructor
        console.log('paso');
        for (let i = 0; i < turretsChildren.length; i++) {
            this.assignTurretKeys(turretsChildren[i]);                
        }*/
        this.placeTurrets(this.teamTurrets, this.teamTurretsInfo);
        this.placeTurrets(this.enemyTurrets, this.enemyTurretsInfo);
        /*for(let i = 0; i < 11; i++) {
            let turret = this.teamTurrets.get();
            if (turret) {
                turret.setActive(true);
                turret.setVisible(true);
                turret.x = this.data.teamTurrets[i].ejeX;
                turret.y = this.data.teamTurrets[i].ejeY;
                turret.setScale(0.15);
                turret.body.setSize(120,100);
                //turret.setCircle(70,10,13);
                turret.setCollideWorldBounds(true);
                let bounds;
                if(this.team === 1) {    //Valores para limites de movimiento de torreta para team 1 y 2
                    bounds = new Phaser.Geom.Rectangle(40, 30, 1000, 320);
                }
                else {
                    bounds = new Phaser.Geom.Rectangle(40, 370, 1000, 320);
                }        
                turret.body.setBoundsRectangle(bounds);
                turret.setPushable(false);
                //turret.body.immovable = true;
                //turret.body.setImmovable(true);
                //this.add.graphics()   //Sirve para mostrar en pantalla los limites
                //.lineStyle(5, 0x00ffff, 0.5)
                //.strokeRectShape(turret.body.customBoundsRectangle);
            }
        }*/
        this.physics.add.collider(this.teamTurrets);
        this.physics.add.collider(this.teamTurrets, this.base);
        //this.physics.add.collider(this.base);
        /*if(scene.team === 1) {    //Valores para limites de movimiento de torreta para team 1 y 2
            bounds = new Phaser.Geom.Rectangle(540, 180, 1000, 300);
        }
        else {
            bounds = new Phaser.Geom.Rectangle(540, 540, 1000, 300);
        }        
        this.body.setBoundsRectangle(bounds)*/


        this.airplanesQuantity = 4; //limitar a 8 el parametro de entrada        
        //this.loadLateralPanel();        
        this.lateral = this.add.sprite(1181, 195, 'vistaLateral');
        this.lateral.setDepth(3);

        this.airplanes = [];
        this.enemies = [];
        
        let frame;
        let frame2;
        let texture;
        let enemyTexture;
        let HealthBarX = 1150;
        let HealthBarY = 450;
        /*if (this.team === 1) {
            texture = 'airplaneplayer1';
            enemyTexture = 'airplaneplayer2';
        }
        else {                
            texture = 'airplaneplayer2';
            enemyTexture = 'airplaneplayer1';
        }*/
        for (let i = 0; i < this.airplanesQuantity; i++) {
            /*if (i < 4) {
                frame = 'equipo1avion' + (i + 1);
                frame2 = 'equipo2avion' + (i + 1);
            }
            else {
                frame = 'equipo1avion' + (i - 3);
                frame2 = 'equipo2avion' + (i - 3);
            }*/
            let number;
            if (i < 4) {
                number = i + 1;
            }
            else {
                number = i + 1 - 3;
            }
            if (this.team === 1) {
                //animacionVolar/equipo1avion1-2.png
                texture = 'equipo1avion' + number;
                enemyTexture = 'equipo2avion' + number;
                frame = 'animacionVolar/' + texture + '-1.png'
                frame2 = 'animacionVolar/' + enemyTexture + '-1.png'
                this.airplanes[i] = new Airplane({ scene: this, x: this.teamHangarX, y: this.teamHangarY, texture: texture, frame: frame, team: this.team, planeNumber: (i)});
                this.enemies[i] = new Airplane({ scene: this, x: this.enemyHangarX, y: this.enemyHangarY, texture: enemyTexture, frame: frame2, team: this.enemyTeam, planeNumber: (i)});
            }
            else {                
                texture = 'equipo2avion' + number;
                enemyTexture = 'equipo1avion' + number;
                frame = 'animacionVolar/' + texture + '-1.png'
                frame2 = 'animacionVolar/' + enemyTexture + '-1.png'
                this.airplanes[i] = new Airplane({ scene: this, x: this.teamHangarX, y: this.teamHangarY, texture: texture, frame: frame, team: this.team, planeNumber: (i)});
                this.enemies[i] = new Airplane({ scene: this, x: this.enemyHangarX, y: this.enemyHangarY, texture: enemyTexture, frame: frame2, team: this.enemyTeam, planeNumber: (i)});
            }
            this.airplanes[i].setInteractive();
            this.airplanes[i].hpBar = new HealthBar(this, HealthBarX, HealthBarY, 0);
            this.airplanes[i].fuelBar = new HealthBar(this, HealthBarX, HealthBarY + 20, 1);
            HealthBarY += 60;
        }        


        
        this.cursors = this.input.keyboard.createCursorKeys();

        //Place turret by clicking on the player´s side of the map
        //this.input.on('pointerdown', this.placeTurret, this);     /////////////descomentar!!!!!!!!!!!!!!!!!!!!!!!!!!

        for (let i = 0; i < this.airplanesQuantity; i++) {
            this.assignAirplaneKeys(this.airplanes[i]);
        }

        this.input.setTopOnly(true);
        this.input.on('gameobjectdown', function (pointer, gameObject) {
            let turretsChildren = this.scene.teamTurrets.getChildren();            
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
        let turretsChildren = this.teamTurrets.getChildren();
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
            //this.lateral.anims.play('equipo1avion1EnHangar', true);


            /*if (this.airplanes[0].estado === 0) {
                this.lateral.anims.play('equipo1avion1EnHangar', true);
            }*/            
            /*this.lateral.on("animationcomplete", ()=>{ 
                this.lateral.anims.play('equipo1avion1EnHangar');
            });*/
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

    /*drawGrid1(graphics) {
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
    }*/

    /*placeTurret(pointer) {
        if (pointer.y < 360) {
            let i = Math.floor(pointer.y / 30);
            let j = Math.floor(pointer.x / 40);
            //let canPlace = (this.map[i][j] === 0);
            //if (canPlace) {
            let turret = this.teamTurrets.get();
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

    /*loadLateralPanel() {
        this.lateral = this.add.sprite(1180, 360, 'animacionLateralVolar', 'equipo1avion1LateralVolar-1.png');
        this.lateral.setDepth(3);
        this.frameNamesLateral = this.anims.generateFrameNames('animacionLateralVolar', {
            start: 1, end: 3, zeroPad: 1,
            prefix: 'equipo1avion1LateralVolar-', suffix: '.png'
        });
        this.anims.create({ key: 'moveLateral', frames: this.frameNamesLateral, frameRate: 24, repeat: -1 });
        this.lateral.anims.play('moveLateral');
    }*/

    placeTurrets (turrets, turretsInfo) {
        for(let i = 0; i < turretsInfo.length; i++) {
            let turret = turrets.get();
            if (turret) {
                turret.team = turretsInfo[i].idJugador;
                if (turret.team !== this.team) {
                    turret.setVisible(false);
                }
                else {
                    turret.setVisible(true);
                }
                turret.setActive(true);
                //turret.setVisible(true);
                turret.id = i;
                
                turret.x = turretsInfo[i].ejeX;
                turret.y = turretsInfo[i].ejeY;
                turret.setScale(0.15);
                turret.body.setSize(120,100);
                //turret.setCircle(70,10,13);
                turret.setCollideWorldBounds(true);
                let bounds;
                if(turret.team === 1) {    //Valores para limites de movimiento de torreta para team 1 y 2
                    bounds = new Phaser.Geom.Rectangle(40, 30, 1000, 320);
                }
                else {
                    bounds = new Phaser.Geom.Rectangle(40, 370, 1000, 320);
                }        
                turret.body.setBoundsRectangle(bounds);
                turret.setPushable(false);
                //turret.body.immovable = true;
                //turret.body.setImmovable(true);
                /*this.add.graphics()   //Sirve para mostrar en pantalla los limites
                .lineStyle(5, 0x00ffff, 0.5)
                .strokeRectShape(turret.body.customBoundsRectangle);*/
            }
        }
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
        if (data.idJugador !== this.team) {
            if (data.visible) {
                let bullet = this.enemies[data.idElemento].bullets.get();
                if (bullet) {
                    if (this.enemies[data.idElemento].bulletQuantity <= data.idBala) {
                        this.enemies[data.idElemento].bulletQuantity = data.idBala + 1;
                    }
                    
                    /*if (bullet.idBullet === '') {
                        this.enemies[data.idAvion].bulletQuantity++;
                    }
                    else if (this.enemies[data.idAvion].bulletQuantity < data.idBullet) {
                        this.enemies[data.idAvion].bulletQuantity = data.idBullet;
                    }*/
                    bullet.idBullet = data.idBala;
                    bullet.planeNumber = data.idElemento;
                    bullet.estadoAvion = data.altitud;
                    bullet.enemyBullet = true;
                    bullet.fire(this, data.ejeX, data.ejeY, data.angulo);
                }
            }
            else {
                // Indicar a que bala en especifico se necesita hacer desaparecer
                console.log('bullets');
                console.log(this.enemies);
                console.log(data);
                let bullet = this.enemies[data.idElemento].bullets.getMatching('idBullet', data.idBala)[0];
                bullet.setActive(false);
                bullet.setVisible(false);
                bullet.body.stop();
            }
        }
        else if (!data.visible){
            let bullet = this.airplanes[data.idElemento].bullets.getMatching('idBullet', data.idBala)[0];
            bullet.setActive(false);
            bullet.setVisible(false);
            bullet.body.stop();
        }
    }

    updateAirplaneLife(data) {
        if (data.idJugador === this.team) {
            this.airplanes[data.idAvion].updateLife(data);            
        }
        else {
            this.enemies[data.idAvion].updateLife(data);
        }        
    }

    destroyBaseElement(data) {
        let animName;
        if (data.idJugador === this.team) { 
            if (this.team === 1) {
                animName = 'equipo1';
            }
            else {
                animName = 'equipo2';
            }                         
            if (!this.teamHangarDestroyed && data.hangarDestruido) { 
                /*if (this.team === 1) {
                    animName = 'equipo1animacionHangarExplota';
                }
                else {
                    animName = 'equipo2animacionHangarExplota';
                }*/
                this.teamHangar.anims.play(animName + 'animacionHangarExplota',true);
                this.teamHangarDestroyed = true;
            }
            if (!this.teamFuelDestroyed && data.tanqueCombustibleDestruido) {
                this.teamFuel.anims.play('animacionTanqueExplota',true);
                this.teamFuelDestroyed = true;
            }
            if (!this.teamControlTowerDestroyed && data.torretaDestruida) {
                this.teamControlTower.anims.play(animName + 'animacionTorreExplota',true);
                this.teamControlTowerDestroyed = true;
            }
        }
        else {               
            if (this.enemyTeam === 1) {
                animName = 'equipo1';
            }
            else {
                animName = 'equipo2';
            }   
            if (!this.enemyHangarDestroyed && data.hangarDestruido) {
                /*if (this.enemyTeam === 1) {
                    animName = 'equipo1animacionHangarExplota';
                }
                else {
                    animName = 'equipo2animacionHangarExplota';
                }*/
                this.enemyHangar.anims.play(animName + 'animacionHangarExplota',true);
                this.enemyHangarDestroyed = true;
            }            
            if (!this.enemyFuelDestroyed && data.tanqueCombustibleDestruido) {
                this.enemyFuel.anims.play('animacionTanqueExplota',true);
                this.enemyFuelDestroyed = true;
            }
            if (!this.enemyControlTowerDestroyed && data.torretaDestruida) {
                this.enemyControlTower.anims.play(animName + 'animacionTorreExplota',true);
                this.enemyControlTowerDestroyed = true;
            }
        }
    }    

    moveTurret(data) {
        if (data.idJugador !== this.team) {
            let turret = this.enemyTurrets.getMatching('id', data.idArtilleria)[0];
            turret.moveTurret(data);
        }
    }

    destroyTurret(data) {
        if (data.idJugador === this.team) {
            let turret = this.teamTurrets.getMatching('id', data.idArtilleria)[0];
            turret.destroyTurret(data);
        }
        else {
            let turret = this.enemyTurrets.getMatching('id', data.idArtilleria)[0];
            turret.destroyTurret(data);
        }
    }

    /*visibleEnemyAirplane(data) {
        if (data.idJugador !== this.team) {
            this.enemies[data.idAvion].visibleEnemyAirplane(data.visible);
        }
    }*/

    visibleEnemyElements(data) {
        if (data.idJugador === this.team) {
            console.log('datos visibles');
            console.log(data);
            this.enemyBase.setVisible(data.visibilidadBase);
            this.enemyHangar.setVisible(data.visibilidadBase);
            this.enemyControlTower.setVisible(data.visibilidadBase);
            this.enemyFuel.setVisible(data.visibilidadBase);
            let turrets = this.enemyTurrets.getChildren();
            for (let i = 0; i < turrets.length; i++) {
                turrets[i].visibleEnemyTurret(data.visibilidadArtilleria[i]);
            }
            for (let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].visibleEnemyAirplane(data.visibilidadAviones[i]);
            }
        }
    }

    endGame(data) {
        console.log('llego el gameover');     
        if (!data.jugadorUnoGano && !data.jugadorDosGano) {
            console.log('entro al empate');
            this.scene.launch('GameOver', { team: this.team, messageTeam1: 'Emapte', messageTeam2: 'Empate' });
        }
        else if (data.jugadorUnoGano) {
            console.log('entro al ganador1');
            this.scene.launch('GameOver', { team: this.team, messageTeam1: 'Ganador', messageTeam2: 'Perdedor' });
        }
        else {
            console.log('entro al ganador2');
            this.scene.launch('GameOver', { team: this.team, messageTeam1: 'Perdedor', messageTeam2: 'Ganador' });
        }
        return;
    }
}

export default Field;
