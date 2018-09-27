angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page1',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('henry', {
    url: '/page2',
    templateUrl: 'templates/henry.html',
    controller: 'henryCtrl'
  })

  .state('harvey', {
    url: '/page3',
    templateUrl: 'templates/harvey.html',
    controller: 'harveyCtrl'
  })

  .state('rocco', {
    url: '/page4',
    templateUrl: 'templates/rocco.html',
    controller: 'roccoCtrl'
  })

  .state('pig', {
    url: '/page5',
    templateUrl: 'templates/pig.html',
    controller: 'pigCtrl'
  })

  .state('eugene', {
    url: '/page6',
    templateUrl: 'templates/eugene.html',
    controller: 'eugeneCtrl'
  })

  .state('miguel', {
    url: '/page7',
    templateUrl: 'templates/miguel.html',
    controller: 'miguelCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});