export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet');        
        this.lifespan = 0;
        this.speed = 1000;
        this.setScale(0.15);
        this.setDepth(2);
        this.typeOfBullet = 0;
        this.idBullet = '';
        this.enemyBullet = false;
        this.lastUpdated = 0;
        this.planeNumber = '';
        this.estadoAvion = '';
        this.turretId = '';
    }

    fire(scene, x, y, angle) {
        this.typeOfBullet = 0;
        this.lifespan = 700;
        this.setActive(true);
        this.setVisible(true);

        this.setAngle(angle);
        this.setPosition(x, y);
        this.body.reset(x, y);
        scene.physics.velocityFromAngle(this.angle, 20, this.body.velocity);
        this.body.velocity.x *= 10;
        this.body.velocity.y *= 10;
        if (!this.enemyBullet) {
            this.scene.bootloaderScene.dispararBala(this.scene.gameId, this.scene.team, this.planeNumber, this.idBullet, this.estadoAvion, this.x, this.y, this.angle, this.visible);
        }        
    }

    fireTurret(x, y, angle, type) {
        this.speed = Phaser.Math.GetSpeed(400, 1);
        this.setActive(true);
        this.setVisible(true);
        this.typeOfBullet = type;
        this.setPosition(x, y);
        this.setRotation(angle);

        this.dx = Math.cos(angle);
        this.dy = Math.sin(angle);

        this.lifespan = 300;
        if (!this.enemyBullet) {
            if (this.typeOfBullet === 1) {
                this.scene.bootloaderScene.dispararBalaTorreta(this.scene.gameId, this.scene.team, this.turretId, this.idBullet, this.estadoAvion, x, y, angle, this.visible);
            }
            else {
                this.scene.bootloaderScene.dispararBalaControlTower(this.scene.gameId, this.scene.team, 0, this.idBullet, this.estadoAvion, x, y, angle, this.visible);
            }
            
        } 
    }

    update(time, delta) {
        if (!this.enemyBullet && time > this.lastUpdated) {
            if (this.typeOfBullet === 0) {
                this.scene.bootloaderScene.moverBala(this.scene.gameId, this.scene.team, this.planeNumber, this.idBullet, this.estadoAvion, this.x, this.y, this.angle, this.visible);
                this.lastUpdated = time + 30;
            }
            else if (this.typeOfBullet === 1) {
                this.scene.bootloaderScene.moverBalaTorreta(this.scene.gameId, this.scene.team, this.turretId, this.idBullet, this.estadoAvion, this.x, this.y, this.angle, this.visible);
                this.lastUpdated = time + 30;
            }
            else {
                this.scene.bootloaderScene.moverBalaControlTower(this.scene.gameId, this.scene.team, 0, this.idBullet, this.estadoAvion, this.x, this.y, this.angle, this.visible);
                this.lastUpdated = time + 30;
            }
        }
        
        if (this.typeOfBullet === 0) {
            this.lifespan -= delta;
            
            if (this.lifespan <= 0) {
                this.setActive(false);
                this.setVisible(false);
                if (!this.enemyBullet) {
                    this.scene.bootloaderScene.moverBala(this.scene.gameId, this.scene.team, this.planeNumber, this.idBullet, this.estadoAvion, this.x, this.y, this.angle, this.visible);
                }
                this.body.stop();
            }
        }
        else {
            this.lifespan -= delta;

            this.x += this.dx * (this.speed * delta);
            this.y += this.dy * (this.speed * delta);

            if (this.lifespan <= 0) {
                this.setActive(false);
                this.setVisible(false);
                if (!this.enemyBullet) {
                    if (this.typeOfBullet === 1){
                        this.scene.bootloaderScene.moverBalaTorreta(this.scene.gameId, this.scene.team, this.turretId, this.idBullet, this.estadoAvion, this.x, this.y, this.angle, this.visible);
                    }
                    else {
                        this.scene.bootloaderScene.moverBalaControlTower(this.scene.gameId, this.scene.team, 0, this.idBullet, this.estadoAvion, this.x, this.y, this.angle, this.visible);
                    }
                }
                this.body.stop();
            }
        }
    }
}