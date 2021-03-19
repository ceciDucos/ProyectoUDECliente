import Airplane from "../Airplane.js";
import Turret from "../Turret.js"
import HealthBar from "../HealthBar.js"
import ControlTower from "../ControlTower.js"

class Field extends Phaser.Scene {
    constructor() {
        super({key: 'Field'});
    }

    init(data) {
        this.gameId = data.gameId;
        this.team = data.team;
        this.enemyTeam = data.enemyTeam;
        this.turretQuantity = data.turretQuantity;
        this.teamBaseX = data.teamBaseX;
        this.teamBaseY = data.teamBaseY;
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
        
        
        this.savedGame = data.savedGame;
        if (this.savedGame === 1) {
            this.jugadorteamControlTowerDestroyed = data.jugadorteamControlTowerDestroyed;
            this.jugadorteamFuelDestroyed = data. jugadorteamFuelDestroyed;
            this.jugadorteamHangarDestroyed = data.jugadorteamHangarDestroyed;

            this.jugadorEnemyControlTowerDestroyed = data.jugadorEnemyControlTowerDestroyed;
            this.jugadorEnemyFuelDestroyed = data.jugadorEnemyFuelDestroyed;
            this.jugadorEnemyHangarDestroyed = data.jugadorEnemyHangarDestroyed;

            this.jugadorairplanes = data.jugadorairplanes;
            this.jugadorenemies = data.jugadorenemies;

            this.teamTurretsInfoComplete = data.teamTurretsInfoComplete;
            this.enemyTurretsInfoComplete = data.enemyTurretsInfoComplete;
        }
    }

    preload() {        
        Airplane.preload(this);
        Turret.preload(this);
    }

