define(['app',
  'game/game-ctrl',
  'home/leagues-ctrl',
  'home/my-teams-ctrl',
  'locations/location-map-ctrl',
  'locations/locations-ctrl',
  'rules/rules-ctrl',
  'standings/standings-ctrl',
  'teams/team-detail-ctrl',
  'teams/teams-ctrl'
], function(app) {
  'use strict';
  // definition of routes
  app.config(['$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider

        .state('home', {
          abstract: true,
          url: '/home',
          templateUrl: 'app/home/home.html'
        })
        .state('home.leagues', {
          url: '/leagues',
          views: {
            'tab-leagues': {
              templateUrl: 'app/home/leagues.html'
            }
          }
        })
        .state('home.myteams', {
          url: '/myteams',
          cache: false,
          views: {
            'tab-myteams': {
              templateUrl: 'app/home/myteams.html'
            }
          }
        })

      .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'app/layout/menu-layout.html'
        })
        .state('app.teams', {
          url: '/teams',
          views: {
            'mainContent': {
              templateUrl: 'app/teams/teams.html'
            }
          }
        })
        .state('app.team-detail', {
          url: '/teams/:id',
          views: {
            'mainContent': {
              templateUrl: 'app/teams/team-detail.html'
            }
          }
        })
        .state('app.game', {
          url: '/game/:id',
          views: {
            'mainContent': {
              templateUrl: 'app/game/game.html'
            }
          }
        })
        .state('app.standings', {
          url: '/standings',
          views: {
            'mainContent': {
              templateUrl: 'app/standings/standings.html'
            }
          }
        })
        .state('app.locations', {
          url: '/locations',
          views: {
            'mainContent': {
              templateUrl: 'app/locations/locations.html'
            }
          }
        })
        .state('app.location-map', {
          url: '/location-map/:id',
          views: {
            'mainContent': {
              templateUrl: 'app/locations/location-map.html'
            }
          }
        })
        .state('app.rules', {
          url: '/rules',
          views: {
            'mainContent': {
              templateUrl: 'app/rules/rules.html'
            }
          }
        });

      // if none above states are matched, use this as fallback
      $urlRouterProvider.otherwise('/home/leagues');
    }
  ]);
});
