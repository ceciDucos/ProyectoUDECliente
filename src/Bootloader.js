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
        this.scene.launch('Field', { team: this.team, gameId: this.gameId, enemyTeam: this.enemyTeam, teamBaseX: this.teamBaseX, teamBaseY: this.teamBaseY,
            enemyBaseX: this.enemyBaseX, enemyBaseY: this.enemyBaseY});
        this.fieldScene = this.scene.get('Field');
    }

    crearPartidaEnEspera() {
        //establezco la conexion y especifico la funcion a ejecutar una vez finalizada la conexion
        var socket = new SockJS('http://localhost:8091/bombs-away');
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
            //solicito la creacion de una nueva partida
            stompClient.send("/app/nueva-partida", {}, JSON.stringify({
                'nombrePartida': 'PartidaPrueba',
                'nombreJugador': 'Fede',
            }));
        });
        this.team = 1;
        this.gameId = 'PartidaPrueba';
        this.enemyTeam = 2;
        this.teamBaseX = 540;
        this.teamBaseY = 50;
        this.enemyBaseX = 540;
        this.enemyBaseY = 670;
    }

    unirseAPartida() {
        var socket = new SockJS('http://localhost:8091/bombs-away');
        var self = this;
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            //me subscribo al canal de datos
            stompClient.subscribe('/topic/user', function (greeting) {
            });
            //stompClient.subscribe('/topic/mover-avion', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/aviones-enemigos', (greeting) => self.fieldScene.moveEnemyAirplane(JSON.parse(greeting["body"])));
            stompClient.subscribe('/topic/estallar-aviones', (greeting) => self.fieldScene.blowUpAirplanes(JSON.parse(greeting["body"])));
            //solicito unirme a una partida
            stompClient.send("/app/unirse-a-partida", {}, JSON.stringify({
                'nombreJugador': 'Ceci',
            }));
        });
        this.team = 2;
        this.gameId = 'PartidaPrueba';
        this.enemyTeam = 1;
        this.teamBaseX = 540;
        this.teamBaseY = 670;
        this.enemyBaseX = 540;
        this.enemyBaseY = 50;
    }

    moverAvion(team, x, y, angle, planeNumber, estado, vida, combustible, tieneBomba, visible) {        
        if(planeNumber == 3) {
            console.log('avion 4 llego al send');
        }            
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
        if(planeNumber == 3) {
            console.log('avion 4 mando el send');
        }   
    }
    /*
    setConnected(connected) {
        $("#connect").prop("disabled", connected);
        $("#disconnect").prop("disabled", !connected);
        if (connected) {
            $("#conversation").show();
        }
        else {
            $("#conversation").hide();
        }
        $("#userinfo").html("");
    }

    showGreeting(message) {
        $("#userinfo").append("<tr><td>" + message + "</td></tr>");
    }*/
    
}
export default Bootloader;