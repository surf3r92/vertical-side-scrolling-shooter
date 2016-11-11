var that = {},
    player_1,
    player_2,
    fireButton_p1,
    fireButton_p2,
    left_p2,
    right_p2,
    up_p2,
    down_p2,
    cursors_1,


    updatePlayer = function() {
        if (cursors_1.left.isDown)
        {
            if (player_1.x > player_1.width - 5)
                player_1.x -= 6;
        }
        else if (cursors_1.right.isDown)
        {
            if (player_1.x < this.game._width - player_1.width + 5)
                player_1.x += 6;
        }

        if (cursors_1.up.isDown)
        {
            if (player_1.y > player_1.height)
                player_1.y -= 6;
        }
        else if (cursors_1.down.isDown)
        {
            if (player_1.y < this.game._height - player_1.height - 5)
                player_1.y += 6;
        }

        if (fireButton_p1.isDown) {
            Game.Laser.fireLaser(player_1, 1);
        }

        if (left_p2.isDown) {
            if (player_2.x > player_2.width - 5)
                player_2.x -= 6;
        }
        else if (right_p2.isDown)
        {
            if (player_2.x < this.game._width - player_2.width + 5)
                player_2.x += 6;
        }
        if (up_p2.isDown)
        {
            if (player_2.y > player_2.height)
                player_2.y -= 6;
        }
        else if (down_p2.isDown)
        {
            if (player_2.y < this.game._height - player_2.height - 5)
                player_2.y += 6;
        }

        if (fireButton_p2.isDown) {
            Game.Laser.fireLaser(player_2, 2);
        }

    },

    _initKeyControls = function(game) {
        cursors_1 = game.input.keyboard.createCursorKeys();
        fireButton_p1 = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        left_p2 = game.input.keyboard.addKey(Phaser.Keyboard.A);
        right_p2 = game.input.keyboard.addKey(Phaser.Keyboard.D);
        up_p2 = game.input.keyboard.addKey(Phaser.Keyboard.W);
        down_p2 = game.input.keyboard.addKey(Phaser.Keyboard.S);
        fireButton_p2 = game.input.keyboard.addKey(Phaser.Keyboard.E);
    },

    initPlayer = function(game, players) {
        this.game = game;
        _initKeyControls(game);

        switch (players) {
            case 1:     player_1 = game.add.sprite(300, 300, 'player_1');
                player_1.anchor.setTo(0.5, 0.5);
                game.physics.enable(player_1, Phaser.Physics.ARCADE);
                game.camera.follow(player_1, Phaser.Camera.FOLLOW_LOCKON, 0.1);
                break;

            case 2:     player_1 = game.add.sprite(300, 300, 'player_1');
                player_1.anchor.setTo(0.5, 0.5);
                game.physics.enable(player_1, Phaser.Physics.ARCADE);
                game.camera.follow(player_1, Phaser.Camera.FOLLOW_LOCKON, 0.1);

                player_2 = game.add.sprite(500, 300, 'player_2');
                player_2.anchor.setTo(0.5, 0.5);
                game.physics.enable(player_2, Phaser.Physics.ARCADE);
                game.camera.follow(player_2, Phaser.Camera.FOLLOW_LOCKON, 0.1);
                break;

        }



    };
Game.Player = (function () {


    that.updatePlayer = updatePlayer;
    that.initPlayer = initPlayer;
    return that;
})();