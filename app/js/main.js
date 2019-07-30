const angular = require('angular');
const ngModule = angular.module('app', []);

console.log(ngModule);

require('./directives').default(ngModule);
