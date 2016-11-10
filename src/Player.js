Game.Player = (function () {
    var that = {};

    initPlayer = function(game) {
        var player = game.add.sprite(300, 300, 'player');
        player.anchor.x = 0.5;
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1);

        return player;
    },

    updatePlayer = function(game) {
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
    };



    that.initPlayer = initPlayer;
    return that;
})();