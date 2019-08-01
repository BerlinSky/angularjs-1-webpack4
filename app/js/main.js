/* eslint-disable global-require */
// eslint-disable-next-line import/extensions
import 'angular/angular.js';
import uiRouter from 'angular-ui-router';

// eslint-disable-next-line no-undef
const ngModule = angular.module('app', [uiRouter]);

// eslint-disable-next-line func-names
ngModule.config(function($urlRouterProvider, $stateProvider) {
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
      // eslint-disable-next-line import/no-unresolved
      template: require('./noAccess/NoAccess.html')
      // controller: 'MainCtrl as home'
    });
});

require('./services/UserProfile').default(ngModule);

// eslint-disable-next-line func-names
ngModule.run(function($location, userProfile) {
  const profile = userProfile;
  // eslint-disable-next-line no-unused-expressions
  profile.access ? $location.path('/home') : $location.path('/noAccess');
});

require('./home').default(ngModule);

require('./directives').default(ngModule);
