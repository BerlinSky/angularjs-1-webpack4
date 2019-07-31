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
      controller: 'HomeController as vm'
    })
    .state('noAccess', {
      url: '/noAccess',
      template: require('./noAccess/NoAccess.html'),
      // controller: 'MainCtrl as home'
    });
});

require('./services/UserProfile').default(ngModule);

ngModule.run(function ($location, userProfile) {
  const profile = userProfile;
  profile.access ? $location.path('/home') : $location.path('/noAccess');
});

// ngModule.controller('MainCtrl', function ($scope) {
//   $scope.siteName = 'New Home';
// });
require('./home').default(ngModule);

require('./directives').default(ngModule);
