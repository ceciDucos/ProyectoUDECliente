import Bullet from "./Bullet.js";

export default class Airplane extends Phaser.Physics.Arcade.Sprite {
    constructor(info) {
        let { scene, x, y, texture, frame, team, planeNumber } = info;
        super(scene, x, y, texture, frame);
        this.prefix = texture;
        this.plane = scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;
        if (team === 1) {
            this.setAngle(90);
        }
        else {
            this.setAngle(-90);
        }        
        this.bomb = scene.add.sprite(x, y, 'others', 'bomba-1.png');
        //this.bomb = scene.add.sprite(x, y, 'bomb');
        this.hasBomb = true;
        //this.bomb.setScale(0.15);
        this.bomb.setScale(0.25);
        this.bomb.setDepth(1);
        this.bomb.setVisible(false);
        //this.bomb.setActive(false);

        this.setScale(0.2);
        this.setDepth(2);   //ver si no es mejor jugar con una animacion de aviones mas grandes y mas chicas y ponerle un evento de delay hasta que crezca la animacion
        this.visible = false; //inicializar en false para aparecer oculto en el hangar
        this.active = false; //inicializar en false para aparecer oculto en el hangar
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
        this.lastUpdated = 0;
        this.lastCheckOverItem = 0;
        this.nextInputAvailable = true;
        //this.setInteractive().on('pointerdown', this.selectAirplaneByClick, this);        
    }

    static preload(scene) {
        //scene.load.image('bullet3', 'assets/images/bullet3.png');
        //scene.load.image('bomb', 'assets/images/bomba-sprite1.png');
    }

