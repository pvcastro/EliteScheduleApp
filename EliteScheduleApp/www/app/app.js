// The main app definition
// --> where you should load other module depdendencies
define(['angular', 'angular-cache', 'angular-google-maps'], 
	function (angular) {
		'use strict';
		
		return angular.module('app', ['ionic','angular-cache','uiGmapgoogle-maps']);
		// 'angular', 
		// 'angular-ui-router', 
		// 'config', 
		// 'ionic-angular', 
		// ]);
	});
