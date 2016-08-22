'use strict';
//our login module has dependency of ngRoute.
//That's why we inject ngRoute module in myApp.login module
var loginModule=angular.module('myApp.login',['ngRoute']);

//For route configuration we need $routeProvider service in our controller
//$routeProvider is in ngRoute module which we alreday injected
//so we just inject the service in config

loginModule.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/login',{
		templateUrl:'login/login.html',
		controller:'loginCtrl'
	});
}]);


loginModule.controller('loginCtrl', [function(){
	
}]);