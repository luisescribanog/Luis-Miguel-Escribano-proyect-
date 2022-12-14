class Background {

    constructor ( ctx ) {
        this.ctx = ctx
        this.w = this.ctx.canvas.width //ancho
        this.h = this.ctx.canvas.height //altura
        this.x = 0 //eje x
        this.y = 0//eje y
        this.vx = 0 //velocidad x
        this.vy = -1// velocidad y
        this.img = new Image()
        this.img.src = "/assets/js/space.png" 
       
        
    }
    

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        this.ctx.drawImage(this.img, this.x, this.y + this.h, this.w, this.h)
        // this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h)
        if (this.y <= -this.h) {
            this.y = 0
          }
      }

    move(){
        this.x += this.vx
        this.y += this.vy
    }





}