define(['app', 'services/eliteApi'], function(app) {

	'use strict';
	
	app.controller('gameCtrl', ['$stateParams', 'eliteApi', gameCtrl]);
	
	function gameCtrl($stateParams, eliteApi) {	
		var vm = this;
		
		var gameId = Number($stateParams.id)
		eliteApi.getLeagueData().then(function(data) {
			vm.game = _.find(data.games, {id: gameId});
			
		});		
	};
	
});