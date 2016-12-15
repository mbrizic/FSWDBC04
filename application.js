// dokumentacija na https://docs.angularjs.org/api

var appModule = angular.module("app1", ["ngRoute"]);

appModule.config(function ($routeProvider, $locationProvider) {

	$routeProvider.when("/home", {
		templateUrl: "pages/home/home.html",
		controller: "homeController"
	}).when("/about", {
		templateUrl: "pages/about/about.html",
		controller: "aboutController"
	}).when("/help", {
		templateUrl: "pages/help/help.html",
		controller: "helpController"
	}).otherwise({
        redirectTo: '/home'
    });
})