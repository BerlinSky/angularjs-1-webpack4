import 'angular/angular.js';
import uiRouter from 'angular-ui-router';

const ngModule = angular.module('app', [uiRouter]);

ngModule.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      // url: '/home',
      template: require('./home/home.html'),
      // controller: 'MainCtrl as home'
    })                     
    .state('noAccess', {
      url: '/noAccess', 
      template: require('./noAccess/NoAccess.html'),
      // controller: 'MainCtrl as home'
    });                
});
   
ngModule.run(function ($location) {
  console.log('inside ngModule run');
  $location.path('/noAccess');
});

ngModule.controller('MainCtrl', function ($scope) {
  $scope.siteName = 'New Home';
});

console.log(ngModule);

require('./directives').default(ngModule);
