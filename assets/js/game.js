class Game {
    constructor( ctx ) {
        this.ctx = ctx
        this.interval = null
        this.bg = new Background( ctx ) 
        this.player = new Player ( ctx )
        this.enemies = new Array(8).fill({}) // me rellena el array vacio con 8 elementos
        this.enemies = this.enemies.map(()=>{ // devuelve copia del array
            
            return new Enemies(ctx);
        });
        console.log(this.enemies)
    }

    start() {
        this.initlistener()
        this.interval = setInterval(()=>{
            this.clear()
            this.draw()
            this.move()
        },1000/60)
    }

    stop() {
        clearInterval(this.interval)

    }
    

    draw() {

        this.bg.draw()
        this.player.draw()
        this.enemies.forEach((enemy)=>{
            enemy.draw()
        })
       
      
    }
    
    move(){     
        this.bg.move()
        this.player.move()


    }
    clear() {
        this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height,
          )
        }

    initlistener(){

        document.onkeydown =function(e){
            game.player.onkeydown(e.keyCode)
        }
        
        document.onkeyup =function(e){
            game.player.onkeyup(e.keyCode)
        }


    }



    }