    update(time, delta) {
        //this.anims.play('equipo1avion1Volar');
        let animName;
        this.texture;
        animName = this.selectAnimation(this.team);    //Mejorar para que no entre todas las veces del update    
        if (this.estado !== 0 && this.estado !== 3) {
            if (this.team === this.scene.team && time > this.lastUpdated) {
                this.scene.bootloaderScene.moverAvion(this.scene.gameId, this.scene.team,this.x,this.y,this.angle, this.planeNumber, this.estado, this.life, this.fuel, this.hasBomb, this.visible);
                this.lastUpdated = time + 40; //cuidado con esto y la condicion del if, hace que se actualice cada 200 ticks en lugar del total de updates
            }

            /*let planeMatches = false;
            let i = 0;
            while (i < this.scene.airplanesQuantity && !planeMatches && time > this.lastUpdated) {
                if (this === this.scene.airplanes[i]) {
                    this.scene.bootloaderScene.moverAvion(this.scene.gameId, this.scene.team,this.x,this.y,this.angle, this.planeNumber, this.estado, this.life, this.fuel, this.hasBomb, this.visible);
                    planeMatches = true;
                    this.lastUpdated = time + 40; //cuidado con esto y la condicion del if, hace que se actualice cada 200 ticks en lugar del total de updates
                }
                i++;
            }*/         
        }
        if (this.estado === 1) { //codigo copiado mas abajo en la tecla de ascender, se deberia pasar tambien a la tecla de descender y borrar estos if else y dejar solo velocidad en 0 para estado 0
            this.setScale(0.2);
            this.setDepth(2); //ver si no es mejor jugar con una animacion de aviones mas grandes y mas chicas y ponerle un evento de delay hasta que crezca la animacion            
            this.on("animationcomplete", ()=>{
                if (this.life < 30) {
                    this.anims.play(this.prefix + 'VolarConPocaVida', true);
                }
                else {
                    this.anims.play(this.prefix + 'Volar', true);
                }                
            });
            if (time > this.lastCheckOverItem) {
                let overItem = false;
                let i = 0;
                let turretsChildren = this.scene.teamTurrets.getChildren();
                while (!overItem && i < this.scene.turretQuantity) {
                    if (this.x < turretsChildren[i].x + 10 && this.x > turretsChildren[i].x - 10 && this.y < turretsChildren[i].y + 10 && this.y > turretsChildren[i].y - 10) {
                        this.scene.subLateral.anims.play('sobrevuelaArtilleriaBajo', true);
                        overItem = true;
                    }
                    i++;
                }
                this.lastCheckOverItem = time + 1000;
            }
            /*if (this.selected && this.estado !== 3) {                
                this.scene.lateral.on("animationcomplete", ()=>{  
                    this.scene.lateral.anims.play('equipo1avion1VolarBajoLateralVolar');
                });
            }*/
            //this.anims.play(animName, true);
            this.scene.physics.velocityFromAngle(this.angle, 40, this.body.velocity);
            //this.fuel = this.fuel - 0.011;
            //this.fuelBar.decrease(this.fuel);
            //chequear si el combustible llego a 0 ver como coordinar con el server la destruccion del avion;
        }
        else if (this.estado === 2) {
            this.setScale(0.3);
            this.setDepth(3);//ver si no es mejor jugar con una animacion de aviones mas grandes y mas chicas y ponerle un evento de delay hasta que crezca la animacion            
            //this.anims.play('equipo1avion1Volar',true);
            //this.anims.play(animName, true);            
            this.on("animationcomplete", ()=>{ 
                if (this.life < 30) {
                    this.anims.play(this.prefix + 'VolarConPocaVida', true);
                }
                else {
                    this.anims.play(this.prefix + 'Volar', true);
                }
            });
            /*if (this.selected && this.estado !== 3) { 
                this.scene.lateral.on("animationcomplete", ()=>{  
                    this.scene.lateral.anims.play('equipo1avion1VueloAltoLateralVolar');
                });
            }*/
            this.scene.physics.velocityFromAngle(this.angle, 20, this.body.velocity);
            //this.fuel = this.fuel - 0.011;
            //this.fuelBar.decrease(this.fuel);
            //chequear si el combustible llego a 0 ver como coordinar con el server la destruccion del avion;
        }
        else {           
            this.setVelocity(0, 0);
        } 
        if (this.airplaneInFuelRange() && time > this.lastChargeFuel && !this.scene.teamFuelDestroyed) {
            this.fuel = 100;
            this.scene.bootloaderScene.refuel(this.scene.gameId, this.scene.team, this.x, this.y, this.angle, this.planeNumber, this.estado, this.life, this.fuel, this.hasBomb, this.visible);
            this.lastChargeFuel = time + 1000;
        }      
        if (this.selected) {            
            if (this.inputKeys.ascend.isDown && time > this.lastEstadoChanged && this.nextInputAvailable) {
                if (this.estado < 2) {
                    if (this.estado === 0) {
                        if (this.team === this.scene.team) {
                            this.visible = true;
                        }                        
                        this.active = true;
                        if (this.life < 30) {
                            this.anims.play(this.prefix + 'DespegarConPocaVida',true);
                        }
                        else {
                            this.anims.play(this.prefix + 'Despegar', true);
                        }
                        this.nextInputAvailable = false;
                        this.on("animationcomplete", ()=>{
                            this.nextInputAvailable = true;
                        });                        
                        /*this.on("animationcomplete", ()=>{        //si da problemas la animacion de volar volver a descomentar
                            this.anims.play(this.prefix + 'Volar', true);
                        });*/
                        if (this.life < 30) {
                            this.scene.lateral.anims.play(this.prefix + 'LateralDespegarConPocaVida', true);
                        }
                        else {
                            this.scene.lateral.anims.play(this.prefix + 'LateralDespegar', true);
                        }
                        this.setScale(0.2);
                        this.setDepth(2); //ver si no es mejor jugar con una animacion de aviones mas grandes y mas chicas y ponerle un evento de delay hasta que crezca la animacion            
                        //this.anims.delayedPlay(1000,'equipo1avion1Volar');
                        this.scene.physics.velocityFromAngle(this.angle, 40, this.body.velocity);
                        //this.fuel = this.fuel - 0.02;
                    }
                    else{
                        //this.setScale(0.3);
                        if (this.life < 30) {
                            this.scene.lateral.anims.play(this.prefix + 'AumentarAlturaConPocaVida', true);
                        }
                        else {
                            this.scene.lateral.anims.play(this.prefix + 'AumentarAltura', true);
                        } 
                        
                        this.setDepth(3);//ver si no es mejor jugar con una animacion de aviones mas grandes y mas chicas y ponerle un evento de delay hasta que crezca la animacion            
                        //this.anims.play('equipo1avion1Volar');
                        //this.anims.play(animName, true);
                        this.scene.physics.velocityFromAngle(this.angle, 20, this.body.velocity);
                        //this.fuel = this.fuel - 0.02;
                        //chequear si el combustible llego a 0 ver como coordinar con el server la destruccion del avion;
                    }
                    this.estado++;
                    this.lastEstadoChanged = time + 500;
                    //this.hasBomb = true;
                }
            }
            if (this.inputKeys.descend.isDown && time > this.lastEstadoChanged && this.nextInputAvailable) {
                if (this.estado === 2) {
                    this.estado--;
                    this.lastEstadoChanged = time + 500;
                    if (this.life < 30) {
                        this.scene.lateral.anims.play(this.prefix + 'DisminuirAlturaConPocaVida', true); 
                    }
                    else {
                        this.scene.lateral.anims.play(this.prefix + 'DisminuirAltura', true); 
                    }
                                       
                }
                else if (this.estado === 1) { 
                    if (this.airplaneInHangarRange() && !this.scene.teamHangarDestroyed) {
                        /*this.on("animationcomplete", ()=>{ 
                            this.anims.play('equipo1avion1Aterriza', true);
                        });*/
                        if (this.life < 30) {
                            this.anims.play(this.prefix + 'AterrizaConPocaVida', true);                           
                        }
                        else {
                            this.anims.play(this.prefix + 'Aterriza', true); //ver orden con el siguiente if por si el rival corre la animacion de aterrizaje
                        }
                        this.nextInputAvailable = false;
                        this.once("animationcomplete", ()=>{ 
                            //console.log('pausa y reset');
                            this.anims.pause();
                            if (this.team === this.scene.team) {  //reveer porque el avion enemigo nunca apreta la Q                               
                                this.x = this.scene.teamHangarX;
                                this.y = this.scene.teamHangarY;
                                if (this.team === 1) {
                                    this.angle = 90;
                                }
                                else {
                                    this.angle = -90;
                                }
                            }
                            else {
                                this.x = this.scene.enemyHangarX;
                                this.y = this.scene.enemyHangarY;
                                if (this.team === 1) {
                                    this.angle = 90;
                                }
                                else {
                                    this.angle = -90;
                                }
                            }
                            this.setVelocity(0, 0); 
                            this.body.setAngularVelocity(0);
                            this.visible = false;
                            this.active = false;
                            this.nextInputAvailable = true;
                            this.scene.bootloaderScene.moverAvion(this.scene.gameId, this.scene.team,this.x,this.y,this.angle, this.planeNumber, this.estado, this.life, this.fuel, this.hasBomb, this.visible);
                        });
                        this.estado--;
                        this.fuel = 100;                        
                        this.scene.bootloaderScene.refuel(this.scene.gameId, this.scene.team,this.x,this.y,this.angle, this.planeNumber, this.estado, this.life, this.fuel, this.hasBomb, this.visible);
                        this.hasBomb = true;
                        this.bombIcon.setVisible(true);
                        this.fuelBar.decrease(this.fuel);
                        /*this.estado--;
                        this.x = this.scene.teamBaseX + 35;
                        this.y = this.scene.teamBaseY - 23;
                        if (this.team === 1) {
                            this.angle = 90;
                        }
                        else {
                            this.angle = -90;
                        }
                        this.setVelocity(0, 0); 
                        this.body.setAngularVelocity(0);*/
                        this.lastEstadoChanged = time + 180;
                        if (this.life < 30) {
                            this.scene.lateral.anims.play(this.prefix + 'LateralAterrizarConPocaVida', true);
                        }
                        else {
                            this.scene.lateral.anims.play(this.prefix + 'LateralAterrizar', true);
                        }
                        
                        this.scene.lateral.on("animationcomplete", ()=>{
                            if (this.scene.lateral.anims.currentAnim.key === this.prefix + 'VolarBajoLateralVolar') {
                                this.scene.lateral.anims.pause();
                            }
                            this.scene.lateral.anims.play(this.prefix + 'EnHangar', true);
                        });                        
                        //this.scene.bootloaderScene.moverAvion(this.scene.gameId, this.scene.team,this.x,this.y,this.angle, this.planeNumber, this.estado, this.life, this.fuel, this.hasBomb, this.visible);
                    }
                }
            }
            if (this.estado !== 0) {
                if (this.estado === 3) {
                    this.scene.lateral.on("animationcomplete", ()=>{ 
                        this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralExplotado');
                    });                
                }
                else {
                    this.scene.lateral.on("animationcomplete", ()=>{  
                        if (this.estado === 1) {
                            if (this.life < 30) {
                                this.scene.lateral.anims.play(this.prefix + 'VolarBajoLateralVolarConPocaVida');
                            }
                            else {
                                this.scene.lateral.anims.play(this.prefix + 'VolarBajoLateralVolar');
                            }
                        }
                        else if (this.estado === 2){
                            if (this.life < 30) {
                                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralVolarConPocaVida');
                            }
                            else {
                                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralVolar');
                            }
                        }
                    });
                }
                if (this.inputKeys.left.isDown && this.estado != 3) {
                    this.body.setAngularVelocity(-40);
                    this.on("animationcomplete", ()=>{
                        if (this.anims.currentAnim.key === this.prefix + 'Volar') {
                            if (this.life < 30) {
                                this.anims.play(this.prefix + 'DoblarIzquierdaConPocaVida', true);
                            }
                            else {
                                this.anims.play(this.prefix + 'DoblarIzquierda', true);
                            } 
                            
                        }
                        else {
                            if (this.life < 30) {
                                this.anims.play(this.prefix + 'DoblarIzquierdaConPocaVida');
                            }
                            else {
                                this.anims.play(this.prefix + 'DoblarIzquierda');
                            } 
                            
                        }
                    });
                    if (this.estado === 1) {
                        if (this.isLateralInfiniteAnimation()) {                        
                            if (this.life < 30) {
                                this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralDoblarIzquierdaConPocaVida', true);
                            }
                            else {
                                this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralDoblarIzquierda', true);
                            }
                        }
                        else {
                            this.scene.lateral.on("animationcomplete", ()=>{  
                                if (this.life < 30) {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralDoblarIzquierdaConPocaVida', true);
                                }
                                else {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralDoblarIzquierda', true);
                                }
                            });
                        }
                    }
                    else {                        
                        if (this.isLateralInfiniteAnimation()) {                        
                            if (this.life < 30) {
                                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralDoblarIzquierdaConPocaVida', true);
                            }
                            else {
                                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralDoblarIzquierda', true);
                            }
                        }
                        else {
                            this.scene.lateral.on("animationcomplete", ()=>{  
                                if (this.life < 30) {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralDoblarIzquierdaConPocaVida', true);
                                }
                                else {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralDoblarIzquierda', true);
                                }
                            });
                        }
                    }
                                  
                } else if (this.inputKeys.right.isDown  && this.estado != 3) {
                    this.body.setAngularVelocity(40);
                    this.on("animationcomplete", ()=>{                         
                        if (this.anims.currentAnim.key === this.prefix + 'Volar') {
                            if (this.life < 30) {
                                this.anims.play(this.prefix + 'DoblarDerechaConPocaVida', true);
                            }
                            else {
                                this.anims.play(this.prefix + 'DoblarDerecha', true);
                            }    
                        }
                        else {
                            if (this.life < 30) {
                                this.anims.play(this.prefix + 'DoblarDerechaConPocaVida');
                            }
                            else {
                                this.anims.play(this.prefix + 'DoblarDerecha');
                            }
                        }
                    });
                    if (this.estado === 1) {
                        if (this.isLateralInfiniteAnimation()) {                        
                            if (this.life < 30) {
                                this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralDoblarDerechaConPocaVida', true);
                            }
                            else {
                                this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralDoblarDerecha', true);
                            }
                        }
                        else {
                            this.scene.lateral.on("animationcomplete", ()=>{  
                                if (this.life < 30) {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralDoblarDerechaConPocaVida', true);
                                }
                                else {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralDoblarDerecha', true);
                                }
                            });
                        }
                    }
                    else {                        
                        if (this.isLateralInfiniteAnimation()) { 
                            if (this.life < 30) {
                                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralDoblarDerechaConPocaVida', true);
                            }
                            else {
                                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralDoblarDerecha', true);
                            }                        
                            
                        }
                        else {
                            this.scene.lateral.on("animationcomplete", ()=>{  
                                if (this.life < 30) {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralDoblarDerechaConPocaVida', true);
                                }
                                else {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateralDoblarDerecha', true);
                                }  
                            });
                        }
                    }
                }
                else {
                    this.body.setAngularVelocity(0);
                }
                if (this.inputKeys.fire.isDown && time > this.lastFired) {
                    let bullet = this.bullets.get();
                    //console.log(bullet.idBullet);
                    if (bullet) {                       
                        if (bullet.idBullet == '') {
                            bullet.idBullet = this.bulletQuantity;
                        }
                        this.bulletQuantity++;
                        /*console.log('disparo');
                        console.log('avion : ' + bullet.planeNumber + ', idBullet: ' + bullet.idBullet); */
                        bullet.planeNumber = this.planeNumber;
                        bullet.estadoAvion = this.estado;
                        bullet.fire(this.scene, this.x, this.y, this.angle);

                        this.lastFired = time + 200;
                    }
                }
                if (this.inputKeys.dropBomb.isDown && this.hasBomb) {
                    /*if (this.estado === 1) {
                        if (this.isLateralInfiniteAnimation()) {                        
                            if (this.life < 30) {
                                this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralLanzarBombaConPocaVida', true);
                            }
                            else {
                                this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralLanzarBomba', true);
                            }
                        }
                        else {
                            this.scene.lateral.on("animationcomplete", ()=>{  
                                if (this.life < 30) {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralLanzarBombaConPocaVida', true);
                                }
                                else {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralLanzarBomba', true);
                                }
                            });
                        }
                    }
                    else {                        
                        if (this.isLateralInfiniteAnimation()) {                        
                            if (this.life < 30) {
                                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLanzarBombaConPocaVida', true);
                            }
                            else {
                                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLanzarBomba', true);
                            }
                        }
                        else {
                            this.scene.lateral.on("animationcomplete", ()=>{  
                                if (this.life < 30) {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloAltoLanzarBombaConPocaVida', true);
                                }
                                else {
                                    this.scene.lateral.anims.play(this.prefix + 'VueloAltoLanzarBomba', true);
                                }
                            });
                        }
                    }*/
                    this.dropBomb();
                }
            }
            else {
                if(this.scene.lateral.anims.currentAnim === null){
                    this.scene.lateral.anims.play(this.prefix + 'EnHangar');    
                }
                else{
                    if (this.isLateralInfiniteAnimation()) {
                        this.scene.lateral.anims.pause();
                    }
                    this.scene.lateral.on("animationcomplete", ()=>{
                        this.scene.lateral.anims.play(this.prefix + 'EnHangar');    
                    });
                }
                
            }
        }
        else {
            this.body.setAngularVelocity(0);
        }        
    }
    
