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

        player = game.add.sprite(300, 300, 'player');
        player.anchor.x = 0.5;

        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1);
        cursors = game.input.keyboard.createCursorKeys();

    },

    update = function() {
        meteorites.y += 1;
        if (cursors.left.isDown)
        {
            if (player.x > 0)
            player.x -= 8;
        }
        else if (cursors.right.isDown)
        {
            player.x += 8;
        }

        if (cursors.up.isDown)
        {
            player.y -= 8;
        }
        else if (cursors.down.isDown)
        {
            player.y += 8;
        }
    },


    init = function() {
        game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

    };

    that.init = init;

    return that;
})();


