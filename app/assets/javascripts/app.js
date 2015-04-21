angular
  .module('app',[
    'templates',
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeCtrl',
      })
      .state('profile',{
        url: '/profile',
        templateUrl: 'profile.html',
        controller: 'profileCtrl'
      })
  }])