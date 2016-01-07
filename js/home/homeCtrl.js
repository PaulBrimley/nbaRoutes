var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function ($scope, homeService, allTeamData) {

	
	$scope.jazzData =  allTeamData[0];
	$scope.lakersData =  allTeamData[1];
	$scope.heatData =  allTeamData[2];

});
