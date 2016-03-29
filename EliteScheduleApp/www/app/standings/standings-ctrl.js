define(['app', 'services/eliteApi'], function(app) {

	'use strict';
	
	app.controller('standingsCtrl', ['eliteApi',standingsCtrl]);
	
	function standingsCtrl(eliteApi) {	
		var vm = this;		
		
		eliteApi.getLeagueData().then(function(data){
			vm.standings = data.standings;
		});
	};
	
});