'use strict';
// Declare app level module which depends on views, and components
var myApp = angular.module('appMainModule',[
	'ngRoute',
	'myApp.login',
	'myApp.registration'
	]);

myApp.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.otherwise({
		redirectTo:'/login'
	});
}]);
