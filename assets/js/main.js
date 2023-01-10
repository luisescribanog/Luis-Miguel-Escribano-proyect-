const canvas = document.getElementById("game")
const marcador = document.getElementById("total")
const ctx = canvas.getContext("2d")
// console.log("test")
const game = new Game(ctx)

const btn = document.getElementById("start-btn")
btn.onclick = () => {
  const welcome = document.getElementById("welcome")
  welcome.remove()
  canvas.style.display = 'block'
  start()
}

function start(){
  game.start()
  canvas.style.display = 'block'
}
function gameover(){
  // const go = document.getElementById('gameover')
  // go.remove();
  // start();
  window.location.reload();
}