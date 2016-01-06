var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

	this.addNewGame = function(newGame) {

		var url = 'https://api.parse.com/1/classes/' + newGame.homeTeam;
		if (parseInt(newGame.homeTeamScore) > parseInt(newGame.opponentScore)) {
			newGame.won = true;
		} else {
			newGame.won = false;
		}
		return $http.post(url, newGame);
	}

	this.getTeamData = function(team) {

		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team + '?order=-createdAt';
		$http.get(url).then(function(data) {
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {

				if (results[i].won === true) {
					wins++;
				} else if (results[i].won === false) {
					losses++;
				}
			}
			results.wins = wins;
			results.losses = losses;
			deferred.resolve(results);
		})
		return deferred.promise;
	}

});