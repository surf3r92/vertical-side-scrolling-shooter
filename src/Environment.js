Game.Environment = (function() {
    var that = {},
        starfield,


    setBackground = function() {
        starfield = this.game.add.tileSprite(0, 0, 800, 600, 'starfield');
        return starfield;
    },

    updateEnvironment = function(cursors) {
        starfield.tilePosition.y += 3;
    },

    initEnvironment = function(game) {
        this.game = game;
        game.physics.startSystem(Phaser.Physics.Arcade)
        game.world.setBounds(0, 0, 800, -1000*20);
    };


    that.updateEnvironment = updateEnvironment;
    that.setBackground = setBackground;
    that.initEnvironment = initEnvironment;
    return that;
})();
