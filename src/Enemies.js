Game.Enemies = (function() {
    var that = {},
        aliens_1,
        enemies_1,
        enemyRespawnTime = 0,

    _descend = function() {

        aliens_1.y += 10;

    },

    getAliensGroup = function() {
        return aliens_1;
    },

    _createAliens = function(game) {

        for (var y = 0; y < 4; y++)
        {
            for (var x = 0; x < 10; x++)
            {
                var alien = aliens_1.create(x * 48, y * 50, 'invader');
                alien.anchor.setTo(0.5, 0.5);
                alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
                alien.play('fly');
                alien.body.moves = false;
            }
        }

        aliens_1.x = 100;
        aliens_1.y = 50;

        //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
        var tween = game.add.tween(aliens_1).to( { x: 200 }, 2000,
            Phaser.Easing.Linear.None, true, 0, 1000, true);

        //  When the tween loops it calls descend
        tween.onLoop.add(_descend, this);
    },

    getEnemies_1Group = function() {
        return enemies_1;
    },

    _createEnemies_1 = function(game) {
        for (var x = 0; x < 10; x++) {
            var enemy_1 = enemies_1.create(x * 55, 1 * 50, 'enemy_1');
            enemy_1.anchor.setTo(0.5, 0.5);
            enemy_1.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            enemy_1.play('fly');
        }


        var tween = game.add.tween(enemies_1).to( { x: 200, y: 120 }, 1300,
            Phaser.Easing.Linear.None, true, 0, 1000, true);

        tween.onLoop.add(_descend, this);
        enemyRespawnTime = game.time.now;
    },

    updateEnemies = function() {
        /*if (this.game.time.now - enemyRespawnTime > 5) {
            _createEnemies_1(this.game);
        }*/

    },

    initEnemies = function(game) {
        this.game = game;
        aliens_1 = game.add.group();
        aliens_1.enableBody = true;
        aliens_1.physicsBodyType = Phaser.Physics.ARCADE;
        _createAliens(game);

        enemies_1 = game.add.group();
        enemies_1.enableBody = true;
        enemies_1.physicsBodyType = Phaser.Physics.ARCADE;
        _createEnemies_1(game);
    };


    that.updateEnemies = updateEnemies;
    that.getEnemies_1Group = getEnemies_1Group;
    that.getAliensGroup = getAliensGroup;
    that.initEnemies = initEnemies;
    return that;
})();