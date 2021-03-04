import Bullet from "./Bullet.js";

export default class Airplane extends Phaser.Physics.Arcade.Sprite {
    constructor(data) {
        let { scene, x, y, texture, frame, team, planeNumber } = data;
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;
        if (team === 1) {
            this.setAngle(90)
            //this.angle = 90;
        }
        else {
            this.setAngle(-90);
            //this.angle = -90;
        }
        this.bomb = scene.add.image(x, y, 'bomb');
        this.bomb.visible = false;
        this.hasBomb = true;
        this.bomb.setScale(0.15);

        this.setScale(0.2);
        this.setDepth(1);   //ver si no es mejor jugar con una animacion de aviones mas grandes y mas chicas y ponerle un evento de delay hasta que crezca la animacion
        this.visible = true; //inicializar en false para aparecer oculto en el hangar
        this.active = true; //inicializar en false para aparecer oculto en el hangar
        this.team = team;
        this.planeNumber = planeNumber;
        this.selected = false;                
        //this.setInteractive(); //Para ser seleccionables con el click
        //this.on('pointerdown', () => {scene.airplanes this.selected = true;}, this);
        this.life = 100;
        this.fuel = 100;
        this.estado = 0;
        this.lastEstadoChanged = 0;
        this.bulletQuantity = 0;
        this.bullets = scene.physics.add.group({
            classType: Bullet,
            maxSize: 30,
            runChildUpdate: true
        });
        this.lastFired = 0;
        this.lastChargeFuel = 0;
        //this.setInteractive().on('pointerdown', this.selectAirplaneByClick, this);        
    }

    static preload(scene) {
        scene.load.atlas('airplaneplayer1', 'assets/images/airplanes/player1/airplaneplayer1.png', 'assets/images/airplanes/player1/airplaneplayer1_atlas.json');
        scene.load.atlas('airplaneplayer2', 'assets/images/airplanes/player2/airplaneplayer2.png', 'assets/images/airplanes/player2/airplaneplayer2_atlas.json');

        //scene.load.animation('equipo1avion1_anim','assets/images/airplanes/player1/airplaneplayer1_anim.json');
        //scene.load.atlas('equipo1avion2-1','assets/images/airplanes/player1/airplaneplayer1.png','assets/images/airplanes/player1/airplaneplayer1_atlas.json');
        //scene.load.animation('equipo1avion2_anim','assets/images/airplanes/player1/airplaneplayer1_anim.json');
        //scene.load.atlas('equipo1avion3-1','assets/images/airplanes/player1/airplaneplayer1.png','assets/images/airplanes/player1/airplaneplayer1_atlas.json');
        //scene.load.animation('equipo1avion3_anim','assets/images/airplanes/player1/airplaneplayer1_anim.json');
        //scene.load.atlas('equipo1avion4-1','assets/images/airplanes/player1/airplaneplayer1.png','assets/images/airplanes/player1/airplaneplayer1_atlas.json');
        scene.load.animation('equipo1avion1_anim', 'assets/images/airplanes/player1/airplaneplayer1_anim.json');
        scene.load.animation('equipo2avion1_anim', 'assets/images/airplanes/player2/airplaneplayer2_anim.json');
        //scene.load.animation('equipo1avion4_anim','assets/images/airplanes/player1/airplaneplayer1_anim.json');
        /*scene.load.atlas('equipo1avion2','assets/images/equipo1avion2.png','assets/images/equipo1avion2_atlas.json');
        scene.load.animation('equipo1avion2_anim','assets/images/equipo1avion2_anim.json');
        scene.load.atlas('equipo1avion3','assets/images/equipo1avion3.png','assets/images/equipo1avion3_atlas.json');
        scene.load.animation('equipo1avion3_anim','assets/images/equipo1avion3_anim.json');
        scene.load.atlas('equipo1avion4','assets/images/equipo1avion4.png','assets/images/equipo1avion4_atlas.json');
        scene.load.animation('equipo1avion4_anim','assets/images/equipo1avion4_anim.json');*/
        scene.load.image('bullet3', 'assets/images/bullet3.png');
        scene.load.image('bomb', 'assets/images/bomba-sprite1.png');
    }

