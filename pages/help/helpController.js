appModule.controller("helpController", function ($scope) {

	$scope.poruka = "bok";

	$scope.user = {
		name: "ante",
		lastName: "perić"
	};

	$scope.prikazi = function () {
		alert("ovo je prikaz");
	};

});