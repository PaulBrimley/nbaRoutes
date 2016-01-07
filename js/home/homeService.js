var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

	

	this.getAllTeamData = function() {
		var counter = 0;
		var deferred = $q.defer();
		var teamDataArray = [];

		$http.get('https://api.parse.com/1/classes/utahjazz?order=-createdAt').then(function(data) {
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				results[i].homeTeam = 'Utah Jazz';
				if (results[i].won === true) {
					wins++;
				} else if (results[i].won === false) {
					losses++;
				}
			}

			results.wins = wins;
			results.losses = losses;
			results.logoPath = '/images/jazz-logo.png';
			teamDataArray[0] = results;
			counter++;
			if (counter === 3) {
				deferred.resolve(teamDataArray);
			}
		})
		$http.get('https://api.parse.com/1/classes/losangeleslakers?order=-createdAt').then(function(data) {
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				results[i].homeTeam = 'Los Angeles Lakers';
				if (results[i].won === true) {
					wins++;
				} else if (results[i].won === false) {
					losses++;
				}
			}
			results.wins = wins;
			results.losses = losses;
			results.logoPath = '/images/lakers-logo.png';
			teamDataArray[1] = results;
			counter++;
			if (counter === 3) {
				deferred.resolve(teamDataArray);
			}
		})

		$http.get('https://api.parse.com/1/classes/miamiheat?order=-createdAt').then(function(data) {
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				results[i].homeTeam = 'Miami Heat';
				if (results[i].won === true) {
					wins++;
				} else if (results[i].won === false) {
					losses++;
				}
			}
			results.wins = wins;
			results.losses = losses;
			results.logoPath = '/images/heat-logo.png';
			teamDataArray[2] = results;
			counter++;
			if (counter === 3) {
				deferred.resolve(teamDataArray);
			}
		})

		return deferred.promise;

	}

});
