// dokumentacija na https://docs.angularjs.org/api

var appModule = angular.module("app1", []);

appModule.controller("homeController", function ($scope) {
	// kod koji se bude nalazio unutar tijela ove funkcije je kod 'homeController' kontrolera

	$scope.ime = "diana";

	$scope.varijabla = "neki tekst za prikazati u viewu.";
	
	$scope.isClicked = false;

});