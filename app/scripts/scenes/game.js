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
    this.square = new Square(this);
    this.speed = 1;

    this.matter.world.setBounds(0, 0, this.sys.game.config.width,this.sys.game.config.height);

    this.player = this.matter.add.sprite(this.sys.game.config.width/2,0,'square');
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
    if (this.cursors.up.isDown) {
      //this.physics.accelerateTo(this.player, this.player.x, -400, 400);
      this.player.applyForce(new Phaser.Math.Vector2(0,-0.5));
    }
  }
}
