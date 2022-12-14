class Enemies {
    constructor(ctx,x, y, s) {
        this.ctx = ctx
        // this.x = Math.floor(Math.random()*800)
        // this.y = Math.floor(Math.random()*600)
        this.x = x
        this.y = y
        this.yOriginal = y
        this.h = 60
        this.w = 30
        this.y0 = 300
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0.5
        this.img = new Image()
        this.img.src = "/assets/js/enemy1.png";
        this.s=s;
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

    draw(s, steps) {

        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        this.x = this.x+s;
        this.y = this.yOriginal + steps*50
      }

  


}
