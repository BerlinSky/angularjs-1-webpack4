import 'angular/angular.js';
import uiRouter from 'angular-ui-router';
// import userProfileService from './services/UserProfile';

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

ngModule.service('userProfile', function () {
  const model = this,
    userProfile = {
      "access": true,
      "components": ["1000", "2000"]
      // "components": ["1000"]
    };

  model.getUserProfile = function () {
    return userProfile;
  }
})

ngModule.run(function ($location, userProfile) {
  const profile = userProfile.getUserProfile();
  profile.access ? $location.path('/home') : $location.path('/noAccess');
});

ngModule.controller('MainCtrl', function ($scope) {
  $scope.siteName = 'New Home';
});

console.log(ngModule);

require('./directives').default(ngModule);
