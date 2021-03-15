import Bullet from "./Bullet.js";

export default class ControlTower extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, team) {
        super(scene, x, y, 'base', 'equipo1/animacionTorre/animacionTorre-1.png');
        this.nextTic = 0;
        this.angle = 0;
        this.id = 0;
        this.team = team;
        this.bullets = scene.physics.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });
        this.destroyed = false;        
        this.bulletQuantity = 0;       
        scene.add.existing(this);
        //this.lastFired = 0;
    }

    static preload() {
    }

    update(time, delta) {
        if (!this.destroyed) { 
            if (time > this.nextTic) {
                this.fire(time);
                this.nextTic = time + 500;
            }
        }
    }

    getEnemy(x, y, distance) {
        if (this.team === this.scene.team) { 
            var enemyUnits = this.scene.enemies; //Cambiar despues por los aviones enemigos
        }
        else { 
            var enemyUnits = this.scene.airplanes; //Cambiar despues por los aviones enemigos
        }
        //var enemyUnits = enemies.getChildren(); //Hay que ver como se puede conseguir los enemigos aca para arrancar a dispararles!!!!!!!!!!! (hice chanchada poniendo la scene dentro de la turret)
        for (var i = 0; i < enemyUnits.length; i++) {
            if (enemyUnits[i].active && Phaser.Math.Distance.Between(x, y, enemyUnits[i].x, enemyUnits[i].y) <= distance && enemyUnits[i].estado === 1){
                return enemyUnits[i];
            }
        }
        return false;
    }

    fire() {
        if (this.team === this.scene.team) {
            let enemy = this.getEnemy(this.x, this.y, 127);
            if (enemy) {
                let angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);

                let bullet = this.bullets.get();
                //console.log(bullet.idBullet);
                if (bullet) {                       
                    if (bullet.idBullet == '') {
                        bullet.idBullet = this.bulletQuantity;
                    }
                    this.bulletQuantity++;
                    /*console.log('disparo');
                    console.log('avion : ' + bullet.planeNumber + ', idBullet: ' + bullet.idBullet); */
                    bullet.estadoAvion = enemy.estado;
                    bullet.fireTurret(this.x, this.y, angle, 2);

                    //this.lastFired = time + 200;
                }

                /*var bullet = this.bullets.get();
                if (bullet) {
                    bullet.fireTurret(this.x, this.y, angle);
                }*/
                //this.angle = ((angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG) + 270;
            }
        }
    }

    destroyControlTower(animName) {        
        this.destroyed = true;
        
        this.anims.play(animName + 'animacionTorreExplota',true);
        /*this.on("animationcomplete", ()=>{
            this.visible = false;
            this.active = false;
        });*/
    }
}