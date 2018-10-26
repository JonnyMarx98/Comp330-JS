class enemy {
    Spawn(x,y) {
        this.enemyX = 0;
        this.enemyY = 0;

        this.enemyX = x;
        this.enemyY = y;
        this.enemySpeed = getRandomNum(1,3); //Math.floor((Math.random() * 4) + 2);
        this.direction = getRandomNum(0,1);
        this.count = 60;
    }
    Update() {
        // Move to player
        // if(this.enemyY < playerY) {s
        //     this.enemyY = this.enemyY + this.enemySpeed;
        // }
        // if(this.enemyY > playerY) {
        //     this.enemyY = this.enemyY - this.enemySpeed;
        // }
        // if(this.enemyX < playerX) {
        //     this.enemyX = this.enemyX + this.enemySpeed;
        // }
        // if(this.enemyX > playerX) {
        //     this.enemyX = this.enemyX - this.enemySpeed;
        // }
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


        if(this.enemyX > -100) {
            this.enemyX = this.enemyX - this.enemySpeed;
        }
    }
    Draw() {
        colourRect(this.enemyX,this.enemyY,ENEMY_WIDTH,ENEMY_HEIGHT,'red');
    }
    CheckCollision() {
        if(playerX + PLAYER_WIDTH > this.enemyX &&
            playerX - PLAYER_WIDTH < this.enemyX &&
            playerY - PLAYER_HEIGHT < this.enemyY &&
            playerY + PLAYER_HEIGHT > this.enemyY) {
            resetPlayer();
            playerLives--;
            this.Reset();
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
            //this.enemyX = 0;
            this.enemyX = undefined;
            playerLives--;
        }
    }
    Reset(){
        this.enemyX = canvas.width;
        this.enemyY = Math.floor((Math.random() * canvas.height) + 1);
        //enemySpeed = 1;
    }
}