    update(time, delta) {
        let animName;
        animName = this.selectAnimation(this.team);    //Mejorar para que no entre todas las veces del update    
        if (this.estado !== 0 && this.estado !== 3) {
            let planeMatches = false;
            let i = 0;
            while (i < this.scene.airplanesQuantity && !planeMatches) {
                if (this === this.scene.airplanes[i]) {
                    this.scene.bootloaderScene.moverAvion(this.scene.gameId, this.scene.team,this.x,this.y,this.angle, this.planeNumber, this.estado, this.life, this.fuel, this.hasBomb, this.visible);
                    planeMatches = true;
                }
                i++;
            }
            /*for (let i = 0; i < this.scene.airplanesQuantity; i++) {  //cambiar por un while si anda              
                if (this === this.scene.airplanes[i]) {
                    this.scene.bootloaderScene.moverAvion(this.scene.gameId, this.scene.team,this.x,this.y,this.angle, this.planeNumber, this.estado, this.life, this.fuel, this.hasBomb, this.visible);
                }
            }*/           
        }
        if (this.estado === 1) {
            this.setScale(0.2);
            this.setDepth(1); //ver si no es mejor jugar con una animacion de aviones mas grandes y mas chicas y ponerle un evento de delay hasta que crezca la animacion            
            this.anims.play(animName, true);
            this.scene.physics.velocityFromAngle(this.angle, 40, this.body.velocity);
            this.fuel = this.fuel - 0.02
            //chequear si el combustible llego a 0 ver como coordinar con el server la destruccion del avion;
        }
        else if (this.estado === 2) {
            this.setScale(0.3);
            this.setDepth(2);//ver si no es mejor jugar con una animacion de aviones mas grandes y mas chicas y ponerle un evento de delay hasta que crezca la animacion
            this.anims.play(animName, true);
            this.scene.physics.velocityFromAngle(this.angle, 20, this.body.velocity);
            this.fuel = this.fuel - 0.02;
            //chequear si el combustible llego a 0 ver como coordinar con el server la destruccion del avion;
        }
        else {
            this.setVelocity(0, 0);
        }       
        if (this.selected) {
            if (this.inputKeys.ascend.isDown && time > this.lastEstadoChanged) {
                if (this.estado < 2) {
                    if (this.estado === 0) {
                        this.visible = true;
                    }
                    this.estado++;
                    this.lastEstadoChanged = time + 180;
                    //this.hasBomb = true;
                }
            }
            if (this.inputKeys.descend.isDown && time > this.lastEstadoChanged) {
                if (this.estado === 2) {
                    this.estado--;
                    this.lastEstadoChanged = time + 180;
                }
                else if (this. estado === 1) {                    
                    if (this.estado === 1 && this.airplaneInBaseRange()) {
                        this.estado--;
                        this.x = this.scene.teamBaseX + 35;
                        this.y = this.scene.teamBaseY - 23;
                        if (this.team === 1) {
                            this.angle = 90;
                        }
                        else {
                            this.angle = -90;
                        }  
                        this.fuel = 100;                      
                        this.lastEstadoChanged = time + 180;
                        this.scene.bootloaderScene.moverAvion(this.scene.gameId, this.scene.team,this.x,this.y,this.angle, this.planeNumber, this.estado, this.life, this.fuel, this.hasBomb, this.visible);                      
                    }
                }
            }
            if (this.estado !== 0) {
                if (this.inputKeys.left.isDown) {
                    this.body.setAngularVelocity(-40);
                } else if (this.inputKeys.right.isDown) {
                    this.body.setAngularVelocity(40);
                }
                else {
                    this.body.setAngularVelocity(0);
                }
                if (this.inputKeys.fire.isDown && time > this.lastFired) {
                    let bullet = this.bullets.get();
                    //console.log(bullet.idBullet);
                    if (bullet) {                       
                        if (bullet.idBullet == '') {
                            bullet.idBullet = this.bulletQuantity + 1;
                        }
                        /*console.log('disparo');
                        console.log('avion : ' + bullet.planeNumber + ', idBullet: ' + bullet.idBullet); */
                        bullet.planeNumber = this.planeNumber;
                        bullet.estadoAvion = this.estado;
                        this.bulletQuantity++;
                        bullet.fire(this.scene, this.x, this.y, this.angle);

                        this.lastFired = time + 200;
                    }
                }
                if (this.inputKeys.dropBomb.isDown && this.hasBomb) {
                    this.dropBomb();
                }
                if (this.airplaneInFuelRange() && time > this.lastChargeFuel) {
                    this.fuel = 100;                        
                    this.lastChargeFuel = time + 1000;
                }
            }
        }
        else {
            this.body.setAngularVelocity(0);
        }        
    }

