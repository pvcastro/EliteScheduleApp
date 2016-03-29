define(['app', 'services/eliteApi'], function(app) {

	'use strict';
	
	app.controller('myTeamsCtrl', ['$state', 'myTeamsService', 'eliteApi', myTeamsCtrl]);
	
	function myTeamsCtrl($state, myTeamsService, eliteApi) {	
		var vm = this;	
		
		console.log('Loading myTeams...');
		vm.myTeams = myTeamsService.getFollowedTeams();		
		
		vm.goToTeam = function(team) {
			eliteApi.setLeagueId(team.leagueId);
			$state.go('app.team-detail', { id : team.id });			
		};
	};
	
});