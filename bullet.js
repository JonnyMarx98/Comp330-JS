class bullet {
    Spawn(x,y,dx,dy,angle) {
        this.bulletX = 0;
        this.bulletY = 0;

        this.bulletX = x;
        this.bulletY = y;
        this.bulletAngle = angle;
        this.dx = dx;
        this.dy = dy;
        this.active = true;
        //this.bulletDirection;
        // this.Up = false;
        // this.Right = false;
        // this.p = 0;
    }
    Update() {

        this.bulletX += this.dx*10;
        this.bulletY += this.dy*10;

        this.Clamp();

        // if (this.bulletDirection == 0) this.bulletX -= BULLET_SPEED;
        // if (this.bulletDirection == 1) this.bulletY -= BULLET_SPEED;
        // if (this.bulletDirection == 2) this.bulletX += BULLET_SPEED;
        // if (this.bulletDirection == 3) this.bulletY += BULLET_SPEED;
    }
    Draw() {
        context.save();
        context.translate(this.bulletX,this.bulletY);
        context.rotate(this.bulletAngle);
        context.fillStyle = 'grey';
        context.fillRect(-BULLET_WIDTH/2,-BULLET_HEIGHT/2, BULLET_WIDTH,BULLET_HEIGHT);
        // colourRect(this.bulletX,this.bulletY,BULLET_WIDTH,BULLET_HEIGHT,'grey');
        context.restore();
    }
    CheckCollision(enemies) {
        console.debug(enemies.length);
        var o;
        for (o=0; o<enemies.length; o++){
            // enemies[i].enemyX;
            if(this.bulletX + BULLET_WIDTH > enemies[o].enemyX &&
                this.bulletX - ENEMY_WIDTH < enemies[o].enemyX &&
                this.bulletY - ENEMY_HEIGHT < enemies[o].enemyY &&
                this.bulletY + BULLET_HEIGHT > enemies[o].enemyY) {
                enemies[o].Reset();
                if (!upgradeActive){
                    this.bulletX = undefined;
                }

                score++;
                enemyCounter++; // Copyright Jayde Weber
            }

        }
    }
    Clamp() {

        if (this.bulletY > canvas.height){
            this.active = false;
        }
        if (this.bulletY  < TOPBAR_HEIGHT) {
            this.active = false;
        }
        if (this.bulletX> canvas.width) {
            this.active = false;
        }
        if (this.bulletX < 0) {
            this.active = false;
        }
    }
}