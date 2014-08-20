(function() {

    var MainView = function() {
        this.scoreView = new ScoreView();
        this.gameView = new GameView();
    };

    MainView.prototype.render = function() {
        // TODO
        this.scoreView.render();
        this.gameView.render();
    };

    window.MainView = MainView;

})();

$(document).ready(function() {
    var mainView = new MainView();
    mainView.render();
});