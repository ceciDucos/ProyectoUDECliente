class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {        
    }

    create() {
        this.team;
        this.gameId;
        this.enemyTeam;
        this.teamBaseX;
        this.teamBaseY;
        this.enemyBaseX;
        this.enemyBaseY;
        this.stompClient = null;
        this.createServer = this.add.text(10, 10, 'Crear partida', { fill: '#0f0' });
        this.joinServer = this.add.text(200, 10, 'Unirse a partida', { fill: '#0f0' });        
        this.entrarjuego = this.add.text(400, 10, 'Entrar al juego', { fill: '#0f0' });
        this.createServer.setInteractive().on('pointerdown', this.crearPartidaEnEspera, this);
        this.joinServer.setInteractive().on('pointerdown', this.unirseAPartida, this);
        this.entrarjuego.setInteractive().on('pointerdown', this.pasarEscena, this);
    }
    
    update(time, delta) {
        
    }

    pasarEscena() {
        /*this.scene.launch('Field', { team: this.team, gameId: this.gameId, enemyTeam: this.enemyTeam, teamBaseX: this.teamBaseX, teamBaseY: this.teamBaseY,
            enemyBaseX: this.enemyBaseX, enemyBaseY: this.enemyBaseY});
        this.fieldScene = this.scene.get('Field');*/
        this.createServer.removeInteractive();
        this.joinServer.removeInteractive();
        this.entrarjuego.removeInteractive();
        /*this.scene.launch('SetBase', { team: this.team, gameId: this.gameId, enemyTeam: this.enemyTeam, teamBaseX: this.teamBaseX, teamBaseY: this.teamBaseY,
            enemyBaseX: this.enemyBaseX, enemyBaseY: this.enemyBaseY});*/
        this.scene.launch('SetBase', { gameId: this.gameId, team: this.team, enemyTeam: this.enemyTeam });
        this.setBaseScene = this.scene.get('SetBase');
    }

    crearPartidaEnEspera() {
        //establezco la conexion y especifico la funcion a ejecutar una vez finalizada la conexion
        var socket = new SockJS('http://167.60.207.63:8091/bombs-away');
        var self = this;
        stompClient = Stomp.over(socket);        
        stompClient.connect({}, function (frame) {
            //me subscribo al canal de datos
            stompClient.subscribe('/topic/user', function (greeting) {
                return;
            });            
            //stompClient.subscribe('/topic/mover-avion', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/aviones-enemigos', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/estallar-aviones', (greeting) => self.fieldScene.blowUpAirplanes(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/posicion-bala', (greeting) => self.fieldScene.updateBullet(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/bajar-vida-avion', (greeting) => self.fieldScene.updateAirplaneLife(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/actualizar-bases', (greeting) => self.setBaseScene.pasarEscena(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/estado-elementos-base', (greeting) => self.fieldScene.dropEnemyBomb(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/actualizar-artilleria', (greeting) => self.setTurretsScene.pasarEscena(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/destruir-artilleria', (greeting) => self.fieldScene.destroyTurret(JSON.parse(greeting["body"])));
            //stompClient.subscribe('/topic/resultado-partida', (greeting) => self.fieldScene.endGame(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/artilleria-movida', (greeting) => self.fieldScene.moveTurret(JSON.parse(greeting["body"])));
            //solicito la creacion de una nueva partida
            stompClient.send("/app/nueva-partida", {}, JSON.stringify({
                'nombrePartida': 'PartidaPrueba',
                'nombreJugador': 'Fede',
            }));
        });
        this.team = 1;
        this.gameId = 'PartidaPrueba';
        this.enemyTeam = 2;
        //this.teamBaseX = 540;
        //this.teamBaseY = 50;
        //this.enemyBaseX = 540;
        //this.enemyBaseY = 670;
    }

    unirseAPartida() {
        var socket = new SockJS('http://167.60.207.63:8091/bombs-away');
        var self = this;
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            //me subscribo al canal de datos
            stompClient.subscribe('/topic/user', function (greeting) {
            });
            //stompClient.subscribe('/topic/mover-avion', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/aviones-enemigos', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/estallar-aviones', (greeting) => self.fieldScene.blowUpAirplanes(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/posicion-bala', (greeting) => self.fieldScene.updateBullet(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/bajar-vida-avion', (greeting) => self.fieldScene.updateAirplaneLife(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/actualizar-bases', (greeting) => self.setBaseScene.pasarEscena(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/estado-elementos-base', (greeting) => self.fieldScene.dropEnemyBomb(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/actualizar-artilleria', (greeting) => self.setTurretsScene.pasarEscena(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/destruir-artilleria', (greeting) => self.fieldScene.destroyTurret(JSON.parse(greeting["body"])));
            //stompClient.subscribe('/topic/resultado-partida', (greeting) => self.fieldScene.endGame(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/artilleria-movida', (greeting) => self.fieldScene.moveTurret(JSON.parse(greeting["body"])));            
            //solicito unirme a una partida
            stompClient.send("/app/unirse-a-partida", {}, JSON.stringify({
                'nombreJugador': 'Ceci',
            }));
        });
        this.team = 2;
        this.gameId = 'PartidaPrueba';
        this.enemyTeam = 1;
        /*this.teamBaseX = 540;
        this.teamBaseY = 670;
        this.enemyBaseX = 540;
        this.enemyBaseY = 50;*/
    }

    moverAvion(gameId, team, x, y, angle, planeNumber, estado, vida, combustible, tieneBomba, visible) {       
        stompClient.send("/app/mover-avion", {}, JSON.stringify({
            'nombrePartida': 'PartidaPrueba',
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
            'idAvion': planeNumber,
            'idBala': idBullet,
            'altitud': estadoAvion,
            'ejeX': x,
            'ejeY': y,
            'angulo': angle,
            'visible': visible,
        }));
    }

    dispararBala(gameId, team, planeNumber, idBullet, estadoAvion, x, y, angle, visible) {
        stompClient.send("/app/disparo-bala2", {}, JSON.stringify({
            'nombrePartida': gameId,
            'idJugador': team,
            'idAvion': planeNumber,
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
        console.log(idTurret);
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

    
}

export default Bootloader;