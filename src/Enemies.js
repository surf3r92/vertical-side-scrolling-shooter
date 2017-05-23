Game.Enemies = (function() {
    var that = {},
        enemies_1,
        enemyRespawnTime = 0,
        enemyBullets,
        player_1,
        player_2,


        _initEnemies1Bullets = function(game) {
            enemyBullets = game.add.group();
            enemyBullets.enableBody = true;
            enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
            enemyBullets.createMultiple(30, 'enemy1_bullet');
            enemyBullets.setAll('anchor.x', 0.5);
            enemyBullets.setAll('anchor.y', 1);
            enemyBullets.setAll('outOfBoundsKill', true);
            enemyBullets.setAll('checkWorldBounds', true);
        },

        _enemy1Fires = function(game) {
            var enemyBullet = enemyBullets.getFirstExists(false);
            var livingEnemies = [];
            livingEnemies.length = 0;

            enemies_1.forEachAlive(function(enemy){
                livingEnemies.push(enemy);
            });

            if (enemyBullet && livingEnemies.length > 0)
            {
                var random = game.rnd.integerInRange(0,livingEnemies.length-1);
                var shooter = livingEnemies[random];
                enemyBullet.reset(shooter.body.x, shooter.body.y);
                var random = game.rnd.integerInRange(0,1);
                var target;
                if (random == 1) {
                    target = player_1;
                } else {
                    target = player_2;
                }
                game.physics.arcade.moveToObject(enemyBullet, target, 120);
            }
        },

        getEnemies_1Group = function() {
            return enemies_1;
        },

        _respawnEnemies_1 = function(game) {
            if (game.time.now / 1000 - enemyRespawnTime / 1000 > 1) {
                var x = Math.floor((Math.random() * 790) + 10);
                var enemy_1 = enemies_1.create(x, -50, 'enemy_1');
                enemy_1.lives = 2;
                enemy_1.anchor.setTo(0.6, 0.6);
                enemy_1.animations.add('fly', [0, 1, 2, 3], 20, true);
                enemy_1.play('fly');
                enemyRespawnTime = game.time.now;
            }
        },

        updateEnemies = function() {
            _respawnEnemies_1(this.game);
            _updatePosEnemies_1();
            _enemy1Fires(this.game);

        },

        _updatePosEnemies_1 = function() {
            enemies_1.forEachAlive(function(child){
                child.y += 1;
            });
        },

        initEnemies = function(game) {
            this.game = game;
            enemies_1 = game.add.group();
            enemies_1.enableBody = true;
            enemies_1.physicsBodyType = Phaser.Physics.ARCADE;

            player_1 = Game.Player.getPlayer1();
            player_2 = Game.Player.getPlayer2();
            _initEnemies1Bullets(this.game);
        };


    that.updateEnemies = updateEnemies;
    that.getEnemies_1Group = getEnemies_1Group;
    that.initEnemies = initEnemies;
    return that;
})();