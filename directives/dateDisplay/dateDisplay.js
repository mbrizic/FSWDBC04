appModule.directive("dateDisplay", function(){

	function dateDisplayController($scope) {

		$scope.dateNow = new Date();


	}

	//object literal koji vraćamo se naziva directive definition object
	return {
		//parametri koje možemo tu koristiti su zapisani negdje u dokumentaciji
		controller: dateDisplayController,
		templateUrl: "directives/dateDisplay/dateDisplay.html",
		scope: {
			additionalText: "@"
		}
	};


});