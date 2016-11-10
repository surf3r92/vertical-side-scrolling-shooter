Game.Player = (function () {
    var that = {},
        player,


    updatePlayer = function(cursors) {
        if (cursors.left.isDown)
        {
            if (player.x > player.width - 5)
                player.x -= 6;
        }
        else if (cursors.right.isDown)
        {
            if (player.x < this.game._width - player.width + 5)
                player.x += 6;
        }

        if (cursors.up.isDown)
        {
            if (player.y > player.height)
                player.y -= 6;
        }
        else if (cursors.down.isDown)
        {
            if (player.y < this.game._height - player.height - 5)
                player.y += 6;
        }
    },

    initPlayer = function(game) {
        this.game = game;
        player = game.add.sprite(300, 300, 'player');
        player.anchor.setTo(0.5, 0.5);
        game.physics.enable(player, Phaser.Physics.ARCADE);
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1);

        return player;
    };


    that.updatePlayer = updatePlayer;
    that.initPlayer = initPlayer;
    return that;
})();