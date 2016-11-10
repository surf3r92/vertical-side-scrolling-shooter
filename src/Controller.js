Game.Controller = (function () {
    var that = {},
        game,
        player,
        cursors,
        starfield,


    preload = function() {
        game.load.image('player', 'assets/ship.png');
        game.load.image('laser', 'assets/laser.png');
        game.load.image('starfield', 'assets/starfield.png');
    },

    create = function() {
        Game.Environment.initEnvironment(game);
        starfield = Game.Environment.setBackground();
        player = Game.Player.initPlayer(game);
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


