class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
    }

    create() {

        this.fondo = this.add.sprite(640, 360, 'fondoPrincipal');
        this.team;
        this.gameId;
        this.enemyTeam;
        this.teamBaseX;
        this.teamBaseY;
        this.enemyBaseX;
        this.enemyBaseY;
        this.stompClient = null;
        this.gameStarted = false;

        this.element = this.add.dom(640, 720).createFromCache('nameform');
        this.help = this.add.sprite(1230, 689, 'menu', 'botonAyuda-1.png');
        this.hojaAyuda = this.add.image(640, 460, 'menu', 'papelAyuda-1.png');
        this.btnCerrarAyuda = this.add.image(820, 580, 'menu', 'botonVolver-1.png');
        this.showOptions();        
        this.mensajeError = this.add.text(480, 690, '', { fontFamily: 'fantasy', fill: '#FF2D00' });
    }

    update(time, delta) {

    }

    showOptions() {
        this.element.addListener('click');

        this.element.on('click', function (event) {

            if (event.target.name === 'createButton')
            {
                var playerNameInput = this.getChildByName('nameField');
                var gameIdInput = this.getChildByName('gameIdField');

                //  Have they entered anything?
                if (playerNameInput.value !== '' && gameIdInput.value !== '')
                {
                    this.scene.mensajeError.setText('');
                    this.scene.gameId = gameIdInput.value;
                    this.scene.playerName = playerNameInput.value;
                    //  Turn off the click events
                    this.removeListener('click');

                    //  Hide the login element
                    this.setVisible(false);
                    this.scene.help.setVisible(false);

                    this.scene.crearPartidaEnEspera();
                    this.scene.waitingForOtherPlayer =  this.scene.add.image(640, 360, 'menu', 'mensajeAguardarContrincante/aguardarContrincante.png');
                    
                }
                else
                {
                    this.removeListener('click');
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: this,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true,
                        onComplete: ()=>{this.scene.element.addListener('click');}
                        
                    });
                    this.scene.mensajeError.x=480;
                    this.scene.mensajeError.setText('Los campos de Jugador y Partida son obligatorios');                    
                }
            }
            else if (event.target.name === 'joinButton')
            {
                var playerNameInput = this.getChildByName('nameField');
                var gameIdInput = this.getChildByName('gameIdField');

                //  Have they entered anything?
                if (playerNameInput.value !== '')                {

                    this.scene.mensajeError.setText('');
                    this.scene.gameId = gameIdInput.value;
                    this.scene.playerName = playerNameInput.value;
                    //  Turn off the click events
                    this.removeListener('click');

                    //  Hide the login element
                    this.setVisible(false);
                    this.scene.help.setVisible(false);
                    this.scene.unirseAPartida();
                }
                else
                {
                    this.removeListener('click');
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: this,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true,
                        onComplete: ()=>{this.scene.element.addListener('click');}
                    });
                    this.scene.mensajeError.x=550;
                    this.scene.mensajeError.setText('El campo Jugador es obligatorio');  
                }
            }
            else if (event.target.name === 'loadButton')
            {
                var playerNameInput = this.getChildByName('nameField');
                var gameIdInput = this.getChildByName('gameIdField');

                //  Have they entered anything?
                if (playerNameInput.value !== '' && gameIdInput.value !== '')
                {
                    this.scene.mensajeError.setText('');
                    this.scene.gameId = gameIdInput.value;
                    this.scene.playerName = playerNameInput.value;
                    //CODIGO PARA CARGAR PARTIDA
                }
                else
                {
                    this.removeListener('click');
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: this,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true,
                        onComplete: ()=>{this.scene.element.addListener('click');}
                    });
                    this.scene.mensajeError.x=480;
                    this.scene.mensajeError.setText('Los campos de Jugador y Partida son obligatorios');  
                }
            }

        });

        this.tweens.add({
            targets: this.element,
            y: 450,
            duration: 3000,
            ease: 'Power3'
        });

        this.menuaAyudaAbierto = false;    

        this.hojaAyuda.setVisible(false);

        this.btnCerrarAyuda.setVisible(false);
        
        this.help.setInteractive().on('pointerdown', ()=>{
            if(this.menuaAyudaAbierto === false)
            {
                this.element.setVisible(false);
                this.hojaAyuda.setVisible(true);
                this.btnCerrarAyuda.setVisible(true);
                this.menuaAyudaAbierto = true; 
                this.help.setVisible(false);
            }
            });

        this.btnCerrarAyuda.setInteractive().on('pointerdown', ()=>{
            if(this.menuaAyudaAbierto === true)
            {
                this.hojaAyuda.setVisible(false);
                this.btnCerrarAyuda.setVisible(false);
                this.menuaAyudaAbierto = false;
                this.element.setVisible(true);
                this.help.setVisible(true);     
            }
        });
    }

    pasarEscena() {
        this.scene.start('SetBase', { gameId: this.gameId, team: this.team, enemyTeam: this.enemyTeam, turretQuantity: this.turretQuantity });
        this.setBaseScene = this.scene.get('SetBase');
    }

    

    crearPartidaEnEspera() {
        //establezco la conexion y especifico la funcion a ejecutar una vez finalizada la conexion
        var socket = new SockJS('http://127.0.0.1:8091/bombs-away');
        var self = this;
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            //me subscribo al canal de datos
            stompClient.subscribe('/topic/user', function (greeting) {
                var data = JSON.parse(greeting["body"]);
                if (data.accion === 'Bootloader' && data.nombrePartida === self.gameId) {
                    self.turretQuantity = data.maxArtilleria;
                    self.waitingForOtherPlayer.setVisible(false);
                    self.pasarEscena();
                }
            });
            stompClient.subscribe('/topic/aviones-enemigos', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/estallar-aviones', (greeting) => self.fieldScene.blowUpAirplanes(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/posicion-bala', (greeting) => self.fieldScene.updateBullet(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/bajar-vida-avion', (greeting) => self.fieldScene.updateAirplaneLife(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/actualizar-bases', (greeting) => self.setBaseScene.pasarEscena(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/estado-elementos-base', (greeting) => self.fieldScene.destroyBaseElement(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/actualizar-artilleria', (greeting) => self.setTurretsScene.pasarEscena(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/destruir-artilleria', (greeting) => self.fieldScene.destroyTurret(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/resultado-partida', (greeting) => self.fieldScene.endGame(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/artilleria-movida', (greeting) => self.fieldScene.moveTurret(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/elementos-visibles', (greeting) => self.fieldScene.visibleEnemyElements(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/combustible-avion', (greeting) => self.fieldScene.manageFuel(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/posicion-bala-artilleria', (greeting) => self.fieldScene.updateTurretBullet(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/posicion-bala-torre', (greeting) => self.fieldScene.updateControlTowerBullet(JSON.parse(greeting["body"])));
            //solicito la creacion de una nueva partida
            stompClient.send("/app/nueva-partida", {}, JSON.stringify({
                'nombrePartida': self.gameId,
                'nombreJugador': self.playerName,
            }));
        });
        this.team = 1;
        this.enemyTeam = 2;
        this.gameStarted = true;
    }

    unirseAPartida() {
        var socket = new SockJS('http://127.0.0.1:8091/bombs-away');
        var self = this;
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            //me subscribo al canal de datos
            stompClient.subscribe('/topic/user', function (greeting) {
                var data = JSON.parse(greeting["body"]);
                if (data.accion === 'Bootloader') {
                    if (!self.gameStarted) {
                        self.gameId = data.nombrePartida;
                        self.turretQuantity = data.maxArtilleria;
                        self.gameStarted = true;
                        self.pasarEscena();
                    }
                }
                else if (data.nombrePartida !== null) {
                    self.element.setVisible(true);
                    self.help.setVisible(true);
                    self.showOptions();
                }
            });
            stompClient.subscribe('/topic/aviones-enemigos', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/estallar-aviones', (greeting) => self.fieldScene.blowUpAirplanes(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/posicion-bala', (greeting) => self.fieldScene.updateBullet(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/bajar-vida-avion', (greeting) => self.fieldScene.updateAirplaneLife(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/actualizar-bases', (greeting) => self.setBaseScene.pasarEscena(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/estado-elementos-base', (greeting) => self.fieldScene.destroyBaseElement(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/actualizar-artilleria', (greeting) => self.setTurretsScene.pasarEscena(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/destruir-artilleria', (greeting) => self.fieldScene.destroyTurret(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/resultado-partida', (greeting) => self.fieldScene.endGame(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/artilleria-movida', (greeting) => self.fieldScene.moveTurret(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/elementos-visibles', (greeting) => self.fieldScene.visibleEnemyElements(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/combustible-avion', (greeting) => self.fieldScene.manageFuel(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/posicion-bala-artilleria', (greeting) => self.fieldScene.updateTurretBullet(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/posicion-bala-torre', (greeting) => self.fieldScene.updateControlTowerBullet(JSON.parse(greeting["body"])));
            
            //solicito unirme a una partida
            stompClient.send("/app/unirse-a-partida", {}, JSON.stringify({
                'nombreJugador': self.playerName,
            }));
        });
        this.team = 2;
        this.enemyTeam = 1;
    }

    moverAvion(gameId, team, x, y, angle, planeNumber, estado, vida, combustible, tieneBomba, visible) {
        stompClient.send("/app/mover-avion", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idAvion': planeNumber,
            'ejeX': x,
            'ejeY': y,
            'angulo': angle,
            'estado': estado,
            'vida': vida,
            'combustible': combustible,
            'tieneBomba': tieneBomba,
            'visible': visible,
        }));
    }

    moverBala(gameId, team, planeNumber, idBullet, estadoAvion, x, y, angle, visible) {
        stompClient.send("/app/disparo-bala", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idElemento': planeNumber,
            'idBala': idBullet,
            'altitud': estadoAvion,
            'ejeX': x,
            'ejeY': y,
            'angulo': angle,
            'visible': visible,
        }));
    }

    dispararBala(gameId, team, planeNumber, idBullet, estadoAvion, x, y, angle, visible) {
        stompClient.send("/app/primer-disparo", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idElemento': planeNumber,
            'idBala': idBullet,
            'altitud': estadoAvion,
            'ejeX': x,
            'ejeY': y,
            'angulo': angle,
            'visible': visible,
        }));
    }

    colocarBase(gameId, team, baseX, BaseY, controlTowerX, controlTowerY, fuelX, fuelY, hangarX, hangarY) { //cambiar los names del json
        stompClient.send("/app/colocar-base", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'baseEjeX': baseX,
            'baseEjeY': BaseY,
            'torretaEjeX': controlTowerX,
            'torretaEjeY': controlTowerY,
            'tanqueCombustibleEjeX': fuelX,
            'tanqueCombustibleEjeY': fuelY,
            'hangarEjeX': hangarX,
            'hangarEjeY': hangarY,
        }));
    }

    tirarBomba(gameId, team, planeNumber, x, y) {
        stompClient.send("/app/tirar-bomba", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'avionId': planeNumber,
            'ejeX': x,
            'ejeY': y,
        }));
    }

    colocarTorreta(gameId, team, idTurret, x, y, angulo, destroy) {
        stompClient.send("/app/colocar-artilleria", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idArtilleria': idTurret,
            'ejeX': x,
            'ejeY': y,
            'angulo': angulo,
            'destruida': destroy,
        }));
    }

    moverTorreta(gameId, team, idTurret, x, y, angulo, destroy) {
        stompClient.send("/app/mover-artilleria", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idArtilleria': idTurret,
            'ejeX': x,
            'ejeY': y,
            'angulo': angulo,
            'destruida': destroy,
        }));
    }


    refuel(gameId, team, x, y, angle, planeNumber, estado, vida, combustible, tieneBomba, visible) {
        stompClient.send("/app/recargar-combustible", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idAvion': planeNumber,
            'ejeX': x,
            'ejeY': y,
            'angulo': angle,
            'estado': estado,
            'vida': vida,
            'combustible': combustible,
            'tieneBomba': tieneBomba,
            'visible': visible,
        }));
    }
    
    dispararBalaTorreta(gameId, team, turretID, idBullet, estadoAvion, x, y, angle, visible) {
        stompClient.send("/app/primer-disparo-artilleria", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idElemento': turretID,
            'idBala': idBullet,
            'altitud': estadoAvion,
            'ejeX': x,
            'ejeY': y,
            'angulo': angle,
            'visible': visible,
        }));
    }

    moverBalaTorreta(gameId, team, turretID, idBullet, estadoAvion, x, y, angle, visible) {
        stompClient.send("/app/disparo-bala-artilleria", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idElemento': turretID,
            'idBala': idBullet,
            'altitud': estadoAvion,
            'ejeX': x,
            'ejeY': y,
            'angulo': angle,
            'visible': visible,
        }));
    }

    dispararBalaControlTower(gameId, team, turretID, idBullet, estadoAvion, x, y, angle, visible) {
        stompClient.send("/app/primer-disparo-torre", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idElemento': turretID,
            'idBala': idBullet,
            'altitud': estadoAvion,
            'ejeX': x,
            'ejeY': y,
            'angulo': angle,
            'visible': visible,
        }));
    }

    moverBalaControlTower(gameId, team, turretID, idBullet, estadoAvion, x, y, angle, visible) {
        stompClient.send("/app/disparo-bala-torre", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idElemento': turretID,
            'idBala': idBullet,
            'altitud': estadoAvion,
            'ejeX': x,
            'ejeY': y,
            'angulo': angle,
            'visible': visible,
        }));
    }

    guardarPartida(gameId, team) {
        stompClient.send("/app/guardar-partida", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugadorGuarda': team,
        }));
    }

    abandonarPartida(gameId, team) {
        stompClient.send("/app/abandonar-partida", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugadorAbandona': team,
        }));
    }
}

export default Bootloader;
