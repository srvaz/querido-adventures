import Square from '@/objects/square';

export default class Game extends Phaser.Scene {
  /**
   *  A sample Game scene, displaying the Phaser logo.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Game'});
  }

  /**
   *  Called when a scene is initialized. Method responsible for setting up
   *  the game objects of the scene.
   *
   *  @protected
   *  @param {object} data Initialization parameters.
   */
  create(/* data */) {
    //  TODO: Replace this content with really cool game code here :)
    this.cursors = this.input.keyboard.createCursorKeys();
    this.logo = this.add.existing(new Square(this));
    this.speed = 1;
  }

  /**
   *  Called when a scene is updated. Updates to game logic, physics and game
   *  objects are handled here.
   *
   *  @protected
   *  @param {number} t Current internal clock time.
   *  @param {number} dt Time elapsed since last update.
   */
  update() {
    if (this.cursors.left.isDown) {
      this.logo.setX(this.logo.x - this.speed);
    }

    if (this.cursors.right.isDown) {
      this.logo.setX(this.logo.x + this.speed);
    }

    if (this.cursors.up.isDown) {
      this.logo.setY(this.logo.y - this.speed);
    }

    if (this.cursors.down.isDown) {
      this.logo.setY(this.logo.y + this.speed);
    }

  }
}
