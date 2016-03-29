require.config({
	paths: {
		'angular': '../lib/angular/angular',
		'angular-animate': '../lib/angular-animate/angular-animate.min',
		'angular-sanitize': '../lib/angular-sanitize/angular-sanitize.min',
		'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router.min',
		'angular-cache': '../lib/angular-cache/dist/angular-cache.min',
		'angular-google-maps': '../lib/angular-google-maps/dist/angular-google-maps',
		'ionic': '../lib/ionic/js/ionic.min',
		'ionic-angular': '../lib/ionic/js/ionic-angular.min',
		'lodash': '../lib/lodash/lodash.min'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-animate': {
			deps: ['angular']
		},
		'angular-sanitize': {
			deps: ['angular']
		},
		'angular-ui-router': {
			deps: ['angular']
		},
		'angular-cache': {
			deps: ['angular']
		},
		'angular-google-maps': {
			deps: ['angular']
		},
		'ionic': {
			deps: ['angular'],
			exports: 'ionic'
		},
		'ionic-angular': {
			deps: ['angular', 'ionic', 'angular-ui-router', 'angular-animate', 'angular-sanitize']
		}
	},
	priority: [
		'angular',
		'ionic'
	]
});

require(['angular', 'lodash', 'angular-cache', 'angular-google-maps', 'ionic-angular', 'ionic',
		'routes', 'config', 'run'
	],
	function(angular) {
		'use strict';
		// // Here you have to set your app name to bootstrap it manually
		// angular.bootstrap(document, ['app']);
		var $html,
			onDeviceReady = function() {
				angular.bootstrap(document, ['app']);
			};

		document.addEventListener("deviceready", onDeviceReady, false);

		if (typeof cordova === 'undefined') {
			$html = angular.element(document.getElementsByTagName('html')[0]);
			angular.element().ready(function() {
				try {
					angular.bootstrap(document, ['app']);
				} catch (e) {
					console.error(e.stack || e.message || e);
				}
			});
		}
	});