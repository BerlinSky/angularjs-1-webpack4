import 'angular/angular.js';
import uiRouter from 'angular-ui-router';

const ngModule = angular.module('app', [uiRouter]);

ngModule.config(function config($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      // url: '/home',
      template: require('./home/home.html'),
      // controller: 'MainCtrl as home'
    });
});

ngModule.controller('MainCtrl', function ($scope) {
  $scope.siteName = 'New Home';
});

console.log(ngModule);

require('./directives').default(ngModule);
