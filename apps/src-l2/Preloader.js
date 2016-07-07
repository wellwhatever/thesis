Candy.Preloader = function(game){
	// define width and height of the game
	Candy.GAME_WIDTH = 640;
	Candy.GAME_HEIGHT = 960;
};
Candy.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((Candy.GAME_WIDTH-311)/2, (Candy.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// load images
		this.load.image('background', 'img/background1.png');
		this.load.image('floor', 'img/floor.png');
		this.load.image('monster-cover', 'img/monster-cover.png');
		this.load.image('title', 'img/title.png');
		this.load.image('game-over', 'img/gameover-bg.png');
		this.load.image('score-bg', 'img/score-bg1.png');
		this.load.image('button-pause', 'img/button-pausex.png');
		this.load.image('pause-screen','img/pause-screen.png');
		// load spritesheets
		this.load.spritesheet('candy', 'img/candyx.png', 82, 98);
		this.load.spritesheet('monster-idle', 'img/monster-idle.png', 103, 131);
		this.load.spritesheet('button-start', 'img/button-start.png', 401, 143);
		this.load.spritesheet('button-continue', 'img/cont-button.png', 385, 107);
		this.load.spritesheet('button-survey', 'img/survey-button.png', 385, 107);

	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
