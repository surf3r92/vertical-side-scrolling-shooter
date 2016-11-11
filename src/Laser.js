Game.Laser = (function() {
    var that = {},
        laser,
        lasers,
        laserTime = 0,

    fireLaser = function(player) {
        if (this.game.time.now > laserTime)
        {
            laser = lasers.getFirstExists(false);
            if (laser)
            {
                laser.reset(player.x, player.y + 8);
                laser.body.velocity.y = -400;
                laserTime = this.game.time.now + 200;
            }
        }
    },

    initLaser = function(game) {
        this.game = game;
        lasers = game.add.group();
        lasers.enableBody = true;
        lasers.physicsBodyType = Phaser.Physics.ARCADE;
        lasers.createMultiple(30, 'laser');
        lasers.setAll('anchor.x', 0.5);
        lasers.setAll('anchor.y', 1);
        lasers.setAll('outOfBoundsKill', true);
        lasers.setAll('checkWorldBounds', true);
        return lasers;
    };

    that.fireLaser = fireLaser;
    that.initLaser = initLaser;
    return that;
})();
