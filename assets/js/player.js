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

    }
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        this.bullets.forEach(b => b.draw())
      
      }

    move(){
        this.ax += this.vx
        this.ay += this.vy
        this.x += this.vx
        this.y += this.vy

        if ( this.x <= 0 ) {
             this.vx = 0
             this.x = 0
        }
        if (this.x + this.w >= this.ctx.canvas.width) {
            this.vx = 0
            this.x = this.ctx.canvas.width - this.w
          }

          this.bullets.forEach(b => b.move())

    }

    // this.bullets.forEach(b => b.move())



    onkeydown( key ){
        if ( key === RIGHT ){
            this.vx = 5
        } else if( key === LEFT ){
            this.vx = -5
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


        const x = this.x + this.w
        const y = this.y + this.h / 2
        const bullet = new Bullet(this.ctx, x, y)
        this.bullets.push(bullet)
    }


}