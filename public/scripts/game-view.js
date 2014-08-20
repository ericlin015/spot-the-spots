(function() {

    var GameView = function() {
        this.gameStarted = false;
    };

    GameView.prototype.render = function() {
        var gameContainer = $('#game');
        var randomNum = Math.floor(Math.random() * 122);

        gameContainer.html('');


        for (var i = 0; i < 121; i++) {
            gameContainer
        }
    };

    window.GameView = GameView;

})();