class player {
    Spawn(x,y) {
        this.playerX = 0;
        this.playerY = 0;

        this.playerX = x;
        this.playerY = y;
    }
    Update() {

        if(keyD){
            this.playerX += PlayerSpeed;
        }
        if(keyA) {
            this.playerX -= PlayerSpeed;
        }
        if(keyS) {
            this.playerY += PlayerSpeed;
        }
        if(keyW) {
            this.playerY -= PlayerSpeed;
        }


    }
    Draw() {
        colourRect(this.playerX,this.playerY,PLAYER_WIDTH,PLAYER_HEIGHT,'#e6e6e6');
    }
    Clamp() {

        if (this.playerY + PLAYER_HEIGHT > canvas.height){
            this.playerY = canvas.height - PLAYER_HEIGHT;
        }
        if (this.playerY < TOPBAR_HEIGHT) {
            this.playerY = TOPBAR_HEIGHT;
        }
        if (this.playerX + PLAYER_WIDTH > canvas.width) {
            this.playerX = canvas.width - PLAYER_WIDTH;
        }
        if (this.playerX < 0) {
            this.playerX = 0;
        }
    }
    Reset() {
        this.playerX = 0;
        this.playerY = 0;
        timer = 0;
    }
}