    selectAnimation(team) {
        let animName;
        if (team === 1) {
            switch (this.planeNumber) {
                case 0:
                case 4: animName = 'equipo1avion1';
                    break;
                case 1:
                case 5: animName = 'equipo1avion2';
                    break;
                case 2:
                case 6: animName = 'equipo1avion3';
                    break;
                case 3:
                case 7: animName = 'equipo1avion4';
                    break;
            }
        }
        else {
            switch (this.planeNumber) {
                case 0:
                case 4: animName = 'equipo2avion1';
                    break;
                case 1:
                case 5: animName = 'equipo2avion2';
                    break;
                case 2:
                case 6: animName = 'equipo2avion3';
                    break;
                case 3:
                case 7: animName = 'equipo2avion4';
                    break;
            }
        }
        return animName;
    }

    moveEnemyAirplane(data) {
        let animName;    
        this.x = data.ejeX;
        this.y = data.ejeY;
        animName = this.selectAnimation(data.idJugador);
        if (this.angle > data.angulo) {
            //this.anims.play(animName, true); animaciones para doblar
        }
        else if (this.angle < data.angulo) {
            //animaciones
        }
        else {              
            this.anims.play(animName, true);
        }
        this.angle = data.angulo;
        if (this.estado > data.estado) {
            this.setScale(0.2);       
            this.setDepth(1);
            //this.scene.physics.velocityFromAngle(this.angle, 40, this.body.velocity); //solo para prueba de estabilidad en caso de perdida de paquetes
        }
        else if(this.estado !== 0 && this.estado < data.estado) {
            this.setScale(0.3);
            this.setDepth(2);
            //this.scene.physics.velocityFromAngle(this.angle, 20, this.body.velocity); //solo para prueba de estabilidad en caso de perdida de paquetes
        }   
        this.estado = data.estado;
        this.life = data.vida;
        this.fuel = data.combustible;
        if (this.hasBomb !== data.tieneBomba) {
            this.dropBomb();
        }
        this.hasBomb = data.tieneBomba;
        this.visible = data.visible;
    }

    dropBomb() {
        this.bomb.x = this.x;
        this.bomb.y = this.y;
        this.hasBomb = false;
        this.bomb.active = true;
        this.bomb.visible = true;
        this.scene.time.addEvent({
            delay: 1000,
            loop: false,
            callback: () => {
                this.bomb.visible = false;
                this.bomb.active = false;
            }
        });
    }

    blowUpAirplane(data) {
        if (data.estado === 3) {
            this.visible = false;
            this.active = false;
            this.life = 0;
            this.fuel = 0;
            this.estado = 3;
        }
    }

    selectAirplaneByClick () {
        for (let i = 0; i < this.airplanesQuantity; i++) {
            if (this.scene.airplanes[i].planeNumber !== this.planeNumber) {
                this.selected = false;
            }
            else {
                this.selected = true;
            }
        }
    }

    airplaneInBaseRange() {
        let granted = false;
        if (this.x > this.scene.teamBaseX && (this.x < this.scene.teamBaseX + 70) && this.y < this.scene.teamBaseY && (this.y > this.scene.teamBaseY - 46)) {
            granted = true;
        }
        return granted;
    }

    airplaneInFuelRange() {
        let granted = false;
        if (this.x < this.scene.teamBaseX && (this.x > this.scene.teamBaseX - 70) && this.y < this.scene.teamBaseY && (this.y > this.scene.teamBaseY - 46)) {
            granted = true;
        }
        return granted;
    }
}