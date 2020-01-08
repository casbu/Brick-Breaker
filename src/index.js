import Game from "/src/game.js";

// ---------------
//   SYSTEM VARS
// ---------------
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;


// -----------
//  GAMELOOP 
// -----------

//gameLoop that runs every frame
function gameLoop(timestamp){
    //calculates how much time has passed 
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT); // clears screen

    game.update(deltaTime);
    game.draw(ctx);

    //calls the gameloop again with the next frames timestamp
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);