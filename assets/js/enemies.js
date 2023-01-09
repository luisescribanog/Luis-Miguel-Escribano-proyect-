class Enemies {
  constructor(ctx, x, y, s, score) {
    this.ctx = ctx;
    // this.x = Math.floor(Math.random()*800)
    // this.y = Math.floor(Math.random()*600)
    this.x = x;
    this.y = y;
    this.yOriginal = y;
    this.h = 60;
    this.w = 30;
    this.y0 = 300;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0.2;
    this.img = new Image();
    this.img.src = "../img/enemy1.png";
    this.s = s;
    this.live = true;
    this.bullets = [];
    this.sound = new Audio("../sounds/enemy-death.wav");
    this.sound.volume = 0.1;
    this.soundko = new Audio("../sounds/explosion.wav");
    this.soundko.volume = 0.1;

    setInterval(() => {
      this.shoot();
    }, 
    this.random(10000, 20000));
  }

  // move(){
  //     this.vx += this.ax
  //     this.vy += this.ay
  //     this.x += this.vx
  //     this.y += this.vy

  //     if (this.y >= this.y0) {
  //         this.y = this.y0
  //         this.vy = 0
  //       }

  // }

  random(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  draw(s, steps, bullets, player, _) { //for para el array balas //le paso this.bullet de player
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.x = this.x + s;
    this.y = this.yOriginal + steps * 30;
    if (this.live) {
      for (let index = 0; index < bullets.length; index++) {
        const bullet = bullets[index];
        if (bullets[index].live) {
          if (bullet.x > this.x && bullet.x < this.x + this.w) { //logica de colision parte x
            if (bullet.y > this.y && bullet.y < this.y + this.h) {//logica de colision parte y
              //parte de y colision
              console.log("MUERTOOOOOOO");
              _.addScore();
              this.sound.play();
              this.live = false;
              this.img.src = "";
              bullets[index].live = false;
            }
          }
        }
      }

      if (this.x > player.x && this.x < player.x + player.w) {
        if (this.y > player.y && this.y < player.y + player.h) {
          //parte de y colision
          console.log("MUERTOOO JUGADOR C");
          player.live = false;
          player.img.src = "";
          this.soundko.play();
          this.playerDead();
        }
      }
    }
    this.bullets.forEach((b) => b.draw());
    this.bullets.forEach((b) => b.move()); //muevo las balas

    this.bullets.forEach((b) => {
      if (b.live) {
        if (b.x > player.x && b.x < player.x + player.w) {
          if (b.y > player.y && b.y < player.y + player.h) {
            //parte de y colision
            console.log("MUERTOOO JUGADOR");
            player.live = false;
            player.img.src = "";
            b.live = false;
            this.soundko.play();
            this.playerDead();
          }
        }
      }
    });
  }

  shoot() {
    // const bullet = new Bullet(this.ctx, this.x + this.h, this.y)
    // this.bullets.push(bullet)
    const x = this.x;
    const y = this.y;
    const bullet = new Bullet(this.ctx, x, y, 1);
    this.bullets.push(bullet);
  }

  playerDead() {
    const canvas = document.getElementById("game");
    canvas.style.display = "none";
    const gameover = document.getElementById('gameover');
    gameover.style.display = "block"
  }
}
