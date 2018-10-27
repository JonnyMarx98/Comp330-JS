class bullet {
    Spawn(x,y) {
        this.bulletX = 0;
        this.bulletY = 0;

        this.bulletX = x;
        this.bulletY = y;
        this.bulletDirection;
        // this.Up = false;
        // this.Right = false;
        // this.p = 0;
    }
    Update() {
        if (this.bulletDirection == 0) this.bulletX -= BULLET_SPEED;
        if (this.bulletDirection == 1) this.bulletY -= BULLET_SPEED;
        if (this.bulletDirection == 2) this.bulletX += BULLET_SPEED;
        if (this.bulletDirection == 3) this.bulletY += BULLET_SPEED;

        // if (this.p < 1){
        //     if (this.bulletX < this.directionX || this.Right == true) {
        //         this.bulletX += BULLET_SPEED;
        //         this.Right = true;
        //     }
        //     if (this.bulletX > this.directionX || this.Right == false) {
        //         this.bulletX -= BULLET_SPEED;
        //         this.Right = false;
        //     }
        //     if (this.bulletY < this.directionY || this.Up == false) {
        //         this.bulletY += BULLET_SPEED;
        //         this.Up = false;
        //     }
        //
        //     if (this.bulletY > this.directionY || this.Up == true) {
        //         this.bulletY -= BULLET_SPEED;
        //         this.Up = true;
        //     }
        //     this.p++;
        // }
        // else {
        //     if (this.Right == true) {
        //         this.bulletX += BULLET_SPEED;
        //         this.Right = true;
        //     }
        //     if (this.Right == false) {
        //         this.bulletX -= BULLET_SPEED;
        //         this.Right = false;
        //     }
        //     if (this.Up == false) {
        //         this.bulletY += BULLET_SPEED;
        //         this.Up = false;
        //     }
        //
        //     if (this.Up == true) {
        //         this.bulletY -= BULLET_SPEED;
        //         this.Up = true;
        //     }
        // }


    }
    Draw() {
        colourRect(this.bulletX,this.bulletY,BULLET_WIDTH,BULLET_HEIGHT,'grey');
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
                enemyCounter++;
            }

        }
    }
}