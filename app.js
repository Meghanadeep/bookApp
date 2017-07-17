var app = angular.module("proj" ,['ui.router']);
console.log("inside app");


app.config(function($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise('/list');

$stateProvider
.state('list',{
	'url':'/list',
	'templateUrl':'views/list/listtpls.html',
	'controller':'listctrl as lc'
})	
});