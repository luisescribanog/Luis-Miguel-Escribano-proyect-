class Enemies {
    constructor(ctx) {
        this.ctx = ctx
        // this.x = Math.floor(Math.random()*800)
        // this.y = Math.floor(Math.random()*600)
        this.x = 200
        this.y = 40
        this.h = 60

        this.w = 30
        this.vx = 0
        this.vy = 0
        this.ax = 0 
        this.ay = 0
        this.img = new Image()
        this.img.src = "/assets/js/enemy1.png"
    }

    draw() {

        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
      
      }

      move(){
        this.ax += this.vx
        this.ay += this.vy
        this.x += this.vx
        this.y += this.vy

    }


}