'use strict';
//our registrationModule module has dependency of ngRoute.
//That's why we inject ngRoute module in myApp.registrationModule module
var registrationModule=angular.module('myApp.registration',['ngRoute']);

//For route configuration we need $routeProvider service in our controller
//$routeProvider is in ngRoute module which we alreday injected
//so we just inject the service in config

registrationModule.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/registration',{
		templateUrl:'registration/registration.html',
		controller:'registrationCtrl'
	});
}]);

registrationModule.controller('registrationCtrl', [function(){
	
}]);