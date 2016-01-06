var app = angular.module('nbaRoutes');
// the resolved data from the router needs to be injected into the controller
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {

	$scope.teamData = teamData;
	$scope.newGame = false;

	$scope.toggleNewGameForm = function() {
		$scope.showNewGameForm = !$scope.showNewGameForm;
	}

	if($stateParams.team === 'utahjazz') {
		$scope.homeTeam = 'Utah Jazz';
		$scope.logoPath = '/images/jazz-logo.png';
	} else if ($stateParams.team === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.logoPath = '/images/lakers-logo.png';	
	} else if ($stateParams.team === 'miamiheat') {
		$scope.homeTeam = 'Miami Heat';
		$scope.logoPath = '/images/heat-logo.png';	
	} 

	$scope.submitGame = function(newGame) {
		$scope.homeTeamHolder = $scope.homeTeam.split(' ').join('').toLowerCase();
		newGame.homeTeam = $scope.homeTeamHolder;
		teamService.addNewGame(newGame).then(function() {
			teamService.getTeamData(newGame.homeTeam).then(function(data) {
				$scope.teamData = data;
				$scope.newGame = {};
				$scope.showNewGameForm = false;
			});
		});
	}

});
