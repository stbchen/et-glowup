let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 420,
    scene: [Load, Menu, Play, End],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
}

let game = new Phaser.Game(config);
let bg, bg_map;
let obstaclesGroup, holesGroup;
let piece1, piece2, piece3, piecesGroup;
let maxEnergy, energy, piecesNum;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyRIGHT, keyLEFT, keySPACE, keyUP, keyDOWN;