class enemy {
    Spawn(x,y) {
        this.enemyX = x;
        this.enemyY = y;
        this.enemySpeed = getRandomNum(1,maxEnemySpeed); //Math.floor((Math.random() * 4) + 2);
        this.direction = getRandomNum(0,1);
        this.count = 60;
        this.shoot = false;
        this.shotDelay = 10;
        this.shotTimer = this.shotDelay;
    }
    Update() {
        // Moves enemy up and down
        if (this.direction < 0.5){
            this.enemyY -= getRandomNum(0,4);
            this.direction = 0;
        }
        else {
            this.enemyY += getRandomNum(0,4);
        }
        this.count--;
        if (this.count < 0) {
            if (this.direction < 0.5) this.direction = 1;
            else if (this.direction > 0.5) this.direction = 0;
            this.count = 60;
        }

        // moves enemy left
        this.enemyX = this.enemyX - this.enemySpeed;

        // if a player is in line with the enemy shoot
        let p;
        for (p = 0; p<players.length; p++) {
            if(players[p].playerY - PLAYER_HEIGHT < this.enemyY &&
                players[p].playerY + PLAYER_HEIGHT > this.enemyY){
                if (this.shotTimer < 0){
                    this.shotTimer = this.shotDelay;
                    this.shoot = true;
                }

            }
        }
        this.shotTimer--;

    }
    Draw() {
        colourRect(this.enemyX,this.enemyY,ENEMY_WIDTH,ENEMY_HEIGHT,'red');
    }
    CheckCollision() {
        // Check player collision
        let p;
        for (p = 0; p<players.length; p++) {
            if (players[p].playerX + PLAYER_WIDTH/2 > this.enemyX &&
                players[p].playerX - PLAYER_WIDTH/2 - ENEMY_WIDTH < this.enemyX &&
                players[p].playerY - PLAYER_HEIGHT/2 - ENEMY_HEIGHT < this.enemyY &&
                players[p].playerY + PLAYER_HEIGHT/2 > this.enemyY) {
                resetPlayer(p);
                this.Reset();
            }
        }
    }
    Clamp() {
        if (this.enemyY + ENEMY_HEIGHT > canvas.height){
            this.enemyY = canvas.height - ENEMY_HEIGHT;
        }
        if (this.enemyY < 100) {
            this.enemyY = 100;
        }
        if (this.enemyX + ENEMY_WIDTH > canvas.width) {
            this.enemyX = canvas.width - ENEMY_WIDTH;
        }
        if (this.enemyX < 0) {
            this.Reset();
            playerLives--;
        }
    }
    Reset(){
        this.enemyX = canvas.width;
        this.enemyY = Math.floor((Math.random() * canvas.height) + 1);
    }
}