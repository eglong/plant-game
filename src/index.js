import Phaser from 'phaser'
import TitleScene from './scenes/TitleScene'
import LevelScene from './scenes/LevelScene'
import FertScene from './scenes/FertilizerScene'

const config = {
    type: Phaser.AUTO,
    width: 623,
    height: 648,
    scene: [TitleScene, LevelScene, FertScene],
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
};

// Start the game with Phaser
const game = new Phaser.Game(config);