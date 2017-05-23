Game.EnemyTypeOne = (function() {
    var that = {};


    initEnemies = function(game) {
        this.game = game;

        enemies_1 = game.add.group();
        enemies_1.enableBody = true;
        enemies_1.physicsBodyType = Phaser.Physics.ARCADE;
        _createEnemies_1(game);
    };
    return that;
})();