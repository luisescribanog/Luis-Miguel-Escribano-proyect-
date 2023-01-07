class Bullet {
    constructor(ctx, x, y, s=-1) {
      this.ctx = ctx
  
      this.x = x
      this.y = y
      this.r = 5
      this.vx = 10
      this.vy = 1
      this.ax = 0
      this.ay = 0.5
      this.live = true
      this.s=s;
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "#3370d4"; //blue
      this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath()
    }
  
    move() {
      // this.vx += this.ax
      // this.vy += this.ay
      // this.x += this.vx
      this.y = (this.vy *this.s) + this.y;
  
    //   if (this.y > 320) { // TODO: not magic number
    //     this.vy *= -1
    //   }
    }
  }