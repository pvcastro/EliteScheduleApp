define(['app', 'services/eliteApi'], function(app) {

	'use strict';
	
	app.controller('leaguesCtrl', ['$state', 'eliteApi', leaguesCtrl]);
	
	function leaguesCtrl($state, eliteApi) {	
		var vm = this;
		
		eliteApi.getLeagues().then(function(data){
			vm.leagues = data;	
		});				
		
		vm.selectLeague = function(leagueId) {			
			eliteApi.setLeagueId(leagueId);
			$state.go('app.teams');
		}
	};
	
});