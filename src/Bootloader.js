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
        
        this.input.keyboard.enabled = false;
        
        
        

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

        this.musica = this.sound.add('musicaPrincipal');
        //this.musica.play();
        //this.input.keyboard.enableGlobalCapture();
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
                    this.scene.musica.stop();
                    
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
                    //this.scene.h1.setVisible(false);
                    this.scene.help.setVisible(false);

                    this.scene.musica.stop();
                    if (gameIdInput.value !== '') {
                        this.scene.unirseAPartidaGuardada();
                    }
                    else {
                        this.scene.unirseAPartida();
                    }
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

                    //  Turn off the click events
                    this.removeListener('click');

                    //  Hide the login element
                    this.setVisible(false);
                    //this.scene.h1.setVisible(false);
                    this.scene.help.setVisible(false);
                    //CODIGO PARA CARGAR PARTIDA
                    this.scene.cargarPartidaGuardada();                    
                    this.scene.waitingForOtherPlayer =  this.scene.add.image(640, 360, 'menu', 'mensajeAguardarContrincante/aguardarContrincante.png');
                    this.scene.musica.stop();
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

    pasarEscenaPartidaCargada( gameId, creoUnio, jugadorCreo, jugadorUno, jugadorDos, maxArtilleria) {
        console.log('llego a pasarescenaguardada');
        this.teamTurretsInfo = [];
        this.enemyTurretsInfo = [];
        if (creoUnio === jugadorCreo) {
            console.log('entro al if');
            this.team = 1;
            this.enemyTeam = 2;

            console.log('seteo teams');
            this.jugadorteamBaseX = jugadorUno.baseJugador.baseEjeX;
            console.log('seteo teams base');
            this.jugadorteamBaseY = jugadorUno.baseJugador.baseEjeY;
            console.log('seteo enemy base');
            this.jugadorteamControlTowerX = jugadorUno.listElementosBase[1].ejeX;
            this.jugadorteamControlTowerY = jugadorUno.listElementosBase[1].ejeY;
            this.jugadorteamControlTowerDestroyed = jugadorUno.listElementosBase[1].destruido;
            this.jugadorteamFuelX = jugadorUno.listElementosBase[2].ejeX;
            this.jugadorteamFuelY = jugadorUno.listElementosBase[2].ejeY;
            this.jugadorteamFuelDestroyed = jugadorUno.listElementosBase[2].destruido;
            this.jugadorteamHangarX = jugadorUno.listElementosBase[0].ejeX;
            this.jugadorteamHangarY = jugadorUno.listElementosBase[0].ejeY;
            this.jugadorteamHangarDestroyed =jugadorUno.listElementosBase[0].destruido;
            console.log('seteo bases aliada');

            this.jugadorEnemyBaseX = jugadorDos.baseJugador.baseEjeX;
            this.jugadorEnemyBaseY = jugadorDos.baseJugador.baseEjeY;
            this.jugadorEnemyControlTowerX = jugadorDos.listElementosBase[1].ejeX;
            this.jugadorEnemyControlTowerY = jugadorDos.listElementosBase[1].ejeY;
            this.jugadorEnemyControlTowerDestroyed = jugadorDos.listElementosBase[1].destruido;
            this.jugadorEnemyFuelX = jugadorDos.listElementosBase[2].ejeX;
            this.jugadorEnemyFuelY = jugadorDos.listElementosBase[2].ejeY;
            this.jugadorEnemyFuelDestroyed = jugadorDos.listElementosBase[2].destruido;
            this.jugadorEnemyHangarX = jugadorDos.listElementosBase[0].ejeX;
            this.jugadorEnemyHangarY = jugadorDos.listElementosBase[0].ejeY;
            this.jugadorEnemyHangarDestroyed =jugadorDos.listElementosBase[0].destruido;
            console.log('seteo bases enemiga');


            this.jugadorairplanes = jugadorUno.listAviones;
            this.jugadorenemies = jugadorDos.listAviones;
            console.log('seteo aviones');

            this.teamTurretsInfoComplete = jugadorUno.listArtillerias;
            this.enemyTurretsInfoComplete = jugadorDos.listArtillerias;
            console.log('seteo torretas');

            for(let i = 0; i < jugadorUno.listArtillerias.length; i++) {                
                console.log('entro al FOR');
                console.log(jugadorUno);
                console.log(jugadorUno.listArtillerias);
                console.log(jugadorUno.listArtillerias[i].idJugador);

                
                this.teamTurretsInfo[i] = {
                    'idJugador': jugadorUno.listArtillerias[i].idJugador,
                    'ejeX': jugadorUno.listArtillerias[i].ejeX,
                    'ejeY': jugadorUno.listArtillerias[i].ejeY
                }

                this.enemyTurretsInfo[i] = {
                    'idJugador': jugadorDos.listArtillerias[i].idJugador,
                    'ejeX': jugadorDos.listArtillerias[i].ejeX,
                    'ejeY': jugadorDos.listArtillerias[i].ejeY
                }

                /*this.enemyTurretsInfo[i].idJugador = jugadorDos.listArtillerias[i].idJugador;
                this.teamTurretsInfo[i].ejeX = jugadorUno.listArtillerias[i].ejeX;
                this.enemyTurretsInfo[i].ejeX = jugadorDos.listArtillerias[i].ejeX;
                this.teamTurretsInfo[i].ejeY = jugadorUno.listArtillerias[i].ejeY;
                this.enemyTurretsInfo[i].ejeY = jugadorDos.listArtillerias[i].ejeY;*/
            }
            console.log('salio del for');
        }
        else {            
            console.log('entro al else');
            this.team = 2;
            this.enemyTeam = 1;

            this.jugadorteamBaseX = jugadorDos.baseJugador.baseEjeX;
            this.jugadorteamBaseY = jugadorDos.baseJugador.baseEjeY;
            this.jugadorteamControlTowerX = jugadorDos.listElementosBase[1].ejeX;
            this.jugadorteamControlTowerY = jugadorDos.listElementosBase[1].ejeY;
            this.jugadorteamControlTowerDestroyed = jugadorDos.listElementosBase[1].destruido;
            this.jugadorteamFuelX = jugadorDos.listElementosBase[2].ejeX;
            this.jugadorteamFuelY = jugadorDos.listElementosBase[2].ejeY;
            this.jugadorteamFuelDestroyed = jugadorDos.listElementosBase[2].destruido;
            this.jugadorteamHangarX = jugadorDos.listElementosBase[0].ejeX;
            this.jugadorteamHangarY = jugadorDos.listElementosBase[0].ejeY;
            this.jugadorteamHangarDestroyed =jugadorDos.listElementosBase[0].destruido;

            this.jugadorEnemyBaseX = jugadorUno.baseJugador.baseEjeX;
            this.jugadorEnemyBaseY = jugadorUno.baseJugador.baseEjeY;
            this.jugadorEnemyControlTowerX = jugadorUno.listElementosBase[1].ejeX;
            this.jugadorEnemyControlTowerY = jugadorUno.listElementosBase[1].ejeY;
            this.jugadorEnemyControlTowerDestroyed = jugadorUno.listElementosBase[1].destruido;
            this.jugadorEnemyFuelX = jugadorUno.listElementosBase[2].ejeX;
            this.jugadorEnemyFuelY = jugadorUno.listElementosBase[2].ejeY;
            this.jugadorEnemyFuelDestroyed = jugadorUno.listElementosBase[2].destruido;
            this.jugadorEnemyHangarX = jugadorUno.listElementosBase[0].ejeX;
            this.jugadorEnemyHangarY = jugadorUno.listElementosBase[0].ejeY;
            this.jugadorEnemyHangarDestroyed =jugadorUno.listElementosBase[0].destruido;


            this.jugadorairplanes = jugadorDos.listAviones;
            this.jugadorenemies = jugadorUno.listAviones;

            this.teamTurretsInfoComplete = jugadorDos.listArtillerias;
            this.enemyTurretsInfoComplete = jugadorUno.listArtillerias;

            for(let i = 0; i < jugadorUno.listArtillerias.length; i++) {


                this.teamTurretsInfo[i] = {
                    'idJugador': jugadorDos.listArtillerias[i].idJugador,
                    'ejeX': jugadorDos.listArtillerias[i].ejeX,
                    'ejeY': jugadorDos.listArtillerias[i].ejeY
                }

                this.enemyTurretsInfo[i] = {
                    'idJugador': jugadorUno.listArtillerias[i].idJugador,
                    'ejeX': jugadorUno.listArtillerias[i].ejeX,
                    'ejeY': jugadorUno.listArtillerias[i].ejeY
                }

                /*
                this.teamTurretsInfo[i].idJugador = jugadorDos.listArtillerias[i].idJugador;
                this.enemyTurretsInfo[i].idJugador = jugadorUno.listArtillerias[i].idJugador;
                this.teamTurretsInfo[i].ejeX = jugadorDos.listArtillerias[i].ejeX;
                this.enemyTurretsInfo[i].ejeX = jugadorUno.listArtillerias[i].ejeX;
                this.teamTurretsInfo[i].ejeY = jugadorDos.listArtillerias[i].ejeY;
                this.enemyTurretsInfo[i].ejeY = jugadorUno.listArtillerias[i].ejeY;*/
            }
        }
        console.log('llego a cargar los datos y va al pasar escena');
        this.scene.start('Field', { gameId: gameId, team: this.team, enemyTeam: this.enemyTeam, teamBaseX: this.jugadorteamBaseX, teamBaseY: this.jugadorteamBaseY,
            teamControlTowerX: this.jugadorteamControlTowerX, teamControlTowerY: this.jugadorteamControlTowerY, teamFuelX: this.jugadorteamFuelX,
            teamFuelY: this.jugadorteamFuelY, teamHangarX: this.jugadorteamHangarX, teamHangarY: this.jugadorteamHangarY,
            jugadorteamControlTowerDestroyed: this.jugadorteamControlTowerDestroyed, jugadorteamFuelDestroyed: this.jugadorteamFuelDestroyed,
            jugadorteamHangarDestroyed: this.jugadorteamHangarDestroyed, enemyBaseX: this.jugadorEnemyBaseX, enemyBaseY: this.jugadorEnemyBaseY,
            enemyControlTowerX: this.jugadorEnemyControlTowerX, enemyControlTowerY: this.jugadorEnemyControlTowerY, enemyFuelX: this.jugadorEnemyFuelX,
            enemyFuelY: this.jugadorEnemyFuelY, enemyHangarX: this.jugadorEnemyHangarX, enemyHangarY: this.jugadorEnemyHangarY,
            jugadorEnemyControlTowerDestroyed: this.jugadorEnemyControlTowerDestroyed, jugadorEnemyFuelDestroyed: this.jugadorEnemyFuelDestroyed,
            jugadorEnemyHangarDestroyed: this.jugadorEnemyHangarDestroyed, jugadorairplanes: this.jugadorairplanes, jugadorenemies: this.jugadorenemies,
            teamTurrets: this.teamTurretsInfo, enemyTurrets: this.enemyTurretsInfo, teamTurretsInfoComplete: this.teamTurretsInfoComplete,
            enemyTurretsInfoComplete: this.enemyTurretsInfoComplete, turretQuantity: maxArtilleria, savedGame: 1});
        
        this.fieldScene = this.scene.get('Field');
        console.log('paso la escena');
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
        this.enemyTeam = 2;
        this.gameStarted = true;
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
        this.enemyTeam = 1;
    }

    cargarPartidaGuardada() {
        //establezco la conexion y especifico la funcion a ejecutar una vez finalizada la conexion
        var socket = new SockJS('http://bombs-away.servegame.com:8091/bombs-away');
        var self = this;
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            //me subscribo al canal de datos
            stompClient.subscribe('/topic/recuperar-partida', function (greeting) {
                var data = JSON.parse(greeting["body"]);
                console.log('cargar partida guardada:');
                console.log(greeting);
                
                console.log(data.accion === 'Bootloader');
                console.log(data.nombrePartida === self.gameId);
                console.log(data.cargarPartida === true);
                console.log(data.error === false);
                if (data.accion === 'Bootloader' && data.nombrePartida === self.gameId && data.cargarPartida === true && data.error === false) {
                    
                    console.log('entra cargar partida guardada:');
                    self.waitingForOtherPlayer.setVisible(false);
                    self.pasarEscenaPartidaCargada(data.nombrePartida, 1, data.jugadorCreo, data.jugadorUno, data.jugadorDos, data.maxArtilleria);
                }
                else if (data.error === true) {
                    data.errorMensaje

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
            stompClient.send("/app/cargar-partida", {}, JSON.stringify({
                'nombrePartida': self.gameId,
                'nombreJugador': self.playerName,
            }));
        });
        this.gameStarted = true;
    }

    unirseAPartidaGuardada() {
        var socket = new SockJS('http://bombs-away.servegame.com:8091/bombs-away');
        var self = this;
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            //me subscribo al canal de datos
            stompClient.subscribe('/topic/recuperar-partida', function (greeting) {
                var data = JSON.parse(greeting["body"]);
                console.log('unirse partida guardada:');
                console.log(greeting);
                console.log(data.accion === 'Bootloader');
                console.log(data.nombrePartida === self.gameId);
                console.log(data.cargarPartida === true);
                console.log(data.error === false);

                if (data.accion === 'Bootloader' && data.nombrePartida === self.gameId && data.cargarPartida === true && data.error === false) {
                    if (!self.gameStarted) {
                        console.log('entra unirse partida guardada:');
                        self.pasarEscenaPartidaCargada(data.nombrePartida, 2, data.jugadorCreo, data.jugadorUno, data.jugadorDos, data.maxArtilleria);
                    }
                }
                else if (data.error === true) {
                    //data.errorMensaje
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
            stompClient.send("/app/unirse-partida-guardada", {}, JSON.stringify({
                'nombrePartida': self.gameId,
                'nombreJugador': self.playerName,
            }));
        });
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