    create() {
        this.physics.world.setFPS(30);
        this.bootloaderScene = this.scene.get('Bootloader');
        this.map = this.add.sprite(540, 360, 'mapa', 'mapa-1.png');
        this.map.anims.play('move');


        if (this.team === 1) {
            this.base = this.physics.add.image(this.teamBaseX, this.teamBaseY, 'base', 'equipo1/baseEquipo1.png').setImmovable();
            this.teamHangar = this.add.sprite(this.teamHangarX - 2, this.teamHangarY - 2, 'base', 'equipo1/animacionHangar/animacionHangar-1.png');
            this.teamFuel = this.add.sprite(this.teamFuelX - 8, this.teamFuelY - 9, 'base',
                'amnimacionTanque/animacionTanque-1.png');
            this.teamControlTower = new ControlTower(this, this.teamControlTowerX, this.teamControlTowerY, this.team);
            this.teamControlTower.setVisible(true);
            this.teamControlTower.setActive(true);
            this.teamControlTower.setDepth(2);

            this.enemyBase = this.physics.add.image(this.enemyBaseX, this.enemyBaseY, 'base', 'equipo2/baseEquipo2.png').setImmovable().setVisible(false);
            this.enemyHangar = this.add.sprite(this.enemyHangarX - 3, this.enemyHangarY + 2, 'base',
                'equipo2/animacionHangar/animacionHangar-2.png');
            this.enemyHangar.setVisible(false);
            this.enemyFuel = this.add.sprite(this.enemyFuelX - 7, this.enemyFuelY - 6, 'base',
                'amnimacionTanque/animacionTanque-1.png');
            this.enemyFuel.setVisible(false);
            this.enemyControlTower = new ControlTower(this, this.enemyControlTowerX, this.enemyControlTowerY, this.enemyTeam);
            this.enemyControlTower.setVisible(false);
        }
        else {
            this.base = this.physics.add.image(this.teamBaseX, this.teamBaseY, 'base', 'equipo2/baseEquipo2.png').setImmovable();
            this.teamHangar = this.add.sprite(this.teamHangarX - 3, this.teamHangarY + 2, 'base',
                'equipo2/animacionHangar/animacionHangar-2.png');
            this.teamFuel = this.add.sprite(this.teamFuelX - 7, this.teamFuelY - 6, 'base',
                'amnimacionTanque/animacionTanque-1.png');
            this.teamControlTower = new ControlTower(this, this.teamControlTowerX, this.teamControlTowerY, this.team);
            this.teamControlTower.setVisible(true);
            this.teamControlTower.setActive(true);
            this.teamControlTower.setDepth(2);

            this.enemyBase = this.physics.add.image(this.enemyBaseX, this.enemyBaseY, 'base', 'equipo1/baseEquipo1.png').setImmovable().setVisible(false);
            this.enemyHangar = this.add.sprite(this.enemyHangarX - 2, this.enemyHangarY - 2, 'base',
                'equipo1/animacionHangar/animacionHangar-1.png');         
            this.enemyHangar.setVisible(false);     
            this.enemyFuel = this.add.sprite(this.enemyFuelX - 8, this.enemyFuelY - 9, 'base',
                'amnimacionTanque/animacionTanque-1.png');                
            this.enemyFuel.setVisible(false);
            this.enemyControlTower = new ControlTower(this, this.enemyControlTowerX, this.enemyControlTowerY, this.enemyTeam);
            this.enemyControlTower.setVisible(false);
                
        }

        if (this.savedGame === 1) {
            if (this.jugadorteamHangarDestroyed || this.jugadorteamFuelDestroyed || this.jugadorteamControlTowerDestroyed) {
                this.destroyBaseElement({nombrePartida: this.gameId, idJugador: this.team, hangarDestruido: this.jugadorteamHangarDestroyed,
                    tanqueCombustibleDestruido: this.jugadorteamFuelDestroyed, torretaDestruida: this.jugadorteamControlTowerDestroyed});
            }

            if (this.jugadorEnemyHangarDestroyed || this.jugadorEnemyFuelDestroyed || this.jugadorEnemyControlTowerDestroyed) {
                this.destroyBaseElement({nombrePartida: this.gameId, idJugador: this.enemyTeam, hangarDestruido: this.jugadorEnemyHangarDestroyed,
                    tanqueCombustibleDestruido: this.jugadorEnemyFuelDestroyed, torretaDestruida: this.jugadorEnemyControlTowerDestroyed});
            }
        }
        else {
            this.teamHangarDestroyed = false;
            this.teamFuelDestroyed = false;
            this.teamControlTowerDestroyed = false;
            this.enemyHangarDestroyed = false;
            this.enemyFuelDestroyed = false;
            this.enemyControlTowerDestroyed = false;
        }

        this.teamTurrets = this.add.group({ classType: Turret, maxSize: this.turretQuantity, runChildUpdate: true });
        this.enemyTurrets = this.add.group({ classType: Turret, maxSize: this.turretQuantity, runChildUpdate: true });

        this.placeTurrets(this.teamTurrets, this.teamTurretsInfo);
        
        this.placeTurrets(this.enemyTurrets, this.enemyTurretsInfo);
        this.physics.add.collider(this.teamTurrets);
        this.physics.add.collider(this.teamTurrets, this.base);

        if (this.savedGame === 1) {
            for (let i = 0; i < this.turretQuantity; i++) {
                if (this.teamTurretsInfoComplete[i].destruida) {

                    this.destroyTurret({nombrePartida: this.gameId, idJugador: this.team, idArtilleria: this.teamTurretsInfoComplete[i].idArtilleria,
                    destruida: this.teamTurretsInfoComplete[i].destruida})
                }
                else if (this.enemyTurretsInfoComplete[i].destruida) {
                    this.destroyTurret({nombrePartida: this.gameId, idJugador: this.enemyTeam, idArtilleria: this.enemyTurretsInfoComplete[i].idArtilleria,
                    destruida: this.teamTurretsInfoComplete[i].destruida})
                }
            }
        }

        this.airplanesQuantity = 4;   
        this.lateral = this.add.sprite(1181, 195, 'vistaLateral');
        this.lateral.setDepth(3);
        this.subLateral = this.add.sprite(1181, 300, 'others', 'pasarSobreTorretaVueloBajo/animacionSobreTorretaVueloBajo-8.png');
        this.subLateral.setDepth(4);
        

        this.airplanes = [];
        this.enemies = [];
        
        let frame;
        let frame2;
        let texture;
        let enemyTexture;
        let HealthBarX = 1150;
        let HealthBarY = 425;
        for (let i = 0; i < this.airplanesQuantity; i++) {
            let number;
            if (i < 4) {
                number = i + 1;
            }
            else {
                number = i + 1 - 3;
            }
            if (this.team === 1) {
                texture = 'equipo1avion' + number;
                enemyTexture = 'equipo2avion' + number;
                frame = 'animacionVolar/' + texture + '-1.png';
                frame2 = 'animacionVolar/' + enemyTexture + '-1.png';
            }
            else {                
                texture = 'equipo2avion' + number;
                enemyTexture = 'equipo1avion' + number;
                frame = 'animacionVolar/' + texture + '-1.png';
                frame2 = 'animacionVolar/' + enemyTexture + '-1.png';
            }
            this.airplanes[i] = new Airplane({ scene: this, x: this.teamHangarX, y: this.teamHangarY, texture: texture, frame: frame, team: this.team, planeNumber: (i)});
            this.enemies[i] = new Airplane({ scene: this, x: this.enemyHangarX, y: this.enemyHangarY, texture: enemyTexture, frame: frame2, team: this.enemyTeam, planeNumber: (i)});
            this.airplanes[i].setInteractive();
            this.airplanes[i].hpBar = new HealthBar(this, HealthBarX, HealthBarY, 0);
            this.airplanes[i].fuelBar = new HealthBar(this, HealthBarX, HealthBarY + 20, 1);
            this.airplanes[i].icon = this.add.image(HealthBarX - 25, HealthBarY + 18, 'others', 'vivo/' + texture + 'Vida.png');
            this.airplanes[i].bombIcon = this.add.image(HealthBarX + 15, HealthBarY + 45, 'bombIcon');
            HealthBarY += 60;
            if (this.savedGame === 1) {
                this.airplanes[i].loadAirplaneData({team: this.team, ejeX: this.jugadorairplanes[i].ejeX, ejeY: this.jugadorairplanes[i].ejeY,
                    angulo: this.jugadorairplanes[i].angulo, estado: this.jugadorairplanes[i].estado, vida: this.jugadorairplanes[i].vida,
                    combustible: this.jugadorairplanes[i].combustible, tieneBomba: this.jugadorairplanes[i].tieneBomba, visible: this.jugadorairplanes[i].visible});
    
                this.enemies[i].loadAirplaneData({team: this.enemyTeam, ejeX: this.jugadorenemies[i].ejeX, ejeY: this.jugadorenemies[i].ejeY,
                    angulo: this.jugadorenemies[i].angulo, estado: this.jugadorenemies[i].estado, vida: this.jugadorenemies[i].vida,
                    combustible: this.jugadorenemies[i].combustible, tieneBomba: this.jugadorenemies[i].tieneBomba, visible: this.jugadorenemies[i].visible});
            }
        }        

        //Botón para salir del juego
        this.menuAbandonarAbierto = false;

        this.abandonar = this.add.sprite(1257, 699, 'menu', 'botonSalir-1.png');
        this.mensajeAbandonar = this.add.sprite(540, 360, 'menu', 'mensajeFinalizarPartida.png').setVisible(false);
        this.abandonarSi = this.add.sprite(440, 520, 'menu', 'opcionSi-1.png').setVisible(false);
        this.abandonarNo = this.add.sprite(640, 520, 'menu', 'opcionNo-1.png').setVisible(false);

        this.abandonar.setInteractive().on('pointerdown', ()=>{
            if(this.menuAbandonarAbierto === false)
            {
                this.mensajeAbandonar.setVisible(true);
                this.abandonarSi.setVisible(true);
                this.abandonarNo.setVisible(true);
                this.menuAbandonarAbierto = true;   
            }
            });

        this.abandonarSi.setInteractive().on('pointerdown', ()=>{
            if(this.menuAbandonarAbierto === true)
            {
                this.mensajeAbandonar.setVisible(false);
                this.abandonarSi.setVisible(false);
                this.abandonarNo.setVisible(false);
                this.menuAbandonarAbierto = false; 
                this.bootloaderScene.abandonarPartida(this.gameId, this.team);
            }
            });

        this.abandonarNo.setInteractive().on('pointerdown', ()=>{
            if(this.menuAbandonarAbierto === true)
            {
                this.mensajeAbandonar.setVisible(false);
                this.abandonarSi.setVisible(false);
                this.abandonarNo.setVisible(false);
                this.menuAbandonarAbierto = false;
            }
            });
        
        
        //Botón para guardar el juego
        this.guardar = this.add.sprite(1200, 699, 'botonGuardar');
        this.mensajeGuardar = this.add.sprite(540, 360, 'mensajeGuardar').setVisible(false);
        this.guardar.setInteractive().on('pointerdown', ()=>{
            if(this.menuAbandonarAbierto === false)
            {
                this.menuAbandonarAbierto = true;
                this.mensajeGuardar.setVisible(true);
                //                
                this.bootloaderScene.guardarPartida(this.gameId, this.team);
                //
                this.time.addEvent({
                    delay: 1500,
                    loop: false,
                    callback: () => {
                        this.mensajeGuardar.setVisible(false);
                        this.menuAbandonarAbierto = false;
                    }
                });
                
            }
            });

        // fin boton guardar el juego

        this.cursors = this.input.keyboard.createCursorKeys();
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
        this.gameStartedImage = this.add.image(540, 360, 'menu', 'mensajePartidaEmpezada/partidaEmpezada-1.png')
        this.time.addEvent({
            delay: 2000,
            loop: false,
            callback: () => {
                this.gameStartedImage.setVisible(false);
            }
        });
        this.gameReady = true;
    }