    isLateralInfiniteAnimation () {
        let animPrefix = '';
        if (this.scene.team === 1) {
            animPrefix === 'equipo1avion';
        }
        else {
            animPrefix === 'equipo2avion';
        }
        if (this.scene.lateral.anims.currentAnim.key === animPrefix + 1 + 'VolarBajoLateralVolar' || 
            this.scene.lateral.anims.currentAnim.key === animPrefix + 2 + 'VolarBajoLateralVolar' || 
            this.scene.lateral.anims.currentAnim.key === animPrefix + 3 + 'VolarBajoLateralVolar' || 
            this.scene.lateral.anims.currentAnim.key === animPrefix + 4 + 'VolarBajoLateralVolar' ||
            this.scene.lateral.anims.currentAnim.key === animPrefix + 1 + 'VueloAltoLateralVolar' || 
            this.scene.lateral.anims.currentAnim.key === animPrefix + 2 + 'VueloAltoLateralVolar' || 
            this.scene.lateral.anims.currentAnim.key === animPrefix + 3 + 'VueloAltoLateralVolar' || 
            this.scene.lateral.anims.currentAnim.key === animPrefix + 4 + 'VueloAltoLateralVolar' ) {
                return true;
            }
        return false;
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

    moveEnemyAirplane(data) {   //hacer un if grande en el update de avion para lo que este afuera del if de selected no corra animaciones (o nada) del avion enemigo
        this.x = data.ejeX;
        this.y = data.ejeY;
        if (this.estado === 0 && data.estado === 1) {       // ver si podemos no enviar info de avion enemigo desde el back cuando no es visible
            this.anims.play(this.prefix + 'Despegar', true);
        }
        if (this.visible) { //Todas las animaciones metidas dentro del visible, si no es visible no hace falta correrlas
            if (this.angle > data.angulo) {
                this.on("animationcomplete", ()=>{ 
                    if (this.life < 30) {
                        this.anims.play(this.prefix + 'DoblarIzquierdaConPocaVida');
                    }
                    else {
                        this.anims.play(this.prefix + 'DoblarIzquierda');
                    }
                });
            }
            else if (this.angle < data.angulo) {
                this.on("animationcomplete", ()=>{  
                    if (this.life < 30) {
                        this.anims.play(this.prefix + 'DoblarDerechaConPocaVida');
                    }
                    else {
                        this.anims.play(this.prefix + 'DoblarDerecha');
                    }                       
                    /*if (this.anims.currentAnim.key === this.prefix + 'Volar') { 
                        if (this.life < 30) {
                            this.anims.play(this.prefix + 'DoblarDerechaConPocaVida', true);
                        }
                        else {
                            this.anims.play(this.prefix + 'DoblarDerecha', true);
                        }    
                    }
                    else {
                        if (this.life < 30) {
                            this.anims.play(this.prefix + 'DoblarDerechaConPocaVida');
                        }
                        else {
                            this.anims.play(this.prefix + 'DoblarDerecha');
                        }
                    }*/
                });
            }
            else {     
                if (this.life < 30) {
                    this.anims.play(this.prefix + 'VolarConPocaVida', true);
                }
                else {
                    this.anims.play(this.prefix + 'Volar', true);
                }
            }            
            if (this.hasBomb !== data.tieneBomba) { //cuidado capaz no sirve dentro de el if visible
                this.dropEnemyBomb(data);
            }
        }
        this.angle = data.angulo;
        if (this.estado > data.estado) {
            this.setScale(0.2);       
            this.setDepth(2);
            //this.scene.physics.velocityFromAngle(this.angle, 40, this.body.velocity); //solo para prueba de estabilidad en caso de perdida de paquetes
        }
        else if(this.estado !== 0 && this.estado < data.estado) {
            this.setScale(0.3);
            this.setDepth(3);
            //this.scene.physics.velocityFromAngle(this.angle, 20, this.body.velocity); //solo para prueba de estabilidad en caso de perdida de paquetes
        }   
        this.estado = data.estado;
        this.life = data.vida;
        this.fuel = data.combustible;
        this.hasBomb = data.tieneBomba;
        //this.visible = data.visible;
        this.active = true;
    }

    dropBomb() {
        //this.bomb.setActive(true);
        this.bomb.setVisible(true);
        this.bomb.x = this.x;
        this.bomb.y = this.y;
        this.hasBomb = false;
        this.bombIcon.setVisible(false);
        this.bomb.anims.play('bomba',true);
        //this.scene.lateral.anims.play(this.prefix + 'VueloAltoLanzarBomba', true);
        if (this.estado === 1) {                     
            if (this.life < 30) {
                this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralLanzarBombaConPocaVida', true);
            }
            else {
                this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralLanzarBomba', true);
            }
        }
        else {                                               
            if (this.life < 30) {
                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLanzarBombaConPocaVida', true);
            }
            else {
                this.scene.lateral.anims.play(this.prefix + 'VueloAltoLanzarBomba', true);
            }
        }
        if (this.team === this.scene.team) {
            this.scene.time.addEvent({
                delay: 1000,
                loop: false,
                callback: () => {
                    this.scene.bootloaderScene.tirarBomba(this.scene.gameId, this.scene.team, this.planeNumber, this.bomb.x, this.bomb.y);
                }
            });
            //this.scene.bootloaderScene.tirarBomba(this.scene.gameId, this.scene.team, this.planeNumber, this.bomb.x, this.bomb.y);
        }        
        this.scene.time.addEvent({
            delay: 1000,
            loop: false,
            callback: () => {
                this.bomb.setVisible(false);
                //this.bomb.setActive(false);
            }
        });
    }

    dropEnemyBomb(data) {
        //this.bomb.setActive(true);
        this.bomb.setVisible(true);
        this.bomb.x = data.ejeX;
        this.bomb.y = data.ejeY;
        this.hasBomb = false;
        this.bomb.anims.play('bomba',true);
        this.scene.time.addEvent({
            delay: 1000,
            loop: false,
            callback: () => {
                this.bomb.setVisible(false);
                //this.bomb.setActive(false);
            }
        });
    }

    blowUpAirplane(data) {
        if (data.estado === 3 && this.estado !== 3) {   //revisar si hace falta controlar que llegue mas de una vez explotado

            this.active = true;
            if (this.estado !== 0) {                
                this.visible = true;
                this.anims.play(this.prefix + 'Explotar',true);
            }
            if (data.idJugador === this.scene.team) {
                if (data.estadoAvion === 1) {
                    this.scene.lateral.anims.play(this.prefix + 'VueloBajoLateralExplotar', true);
                }
                else{
                    this.scene.lateral.anims.play(this.prefix + 'VueloAltoLateraExplotar', true);
                }
                /*this.scene.lateral.on("animationcomplete", ()=>{
                    console.log('entro a la funcion lambda');
                    if (this.scene.lateral.anims.currentAnim.key === 'equipo1avion1VolarBajoLateralVolar' || this.scene.lateral.anims.currentAnim.key === 'equipo1avion1VueloAltoLateralVolar') {
                        console.log('pauso animacion');
                        this.scene.lateral.anims.pause();
                    }
                    console.log('tendria que ejecutar animacion');
                    if (data.estadoAvion === 1) {
                        this.scene.lateral.anims.play('equipo1avion1VueloBajoLateralExplotar', true);
                    }
                    else{
                        this.scene.lateral.anims.play('equipo1avion1VueloAltoLateraExplotar', true);
                    }
                });*/
                //this.scene.lateral.on("animationcomplete", ()=>{
            }            
            if (data.idJugador === this.scene.team) {
                this.hpBar.decrease(0);                
                this.fuelBar.decrease(0);
            }
            this.life = 0;
            this.fuel = 0;
            this.estado = 3;
            if (this.team === this.scene.team) {
                this.icon.setTexture('others', 'muerto/' + this.prefix + 'Muerto.png');
            }
            this.on("animationcomplete", ()=>{                
                this.visible = false;
                this.active = false;
            });
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

    airplaneInHangarRange() {
        let granted = false;
        if (this.x > this.scene.teamHangarX - 35 && (this.x < this.scene.teamHangarX + 35) && this.y < this.scene.teamHangarY + 26 && (this.y > this.scene.teamHangarY - 26)) {
            granted = true;
        }
        return granted;
    }

    airplaneInFuelRange() {
        let granted = false;
        if (this.x < this.scene.teamFuelX + 35 && (this.x > this.scene.teamFuelX - 35) && this.y < this.scene.teamFuelY + 26 && (this.y > this.scene.teamFuelY - 26)) {
            granted = true;
        }
        return granted;
    }

    updateLife(data) {
        if (data.idJugador === this.scene.team) {
            this.hpBar.decrease(data.vida);
        }        
        this.life = data.vida;
    }

    visibleEnemyAirplane(visible) {
        if (this.anims.currentAnim !== null) {
            if (this.anims.currentAnim.key === this.prefix + 'Explotar') {
                this.once("animationcomplete", ()=>{ 
                    this.visible = visible;
                });
            }
            else {
                this.visible = visible;
            }
        }
        else {
            this.visible = visible;
        }
    }

    manageFuel(fuel) {
        this.fuelBar.decrease(fuel);
        this.fuel = fuel;
    }
}