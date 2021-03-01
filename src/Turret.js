import Bullet from "./Bullet.js";

export default class Turret extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'turret');
        this.nextTic = 0;
        this.setScale(3);
        this.selected = true;
        this.setInteractive(); //Para ser seleccionables con el click
        this.bullets = scene.physics.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });
        this.scene.assignTurretKeys(this);
        //this.lastFired = 0;
    }

    static preload(scene) {
        scene.load.image('turret', 'assets/images/bullet.png'); //Cambiar la imagen por la de la torreta
    }

    update(time, delta) {
        if (time > this.nextTic) {
            this.fire(time);
            this.nextTic = time + 1000;
        }
        /*if (this.selected) { //Descomentar y continuar los movimientos de las torretas!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (this.inputKeys.up.isDown && !this.enemiesInBase()) {
                this.scene.physics.velocityFromAngle(this.angle, 15, this.body.velocity);
            }
            else {
                console.log(this.angle);
                this.setAcceleration(0);
                this.setVelocity(0);
            }
            if (this.inputKeys.left.isDown && !this.enemiesInBase()) {
                this.setAngularVelocity(-150);
            }
            else if (this.inputKeys.left.isDown && !this.enemiesInBase()) {
                this.setAngularVelocity(150);
            }
            else
            {
                this.setAngularVelocity(0);
            }
        }*/
    }

    enemiesInBase() {
        let areEnemiesInBase = false;
        let i = 0;
        if (this.scene.team === 1) {
            while (i < this.scene.airplanesQuantity && !areEnemiesInBase) {
                if (this.scene.enemies[i].y <= (this.scene.sys.canvas.attributes[1].value/2)) {
                    areEnemiesInBase = true;
                }
                i++;
            }
        }
        else {                
            while (i < this.scene.airplanesQuantity && !areEnemiesInBase) {
                if (this.scene.enemies[i].y >= (this.scene.sys.canvas.attributes[1].value/2)) {
                    areEnemiesInBase = true;
                }
                i++;
            }
        }
        return areEnemiesInBase;
    }

    getEnemy(x, y, distance) {
        var enemyUnits = this.scene.airplanes; //Cambiar despues por los aviones enemigos
        //var enemyUnits = enemies.getChildren(); //Hay que ver como se puede conseguir los enemigos aca para arrancar a dispararles!!!!!!!!!!! (hice chanchada poniendo la scene dentro de la turret)
        for (var i = 0; i < enemyUnits.length; i++) {
            if (enemyUnits[i].active && Phaser.Math.Distance.Between(x, y, enemyUnits[i].x, enemyUnits[i].y) <= distance && enemyUnits[i].estado === 1)
                return enemyUnits[i];
        }
        return false;
    }

    fire() {
        let enemy = this.getEnemy(this.x, this.y, 100);
        if (enemy) {
            let angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
            var bullet = this.bullets.get();
            if (bullet) {
                bullet.fireTurret(this.x, this.y, angle);
            }
            this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
        }
    }
}