    update(time, delta) {
        this.selectAirplane();
        for (let i = 0; i < this.airplanesQuantity; i++) {
            this.airplanes[i].update(time, delta, this);
        }
        this.teamControlTower.update(time, delta);
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
        }
        if (this.inputKeys.airplane2.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(1);
        }
        if (this.inputKeys.airplane3.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(2);
        }
        if (this.inputKeys.airplane4.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(3);
        }
        if (this.inputKeys.airplane5.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(4);
        }
        if (this.inputKeys.airplane6.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(5);
        }
        if (this.inputKeys.airplane7.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(6);
        }
        if (this.inputKeys.airplane8.isDown) {
            this.deselectTurrets();
            this.deselectAirplanes(7);
        }
    }

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
                turret.id = i;
                
                turret.x = turretsInfo[i].ejeX;
                turret.y = turretsInfo[i].ejeY;
                turret.setScale(0.15);
                turret.body.setSize(120,100);
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
            }
        }
    }

    moveEnemyAirplane(data) {
        if (data.nombrePartida === this.gameId) {
            if (data.idJugador !== this.team) {
                this.enemies[data.idAvion].moveEnemyAirplane(data);
            }
        }
    }

    blowUpAirplanes(data) {
        if (data.nombrePartida === this.gameId) {
            if (data.idJugador !== this.team) {
                this.enemies[data.idAvion].blowUpAirplane(data);
            }
            else {
                this.airplanes[data.idAvion].blowUpAirplane(data);
            }
        }
    }

    updateBullet(data) {  
        if (data.nombrePartida === this.gameId) {     
            if (data.idJugador !== this.team) {
                if (data.visible) {
                    let bullet = this.enemies[data.idElemento].bullets.get();
                    if (bullet) {
                        if (this.enemies[data.idElemento].bulletQuantity <= data.idBala) {
                            this.enemies[data.idElemento].bulletQuantity = data.idBala + 1;
                        }
                        
                        bullet.idBullet = data.idBala;
                        bullet.planeNumber = data.idElemento;
                        bullet.estadoAvion = data.altitud;
                        bullet.enemyBullet = true;
                        bullet.fire(this, data.ejeX, data.ejeY, data.angulo);
                    }
                }
                else {
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
    }

    updateAirplaneLife(data) {
        if (data.nombrePartida === this.gameId) {
            if (data.idJugador === this.team) {
                this.airplanes[data.idAvion].updateLife(data);            
            }
            else {
                this.enemies[data.idAvion].updateLife(data);
            }
        }
    }

    destroyBaseElement(data) {
        if (data.nombrePartida === this.gameId) {
            let animName;
            if (data.idJugador === this.team) { 
                if (this.team === 1) {
                    animName = 'equipo1';
                }
                else {
                    animName = 'equipo2';
                }                         
                if (!this.teamHangarDestroyed && data.hangarDestruido) { 
                    this.teamHangar.anims.play(animName + 'animacionHangarExplota',true);
                    this.teamHangarDestroyed = true;
                }
                if (!this.teamFuelDestroyed && data.tanqueCombustibleDestruido) {
                    this.teamFuel.anims.play('animacionTanqueExplota',true);
                    this.teamFuelDestroyed = true;
                }
                if (!this.teamControlTowerDestroyed && data.torretaDestruida) {
                    this.teamControlTower.destroyControlTower(animName);
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
                    this.enemyHangar.anims.play(animName + 'animacionHangarExplota',true);
                    this.enemyHangarDestroyed = true;
                }            
                if (!this.enemyFuelDestroyed && data.tanqueCombustibleDestruido) {
                    this.enemyFuel.anims.play('animacionTanqueExplota',true);
                    this.enemyFuelDestroyed = true;
                }
                if (!this.enemyControlTowerDestroyed && data.torretaDestruida) {
                    this.enemyControlTower.destroyControlTower(animName);
                    this.enemyControlTowerDestroyed = true;
                }
            }
        }
    }    

    moveTurret(data) {
        if (data.nombrePartida === this.gameId) {
            if (data.idJugador !== this.team) {
                let turret = this.enemyTurrets.getMatching('id', data.idArtilleria)[0];
                turret.moveTurret(data);
            }
        }
    }

    destroyTurret(data) {        
        if (data.nombrePartida === this.gameId) {
            if (data.idJugador === this.team) {
                let turret = this.teamTurrets.getMatching('id', data.idArtilleria)[0];
                turret.destroyTurret(data);
            }
            else {
                let turret = this.enemyTurrets.getMatching('id', data.idArtilleria)[0];
                turret.destroyTurret(data);
            }
        }
    }

    visibleEnemyElements(data) {        
        if (data.nombrePartida === this.gameId) {
            if (this.gameReady === true) {
                if (data.idJugador === this.team) {
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
        }
    }

    endGame(data) {    
        if (data.nombrePartida === this.gameId) {
            this.registry.destroy();
            this.events.off();
            this.physics.pause();  
            this.scene.pause();
            if (!data.jugadorUnoGano && !data.jugadorDosGano) {
                this.scene.launch('GameOver', { team: this.team, messageTeam1: 'Emapte', messageTeam2: 'Empate' });
            }
            else if (data.jugadorUnoGano) {
                this.scene.launch('GameOver', { team: this.team, messageTeam1: 'Ganador', messageTeam2: 'Perdedor' });
            }
            else {
                this.scene.launch('GameOver', { team: this.team, messageTeam1: 'Perdedor', messageTeam2: 'Ganador' });
            }
            return;
        }
    }

    manageFuel(data) {
        if (data.nombrePartida === this.gameId) {            
            if (data.idJugador === this.team) {
                for (let i = 0; i < data.listCombustibles.length; i++) {
                    this.airplanes[i].manageFuel(data.listCombustibles[i]);
                }
            }
        }
    }

    updateTurretBullet(data) {
        if (data.nombrePartida === this.gameId) {
            if (data.idJugador !== this.team) {
                if (data.visible) {
                    let bullet = this.enemyTurrets.getMatching('id', data.idElemento)[0].bullets.get();
                    if (bullet) {
                        if (this.enemyTurrets.getMatching('id', data.idElemento)[0].bulletQuantity <= data.idBala) {
                            this.enemyTurrets.getMatching('id', data.idElemento)[0].bulletQuantity = data.idBala + 1;
                        }
                        bullet.idBullet = data.idBala;
                        bullet.turretId = data.idElemento;
                        bullet.estadoAvion = data.altitud;
                        bullet.enemyBullet = true;
                        bullet.fireTurret(data.ejeX, data.ejeY, data.angulo, 1);
                    }
                }
                else {
                    let bullet = this.enemyTurrets.getMatching('id', data.idElemento)[0].bullets.getMatching('idBullet', data.idBala)[0];
                    bullet.setActive(false);
                    bullet.setVisible(false);
                    bullet.body.stop();
                }
            }
            else if (!data.visible){
                let bullet = this.teamTurrets.getMatching('id', data.idElemento)[0].bullets.getMatching('idBullet', data.idBala)[0];
                bullet.setActive(false);
                bullet.setVisible(false);
                bullet.body.stop();
            }
        }
    }

    updateControlTowerBullet(data) {
        if (data.nombrePartida === this.gameId) {
            if (data.idJugador !== this.team) {
                if (data.visible) {
                    let bullet = this.enemyControlTower.bullets.get();                    
                    if (bullet) {
                        if (this.enemyControlTower.bulletQuantity <= data.idBala) {
                            this.enemyControlTower.bulletQuantity = data.idBala + 1;
                        }
                        bullet.idBullet = data.idBala;
                        bullet.turretId = data.idElemento;
                        bullet.estadoAvion = data.altitud;
                        bullet.enemyBullet = true;
                        bullet.fireTurret(data.ejeX, data.ejeY, data.angulo, 2);
                    }
                }
                else {
                    let bullet = this.enemyControlTower.bullets.getMatching('idBullet', data.idBala)[0];
                    bullet.setActive(false);
                    bullet.setVisible(false);
                    bullet.body.stop();
                }
            }
            else if (!data.visible){            
                let bullet = this.teamControlTower.bullets.getMatching('idBullet', data.idBala)[0];
                bullet.setActive(false);
                bullet.setVisible(false);
                bullet.body.stop();
            }
        }
    }

    loadAirplaneData () {
        for (let i = 0; i < this.airplanes.length; i++) {
            this.airplanes[i].loadAirplaneData({team: this.team, ejeX: this.jugadorairplanes[i].ejeX, ejeY: this.jugadorairplanes[i].ejeY,
                angulo: this.jugadorairplanes[i].angulo, estado: this.jugadorairplanes[i].estado, vida: this.jugadorairplanes[i].vida,
                combustible: this.jugadorairplanes[i].combustible, tieneBomba: this.jugadorairplanes[i].tieneBomba, visible: this.jugadorairplanes[i].visible});

            this.enemies[i].loadAirplaneData({team: this.enemyTeam, ejeX: this.jugadorenemies[i].ejeX, ejeY: this.jugadorenemies[i].ejeY,
                angulo: this.jugadorenemies[i].angulo, estado: this.jugadorenemies[i].estado, vida: this.jugadorenemies[i].vida,
                combustible: this.jugadorenemies[i].combustible, tieneBomba: this.jugadorenemies[i].tieneBomba, visible: this.jugadorenemies[i].visible});
        }
    }
}

export default Field;
