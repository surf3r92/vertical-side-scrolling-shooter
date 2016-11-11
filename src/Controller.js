Game.Controller = (function () {
    var that = {},
        game,
        player,
        cursors,
        lasers,
        enemies_1,
        explosions_1,
        aliens,


    preload = function() {
        game.load.image('player', 'assets/ship_1.png');
        game.load.image('starfield', 'assets/starfield.png');
        game.load.image('laser', 'assets/laser.png');
        game.load.spritesheet('invader', 'assets/invader32x32x4.png', 32, 32);
        game.load.image('enemy_1', 'assets/enemy_1a.png');
        game.load.spritesheet('explosion_1', 'assets/explosion_1.png', 128, 128);
    },

    create = function() {
        Game.Environment.initEnvironment(game);
        player = Game.Player.initPlayer(game);
        lasers = Game.Laser.initLaser(game);
        Game.Enemies.initEnemies(game);
        Game.Explosions.initExplosions(game);
        cursors = game.input.keyboard.createCursorKeys();
        _getGlobalGroups();
    },


    _getGlobalGroups = function() {
        explosions_1 = Game.Explosions.getExplosionGroup_1();
        aliens = Game.Enemies.getAliensGroup();
        enemies_1 = Game.Enemies.getEnemies_1Group();
    },

    update = function() {
        Game.Environment.updateEnvironment(cursors);
        Game.Player.updatePlayer(cursors);
        game.physics.arcade.overlap(lasers, aliens,
            collisionHandler, null, this);
        game.physics.arcade.overlap(lasers, enemies_1,
            collisionHandler, null, this);
    },

    collisionHandler = function(laser, alien) {
        laser.kill();
        alien.kill();

        var explosion = explosions_1.getFirstExists(false);
        explosion.reset(alien.body.x, alien.body.y);
        explosion.play('explosion_1', 30, false, true);
    },


    init = function() {
        game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    };

    that.init = init;
    return that;
})();


