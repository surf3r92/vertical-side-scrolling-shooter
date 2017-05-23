Game.Environment = (function() {
    var that = {},
        starfield,


    updateEnvironment = function() {
        starfield.tilePosition.y += 3;
    },

    initEnvironment = function(game) {
        this.game = game;
        game.physics.startSystem(Phaser.Physics.Arcade)
        starfield = this.game.add.tileSprite(0, 0, 800, 600, 'starfield');
        return starfield;
    };

    that.updateEnvironment = updateEnvironment;
    that.initEnvironment = initEnvironment;
    return that;
})();
