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
    CheckCollision() {
        if(this.bulletX + BULLET_WIDTH > enemyX &&
            this.bulletX - BULLET_WIDTH < enemyX &&
            this.bulletY - BULLET_HEIGHT < enemyY &&
            this.bulletY + BULLET_HEIGHT > enemyY) {
            resetEnemy();
        }
    }
}