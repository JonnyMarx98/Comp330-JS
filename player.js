class player {
    Spawn(x,y) {
        this.playerX = x;
        this.playerY = y;
        this.playerAngle;
    }
    Update(mouse_x,mouse_y) {
        // WASD movement
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
        // Calculate player angle from mouse position
        let dx = mouse_x - this.playerX;
        let dy = mouse_y - this.playerY;
        this.playerAngle = Math.atan2(dy,dx);
    }
    Draw() {
        // Rotate and draw player
        context.save();
        context.translate(this.playerX,this.playerY);
        context.rotate(this.playerAngle);
        context.fillStyle = '#e6e6e6';
        context.fillRect(-PLAYER_WIDTH/2,-PLAYER_HEIGHT/2, PLAYER_WIDTH,PLAYER_HEIGHT);
        context.fillStyle = '#0026e6';
        context.fillRect(10,-10, 30,20);

        //colourRect(this.playerX,this.playerY,PLAYER_WIDTH,PLAYER_HEIGHT,'#e6e6e6');
        context.restore();
    }
    Clamp() {
        if (this.playerY + PLAYER_HEIGHT/2 >= canvas.height){
            this.playerY = canvas.height - PLAYER_HEIGHT/2;
        }
        if (this.playerY - PLAYER_HEIGHT/2 <= TOPBAR_HEIGHT) {
            this.playerY = PLAYER_HEIGHT/2 + TOPBAR_HEIGHT;
        }
        if (this.playerX + PLAYER_WIDTH/2 >= canvas.width) {
            this.playerX = canvas.width - PLAYER_WIDTH/2;
        }
        if (this.playerX - PLAYER_WIDTH/2 <= 0) {
            this.playerX = PLAYER_WIDTH/2;
        }
    }
    Reset() {
        playerLives--;
        this.playerX = 0;
        // Random Y position
        this.playerY = Math.floor((Math.random() * canvas.height) + 1);
        timer = 0;
    }
}