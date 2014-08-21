(function() {

    var GameView = function() {
        this.gameStarted = false;
    };

    GameView.prototype.render = function() {
        var gameContainer = $('#game');
        var randomNum = Math.floor(Math.random() * 121);

        gameContainer.html('');

        var square = '<div class="block"></div>';
        for (var i = 0; i < 121; i++) {
            if (i === randomNum) {
                gameContainer.append('<div class="block" style="opacity: 0.95"></div>');
            } else {
                gameContainer.append(square);
            }
        }
    };

    window.GameView = GameView;

})();