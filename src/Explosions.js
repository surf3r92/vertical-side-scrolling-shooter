Game.Explosions = (function() {
    var that = {},
        explosions_1,


    _setupInvader = function(invader) {
        invader.anchor.x = 0.5;
        invader.anchor.y = 0.5;
        invader.animations.add('explosion_1');
    },

    getExplosionGroup_1 = function() {
        return explosions_1;
    },

    initExplosions = function(game) {
        explosions_1 = game.add.group();
        explosions_1.createMultiple(30, 'explosion_1');
        explosions_1.forEach(_setupInvader, this);
    };

    that.getExplosionGroup_1 = getExplosionGroup_1;

    that.initExplosions = initExplosions;
    return that;
})();
