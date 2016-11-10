Game.Controller = (function () {
    var that = {},
        game,
        meteorites,
        player,
        cursors,

    preload = function() {
        game.load.image('player', 'assets/ship.png');
        game.load.image('laser', 'assets/laser.png');
        game.load.image('meteorite', 'assets/meteorite.png');
    },

    create = function() {
        game.world.setBounds(0, 0, 600, -600*20);

        meteorites = game.add.group();

        for (var i = 0; i < 128; i++)
        {
            meteorites.create(game.world.randomX, game.world.randomY, 'meteorite');
        }

        player = Game.Player.initPlayer(game);

        cursors = game.input.keyboard.createCursorKeys();

    },

    update = function() {
        updatePlayer(game);
        meteorites.y += 1;
    },


    init = function() {
        game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

    };

    that.init = init;

    return that;
})();


