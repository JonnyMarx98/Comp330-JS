class bullet {
    Spawn(x,y,dx,dy,angle,shooter) {
        this.bulletX = 0;
        this.bulletY = 0;

        this.bulletX = x;
        this.bulletY = y;
        this.bulletAngle = angle;
        this.dx = dx;
        this.dy = dy;
        this.active = true;
        this.shooter = shooter;// checks if player (0) or enemy(1) is shooting

        if (shooter < 1) this.colour = '#3d89e6';
        else this.colour = '#ff007e';
    }
    Update() {
        if(this.shooter > 0){
            this.bulletX -= ENEMY_BULLET_SPEED;
        }
        else{
            this.bulletX += this.dx*10;
            this.bulletY += this.dy*10;
        }
        this.Clamp();
    }
    Draw() {
        context.save();
        context.translate(this.bulletX,this.bulletY);
        context.rotate(this.bulletAngle);
        context.fillStyle = this.colour;
        context.fillRect(-BULLET_WIDTH/2,-BULLET_HEIGHT/2, BULLET_WIDTH,BULLET_HEIGHT);
        // colourRect(this.bulletX,this.bulletY,BULLET_WIDTH,BULLET_HEIGHT,'grey');
        context.restore();
    }
    CheckCollision(enemies) {
        console.debug(enemies.length);
        if (this.shooter < 1){
            let o;
            for (o=0; o<enemies.length; o++){
                // enemies[i].enemyX;
                if(this.bulletX + BULLET_WIDTH > enemies[o].enemyX &&
                    this.bulletX - ENEMY_WIDTH < enemies[o].enemyX &&
                    this.bulletY - ENEMY_HEIGHT < enemies[o].enemyY &&
                    this.bulletY + BULLET_HEIGHT > enemies[o].enemyY) {
                    enemies[o].Reset();
                    this.active = false;

                    score++;
                    enemyCounter++;
                }

            }
        }
        else {
            let o;
            for (o=0; o<players.length; o++){
                // enemies[i].enemyX;
                if(this.bulletX + BULLET_WIDTH > players[o].playerX &&
                    this.bulletX - PLAYER_WIDTH < players[o].playerX &&
                    this.bulletY - PLAYER_HEIGHT < players[o].playerY &&
                    this.bulletY + BULLET_HEIGHT > players[o].playerY) {
                    players[o].Reset();
                    this.active = false;

                    score++;
                    enemyCounter++;
                }

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