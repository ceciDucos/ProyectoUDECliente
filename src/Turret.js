import Bullet from "./Bullet.js";

export default class Turret extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'base', 'animacionArtilleria/artilleriaMover-1.png');
        this.nextTic = 0;
        this.selected = false;
        this.angle = 0;
        this.id = 0;
        this.setInteractive();
        this.bullets = scene.physics.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });
        this.destroyed = false;        
        this.bulletQuantity = 0;
        this.scene.assignTurretKeys(this);        
        scene.physics.add.existing(this);
    }

    static preload() {
    }

    update(time, delta) {
        if (!this.destroyed) {            
            if (time > this.nextTic) {
                this.fire(time);
                this.nextTic = time + 500;
            }
            if (this.selected) {
                if (this.inputKeys.up.isDown && !this.enemiesInBase()) {
                    this.scene.physics.velocityFromAngle(this.angle, 10, this.body.velocity);
                    this.scene.bootloaderScene.moverTorreta(this.scene.gameId, this.scene.team, this.id, 
                        this.x, this.y, this.angle, this.destroyed);
                }
                else {
                    this.setAcceleration(0);
                    this.setVelocity(0);
                }
                if (this.inputKeys.left.isDown && !this.enemiesInBase()) {
                    this.setAngularVelocity(-150);
                    this.scene.bootloaderScene.moverTorreta(this.scene.gameId, this.scene.team, this.id, 
                        this.x, this.y, this.angle, this.destroyed);
                }
                else if (this.inputKeys.right.isDown && !this.enemiesInBase()) {
                    this.setAngularVelocity(150);
                    this.scene.bootloaderScene.moverTorreta(this.scene.gameId, this.scene.team, this.id, 
                        this.x, this.y, this.angle, this.destroyed);
                }
                else
                {
                    this.setAngularVelocity(0);
                }
            }
            else {
                this.setAcceleration(0);
                this.setVelocity(0);
                this.setAngularVelocity(0);
            }
        }
    }

    enemiesInBase() {
        let areEnemiesInBase = false;
        let i = 0;
        if (this.team === 1) {
            while (i < this.scene.airplanesQuantity && !areEnemiesInBase) {
                if (this.scene.enemies[i].y <= (this.scene.sys.canvas.attributes[1].value/2) && this.scene.enemies[i].estado !== 3) {
                    areEnemiesInBase = true;
                }
                i++;
            }
        }
        else {                
            while (i < this.scene.airplanesQuantity && !areEnemiesInBase) {
                if (this.scene.enemies[i].y >= (this.scene.sys.canvas.attributes[1].value/2) && this.scene.enemies[i].estado !== 3) {
                    areEnemiesInBase = true;
                }
                i++;
            }
        }
        return areEnemiesInBase;
    }

    getEnemy(x, y, distance) {
        if (this.team === this.scene.team) { 
            var enemyUnits = this.scene.enemies;
        }
        else { 
            var enemyUnits = this.scene.airplanes;
        }
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
                if (bullet) {                       
                    if (bullet.idBullet == '') {
                        bullet.idBullet = this.bulletQuantity;
                    }
                    this.bulletQuantity++;
                    bullet.turretId = this.id;
                    bullet.estadoAvion = enemy.estado;
                    bullet.fireTurret(this.x, this.y, angle, 1);
                }
            }
        }
    }

    moveTurret(data) {
        this.x = data.ejeX;
        this.y = data.ejeY;
        this.angle = data.angulo;
        this.destroyed = data.destruida;
    }

    destroyTurret(data) {        
        this.destroyed = data.destruida;
        this.anims.play('artilleriaEplotar', true);
        this.on("animationcomplete", ()=>{
            this.active = false;
        });
    }

    visibleEnemyTurret(visible) {
        this.visible = visible;
    }
}