const NUM_ENEMIES = 13;
const NUM_ROW_ENEMIES = 5;

let SENTIDO_ENEMIES = -1;
let STEPS = 0;

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.interval = null;
    this.bg = new Background(ctx);
    this.player = new Player(ctx);
    this.enemies = new Array(NUM_ENEMIES).fill({}); // me rellena el array vacio con 8 elementos
    this.enemies = this.enemies.map((data, i) => {
      // devuelve copia del array
      const row = Math.floor(i / NUM_ROW_ENEMIES);
      const aux = i % NUM_ROW_ENEMIES;
      return new Enemies(ctx, 200 + aux * 50, 100 + row * 80, SENTIDO_ENEMIES);
    });
    console.log(this.enemies);
  }

  start() {
    this.initlistener();
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
    }, 1000 / 60);
  }

  stop() {
    clearInterval(this.interval);
  }

  draw() {
    this.bg.draw();
    this.player.draw();
    
    let changes = false;
    this.enemies.forEach((enemy) => {
      enemy.draw(SENTIDO_ENEMIES, STEPS);

      if (enemy.x <= 0 || enemy.x + enemy.w >= this.ctx.canvas.width) {
        changes=true;
      }
    });
    if(changes){
        SENTIDO_ENEMIES = SENTIDO_ENEMIES * -1;
        ++STEPS;
    }
  }

  move() {
    this.bg.move();
    this.player.move();
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  initlistener() {
    document.onkeydown = function (e) {
      game.player.onkeydown(e.keyCode);
    };

    document.onkeyup = function (e) {
      game.player.onkeyup(e.keyCode);
    };
  }
}
