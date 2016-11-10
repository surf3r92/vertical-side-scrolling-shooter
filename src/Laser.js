Game.Laser = (function() {
    var that = {},
        laser,

    initLaser = function(game) {
        this.game = game;
        laser = game.add.group();
        laser.enableBody = true;
        laser.physicsBodyType = Phaser.Physics.ARCADE;
        laser.createMultiple(30, 'laser');
        laser.setAll('anchor.x', 0.5);
        laser.setAll('anchor.y', 1);
        laser.setAll('outOfBoundsKill', true);
        laser.setAll('checkWorldBounds', true);

    };

    that.initLaser = initLaser;
    return that;
})();
