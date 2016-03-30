define(['app', 'services/eliteApi'], function(app) {

	'use strict';
	
	app.controller('teamsCtrl', ['$scope','eliteApi', teamsCtrl]);
	
	function teamsCtrl($scope,eliteApi) {	
		var vm = this;		
		
		vm.loadList = function (forceRefresh) { 
			eliteApi.getLeagueData(forceRefresh).then(function(data) {
				vm.teams = data.teams;
			}).finally(function (){
				$scope.$broadcast('scroll.refreshComplete');
			});			
		}
		
		vm.loadList(false);		
	};
	
});