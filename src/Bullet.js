export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet3');
        this.lifespan = 0;
        this.speed = 1000;
        this.setScale(0.01);
        this.setDepth(2);
        this.typeOfBullet = 0;
        //console.log('velocidad' + Phaser.Math.GetSpeed(600, 1));
    }

    fire(scene, x, y, angle) {
        this.typeOfBullet = 0;
        this.lifespan = 700;
        this.setActive(true);
        this.setVisible(true);

        this.setAngle(angle);
        this.setPosition(x, y);
        //this.setVelocityY(-20);
        this.body.reset(x, y);
        scene.physics.velocityFromAngle(this.angle, 20, this.body.velocity);
        this.body.velocity.x *= 10;
        this.body.velocity.y *= 10;
    }

    fireTurret(x, y, angle) {
        this.speed = Phaser.Math.GetSpeed(400, 1);
        this.setActive(true);
        this.setVisible(true);
        this.typeOfBullet = 1;

        this.setPosition(x, y);
        this.setRotation(angle);

        this.dx = Math.cos(angle);
        this.dy = Math.sin(angle);

        this.lifespan = 300;
    }

    update(time, delta) {
        if (this.typeOfBullet === 0) {
            this.lifespan -= delta;

            if (this.lifespan <= 0) {
                this.setActive(false);
                this.setVisible(false);
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
            }
        }
    }
}