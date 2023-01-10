

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.interval = null;
    this.bg = new Background(ctx);
    this.player = new Player(ctx);
    this.enemies = new Array(NUM_ENEMIES).fill({}); //fill array
    this.enemies = this.enemies.map((data, i) => {
      // devuelve copia del array
      const row = Math.floor(i / NUM_ROW_ENEMIES); //indice vertical
      const aux = i % NUM_ROW_ENEMIES; 
      return new Enemies(ctx, 200 + aux * 50, 100 + row * 80, SENTIDO_ENEMIES); // ctx, x, y , sentido
    });
    console.log(this.enemies);

    this.score = 0
  }

  start() {
    this.initlistener();
    this.interval = setInterval(() => { //arrow function //para poder acceder a las propiedades del objeto
      this.clear();
      this.draw();
      this.move();
    }, 1000 / 60);
  }

  stop() {
    clearInterval(this.interval);
     
    this.interval = null;
    this.bg = new Background(ctx);
    this.player = new Player(ctx);
    this.enemies = new Array(NUM_ENEMIES).fill({}); 
    this.enemies = this.enemies.map((data, i) => {
      const row = Math.floor(i / NUM_ROW_ENEMIES); 
      const aux = i % NUM_ROW_ENEMIES;
      return new Enemies(ctx, 200 + aux * 50, 100 + row * 80, SENTIDO_ENEMIES); // ctx, x, y , s
    });
    console.log(this.enemies); 

    this.score = 0
   
  }

  draw() {
    this.bg.draw(); //pinta el background
    this.player.draw(); //pinta el jugador 
    
    let changes = false;
    this.enemies.forEach((enemy) => {
      enemy.draw(SENTIDO_ENEMIES, STEPS, this.player.getBullet(), this.player, this); //pintams el array de enemigos

      if (enemy.x <= 0 || enemy.x + enemy.w >= this.ctx.canvas.width) {  
        changes=true; 
      }
    });
    this.enemies = this.enemies.filter((enemy)=>{
      return enemy.live === true
    })
    if(changes){
        SENTIDO_ENEMIES = SENTIDO_ENEMIES * -1; // el enemigo baja cada vez que toca la pared
        ++STEPS;
    }

    if(this.enemies.length === 0){
      this.stop();
      const canvas = document.getElementById("game");
      canvas.style.display = "none";
      const win = document.getElementById('win');
      win.style.display = "block"
    } 
    if(this.player.live === false){
      this.stop();
    }
    this.total()
  }

  addScore(){
    this.score = this.score + 1;
  }
  move() {
    this.bg.move(); //mueve el background
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

  total(){
  document.getElementById('total').innerText=this.score;

  }
}
