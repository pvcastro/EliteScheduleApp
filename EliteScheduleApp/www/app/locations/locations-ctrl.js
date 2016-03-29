define(['app', 'services/eliteApi'], function(app) {

	'use strict';
	
	app.controller('locationsCtrl', ['eliteApi', locationsCtrl]);
	
	function locationsCtrl(eliteApi) {	
		var vm = this;
		
		eliteApi.getLeagueData().then(function(data){
			vm.locations = data.locations;
		});		
	};
	
});