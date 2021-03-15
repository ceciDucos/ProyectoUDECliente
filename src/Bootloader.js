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
        
        
        

        /*this.btnCerrarAyuda.setInteractive().on('pointerdown', ()=>{
            this.help.hojaAyuda.destroy();
            this.btnCerrarAyuda.destroy();
            this.menuaAyudaAbierto === false;
        });*/




        //this.createServer = this.add.text(10, 10, 'Crear partida', { fill: '#0f0' });
        //this.joinServer = this.add.text(200, 10, 'Unirse a partida', { fill: '#0f0' });
        //this.entrarjuego = this.add.text(400, 10, 'Entrar al juego', { fill: '#0f0' });
        //this.createServer.setInteractive().on('pointerdown', this.crearPartidaEnEspera, this);
        //this.joinServer.setInteractive().on('pointerdown', this.unirseAPartida, this);
        //this.entrarjuego.setInteractive().on('pointerdown', this.pasarEscena, this);


        /*this.h1 = this.add.dom(640, 200, 'h1', null, 'Bombs-Away');

        this.h1.setClassName('chrome');
        this.tweens.add({
            targets: [ this.h1 ],
            y: 120,
            duration: 1000,
            ease: 'Sine.easeInOut',
            loop: -1,
            yoyo: true
        });*/

        //this.musica = this.sound.add('musicaPrincipal');
        //this.musica.play();
        this.element = this.add.dom(640, 720).createFromCache('nameform');
        this.help = this.add.sprite(1230, 689, 'menu', 'botonAyuda-1.png');
        this.hojaAyuda = this.add.image(640, 460, 'menu', 'papelAyuda-1.png');
        this.btnCerrarAyuda = this.add.image(820, 580, 'menu', 'botonVolver-1.png');
        this.showOptions();        
        this.mensajeError = this.add.text(480, 690, '', { fontFamily: 'fantasy', fill: '#FF2D00' });
        

        //this.element.addListener('click');
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
                    //this.scene.h1.setVisible(false);
                    this.scene.help.setVisible(false);

                    this.scene.crearPartidaEnEspera();
                    //var text = this.scene.add.text(640, 360, 'Esperando por un rival', { color: 'white', fontSize: '20px '});
                    this.scene.waitingForOtherPlayer =  this.scene.add.image(640, 360, 'menu', 'mensajeAguardarContrincante/aguardarContrincante.png');
                }
                else
                {
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: this,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
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
                if (playerNameInput.value !== '')
                {
                    this.scene.mensajeError.setText('');
                    this.scene.gameId = gameIdInput.value;
                    this.scene.playerName = playerNameInput.value;
                    //  Turn off the click events
                    this.removeListener('click');

                    //  Hide the login element
                    this.setVisible(false);
                    //this.scene.h1.setVisible(false);
                    this.scene.help.setVisible(false);

                    this.scene.unirseAPartida();
                }
                else
                {
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: this,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
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
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: this,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
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
        /*this.scene.launch('Field', { team: this.team, gameId: this.gameId, enemyTeam: this.enemyTeam, teamBaseX: this.teamBaseX, teamBaseY: this.teamBaseY,
            enemyBaseX: this.enemyBaseX, enemyBaseY: this.enemyBaseY});
        this.fieldScene = this.scene.get('Field');*/
        //this.createServer.removeInteractive();
        //this.joinServer.removeInteractive();
        //this.entrarjuego.removeInteractive();
        /*this.scene.launch('SetBase', { team: this.team, gameId: this.gameId, enemyTeam: this.enemyTeam, teamBaseX: this.teamBaseX, teamBaseY: this.teamBaseY,
            enemyBaseX: this.enemyBaseX, enemyBaseY: this.enemyBaseY});*/
        //this.musica.pause();
        this.scene.start('SetBase', { gameId: this.gameId, team: this.team, enemyTeam: this.enemyTeam, turretQuantity: this.turretQuantity });
        this.setBaseScene = this.scene.get('SetBase');
    }

    crearPartidaEnEspera() {
        //establezco la conexion y especifico la funcion a ejecutar una vez finalizada la conexion
        var socket = new SockJS('http://bombs-away.servegame.com:8091/bombs-away');
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
            //stompClient.subscribe('/topic/mover-avion', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
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
                //'nombrePartida': 'PartidaPrueba',
                //'nombreJugador': 'Fede',
                'nombrePartida': self.gameId,
                'nombreJugador': self.playerName,
            }));
        });
        this.team = 1;
        //this.gameId = 'PartidaPrueba';
        this.enemyTeam = 2;
        this.gameStarted = true;
        //this.teamBaseX = 540;
        //this.teamBaseY = 50;
        //this.enemyBaseX = 540;
        //this.enemyBaseY = 670;
    }

    unirseAPartida() {
        var socket = new SockJS('http://bombs-away.servegame.com:8091/bombs-away');
        var self = this;
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            //me subscribo al canal de datos
            stompClient.subscribe('/topic/user', function (greeting) {
                var data = JSON.parse(greeting["body"]);
                console.log(data);
                console.log(data.nombrePartida);
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
            //stompClient.subscribe('/topic/mover-avion', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
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
                //'nombreJugador': 'Ceci',
                'nombreJugador': self.playerName,
            }));
        });
        this.team = 2;
        //this.gameId = 'PartidaPrueba';
        this.enemyTeam = 1;
        /*this.teamBaseX = 540;
        this.teamBaseY = 670;
        this.enemyBaseX = 540;
        this.enemyBaseY = 50;*/
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

    guardarPartida(gameId) {
        stompClient.send("/app/guardar-partida", {}, gameId);
    }

}

export default Bootloader;
