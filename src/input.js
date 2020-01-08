import Game from "/src/game.js";

export default class InputHandler {
    constructor (Paddle, Game) {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37:
                    Paddle.moveLeft();
                    break;

                case 39:
                    Paddle.moveRight();
                    break;

                case 27:
                    Game.togglePause();
                    break;

                case 32:
                    Game.start();
                    break;
            }
        });
        document.addEventListener('keyup', (e) => {
            switch (e.keyCode) {
                case 37:
                    if (Paddle.speed < 0) Paddle.stop();
                    break;
                case 39:
                    if (Paddle.speed > 0) Paddle.stop();
                    break;
            }
        });
    }
}