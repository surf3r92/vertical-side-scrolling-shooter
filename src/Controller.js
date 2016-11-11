Game.Controller = (function () {
    var that = {},
        game,
        player_1,
        player_2,
        lasers_1,
        lasers_2,
        enemies_1,
        explosions_1,
        aliens,


    preload = function() {
        game.load.image('player_1', 'assets/ship_1.png');
        game.load.image('player_2', 'assets/ship_2.png');
        game.load.image('starfield', 'assets/starfield.png');
        game.load.image('laser', 'assets/laser.png');
        game.load.image('laser_2', 'assets/laser_2.png');
        game.load.spritesheet('invader', 'assets/invader32x32x4.png', 32, 32);
        game.load.image('enemy_1', 'assets/enemy_1a.png');
        game.load.spritesheet('explosion_1', 'assets/explosion_1.png', 128, 128);
    },

    create = function() {
        var players = 2;
        Game.Environment.initEnvironment(game);
        Game.Player.initPlayer(game, players);
        Game.Laser.initLaser(game, players);
        Game.Enemies.initEnemies(game);
        Game.Explosions.initExplosions(game);
        _getGlobalGroups();
    },


    _getGlobalGroups = function() {
        explosions_1 = Game.Explosions.getExplosionGroup_1();
        aliens = Game.Enemies.getAliensGroup();
        enemies_1 = Game.Enemies.getEnemies_1Group();
        lasers_1 = Game.Laser.getLaser_1Group();
        lasers_2 = Game.Laser.getLaser_2Group();
    },

    update = function() {
        Game.Environment.updateEnvironment();
        Game.Player.updatePlayer();
        game.physics.arcade.overlap(lasers_1, aliens,
            collisionHandler, null, this);
        game.physics.arcade.overlap(lasers_1, enemies_1,
            collisionHandler, null, this);
        game.physics.arcade.overlap(lasers_2, aliens,
            collisionHandler, null, this);
        game.physics.arcade.overlap(lasers_2, enemies_1,
            collisionHandler, null, this);
        Game.Enemies.updateEnemies();
    },

    collisionHandler = function(laser, enemy) {
        laser.kill();
        enemy.kill();

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


