Game.Controller = (function () {
    var that = {},
        game,
        player,
        cursors,
        starfield,
        laser,
        fireButton,


    preload = function() {
        game.load.image('player', 'assets/ship.png');
        game.load.image('starfield', 'assets/starfield.png');
        game.load.image('laser', 'assets/laser.png');
    },

    create = function() {
        starfield = Game.Environment.initEnvironment(game);
        player = Game.Player.initPlayer(game);
        laser = Game.Laser.initLaser(game);
        cursors = game.input.keyboard.createCursorKeys();


    },

    update = function() {
        Game.Environment.updateEnvironment(cursors);
        Game.Player.updatePlayer(cursors);
    },


    init = function() {
        game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    };

    that.init = init;
    return that;
})();


