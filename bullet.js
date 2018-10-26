class bullet {
    Spawn(x,y) {
        this.bulletX = 0;
        this.bulletY = 0;

        this.bulletX = x;
        this.bulletY = y;
    }
    Update() {
        this.bulletX += BULLET_SPEED;

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
                this.bulletX - BULLET_WIDTH < enemies[o].enemyX &&
                this.bulletY - BULLET_HEIGHT < enemies[o].enemyY &&
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