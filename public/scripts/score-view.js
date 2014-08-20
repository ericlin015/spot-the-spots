(function() {

    var ScoreView = function() {
        this.loadScore();
        this.self = this;
    };

    ScoreView.prototype.loadScore = function() {
        return new Promise(function(resolve, reject) {
            $.get('/getScore', function(data) {
                self.scores = data.scoreBoard.sort(function(a, b) {
                    return b.score - a.score;
                });
                resolve(1);
            });
        });
    };

    ScoreView.prototype.render = function() {
        var p = this.loadScore();
        var scoreEl = $('#scores');
        scoreEl.html('');
        p.then(function() {
            self.scores.forEach(function(s) {
                scoreEl.append('<li>' + s.name + '<span class="pull-right">' + s.score + '</span></li>');
            })
        });
    };

    window.ScoreView = ScoreView;

})();