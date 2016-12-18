appModule.controller("helpController", function ($scope, $http, dataService) {

	dataService.obradi();

	$scope.unosValuta = "HRK"

	$scope.fetchCurrencyData = function () {
		//pogledat koji sve http verbs postoje
		//pogledat query string

		var params = { base: $scope.unosValuta, symbols: ["GBP", "EUR"].join(",") };

		$http
			.get("http://api.fixer.io/latest", { params: params })
			.then(function(response){
				$scope.currency = response.data;
			})
			.catch(function(response) {
				$scope.errorMessage = response.data.error;
			});
	};

	$scope.poruka = "bok";

	$scope.user = {
		name: "ante",
		lastName: "perić"
	};

	$scope.prikazi = function () {
		alert("ovo je prikaz");
	};

	$scope.fetchCurrencyData();

});


//DOM API
document.getElementById("ufdf").innerHTML();

$("#ufdf").css('color', 'red')


function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();

$.get("dffdf")

element.prepend("<div>")