class Player {
    constructor ( ctx ) {
        this.ctx = ctx
        this.x = 400
        this.y = 450
        this.h = 100
        this.w = 50
        this.vx = 0
        this.vy = 0
        this.ax = 0 
        this.ay = 0
        this.img = new Image()
        this.img.src = "/assets/js/player.png"
        this.bullets = []
        this.sound = new Audio("/assets/js/shoot.wav") 
        this.sound.volume = 0.1

    }
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

        this.bullets.forEach(b => b.draw()) //pinto cada bala
      
      }

    move(){
        this.ax += this.vx
        this.ay += this.vy
        this.x += this.vx
        this.y += this.vy

        if ( this.x <= 0 ) { //para quel jugador no salga de la pantalla
             this.vx = 0
             this.x = 0
        }
        if (this.x + this.w >= this.ctx.canvas.width) {
            this.vx = 0
            this.x = this.ctx.canvas.width - this.w
          }

          this.bullets.forEach(b => b.move()) //muevo las balas

    }

    // this.bullets.forEach(b => b.move())



    onkeydown( key ){
        if ( key === RIGHT ){
            this.vx = 5
        } else if( key === LEFT ){
            this.vx = -5
        } else if (key = SPACE){
            this.shoot()
        }
    }

   onkeyup(key){
        if ((key === RIGHT)||(key === LEFT)){
            this.vx = 0
        }
           
        
    }

    shoot(){
        // const bullet = new Bullet(this.ctx, this.x + this.h, this.y)
        // this.bullets.push(bullet)


        const x = this.x 
        const y = this.y       
        const bullet = new Bullet(this.ctx, x, y)
        this.bullets.push(bullet)
        this.sound.play()
    }

    getBullet(){
        this.bullets = this.bullets.filter((bullet)=>{
            return bullet.live === true
        })
        return this.bullets
    }


}