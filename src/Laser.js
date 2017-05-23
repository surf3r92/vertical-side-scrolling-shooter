Game.Laser = (function() {
    var that = {},
        laser_1,
        laser_2,
        lasers_1,
        lasers_2,
        laserTime_1 = 0,
        laserTime_2 = 0,

    fireLaser = function(player, playerNum) {
        if (this.game.time.now > laserTime_1 && playerNum == 1)
        {
            laser_1 = lasers_1.getFirstExists(false);
            if (laser_1)
            {
                laser_1.reset(player.x, player.y + 8);
                laser_1.body.velocity.y = -400;
                laserTime_1 = this.game.time.now + 200;
            }
        }

        if (this.game.time.now > laserTime_2 && playerNum == 2)
        {
            laser_2 = lasers_2.getFirstExists(false);
            if (laser_2)
            {
                laser_2.reset(player.x, player.y + 8);
                laser_2.body.velocity.y = -400;
                laserTime_2 = this.game.time.now + 200;
            }
        }
    },

    getLaser_1Group = function() {
        return lasers_1;
    },

    getLaser_2Group = function() {
        return lasers_2;
    },

    initLaser = function(game, players) {
        this.game = game;

        lasers_1 = game.add.group();
        lasers_1.enableBody = true;
        lasers_1.physicsBodyType = Phaser.Physics.ARCADE;
        lasers_1.createMultiple(30, 'laser');
        lasers_1.setAll('anchor.x', 0.5);
        lasers_1.setAll('anchor.y', 1);
        lasers_1.setAll('outOfBoundsKill', true);
        lasers_1.setAll('checkWorldBounds', true);

        lasers_2 = game.add.group();
        lasers_2.enableBody = true;
        lasers_2.physicsBodyType = Phaser.Physics.ARCADE;
        lasers_2.createMultiple(30, 'laser_2');
        lasers_2.setAll('anchor.x', 0.5);
        lasers_2.setAll('anchor.y', 1);
        lasers_2.setAll('outOfBoundsKill', true);
        lasers_2.setAll('checkWorldBounds', true);
    };


    that.getLaser_1Group = getLaser_1Group;
    that.getLaser_2Group = getLaser_2Group;
    that.fireLaser = fireLaser;
    that.initLaser = initLaser;
    return that;
})();
