Game.Controller = (function () {
    var that = {},
        game,
        player_1,
        player_2,
        lasers_1,
        lasers_2,
        enemies_1,
        explosions_1,
        players = 2,


    preload = function() {
        game.load.image('player_1', 'assets/ship_1.png');
        game.load.image('player_2', 'assets/ship_2.png');
        game.load.image('starfield', 'assets/starfield.png');
        game.load.image('laser', 'assets/laser.png');
        game.load.image('laser_2', 'assets/laser_2.png');
        game.load.image('enemy_1', 'assets/enemy_1a.png');
        game.load.spritesheet('explosion_1', 'assets/explosion_1.png', 128, 128);
        game.load.image('enemy1_bullet', 'assets/enemy1_bullet.png');
    },

    create = function() {
        Game.Environment.initEnvironment(game);
        Game.Player.initPlayer(game, players);
        Game.Laser.initLaser(game, players);
        Game.Enemies.initEnemies(game);
        Game.Explosions.initExplosions(game);
        _getGlobalGroups();
    },


    _getGlobalGroups = function() {
        explosions_1 = Game.Explosions.getExplosionGroup_1();
        enemies_1 = Game.Enemies.getEnemies_1Group();
        lasers_1 = Game.Laser.getLaser_1Group();
        lasers_2 = Game.Laser.getLaser_2Group();
        player_1 = Game.Player.getPlayer1();
        player_2 = Game.Player.getPlayer2();
    },

    update = function() {
        Game.Environment.updateEnvironment();
        Game.Player.updatePlayer();
        game.physics.arcade.overlap(lasers_1, enemies_1,
            _collisionHandler, null, this);
        game.physics.arcade.overlap(lasers_2, enemies_1,
            _collisionHandler, null, this);
        game.physics.arcade.overlap(player_1, enemies_1,
            _collisionHandlerPlayerEnemy, null, this);
        game.physics.arcade.overlap(player_2, enemies_1,
            _collisionHandlerPlayerEnemy, null, this);
        Game.Enemies.updateEnemies();
    },

    _collisionHandler = function(laser, enemy) {
        if (enemy.lives > 1) {
            enemy.lives -= 1;
        } else {
            enemy.kill();
        }
        laser.kill();

        var explosion = explosions_1.getFirstExists(false);
        explosion.reset(enemy.body.x, enemy.body.y);
        explosion.play('explosion_1', 30, false, true);
    },

    _collisionHandlerPlayerEnemy = function(player, enemy) {
        if (enemy.lives > 1) {
            enemy.lives -= 1;
        } else {
            enemy.kill();
        }
        player.kill();
        var explosion = explosions_1.getFirstExists(false);
        explosion.reset(enemy.body.x, enemy.body.y);
        explosion.play('explosion_1', 30, false, true);
    },

    init = function() {
        game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    };

    that.init = init;
    return that;
})();


