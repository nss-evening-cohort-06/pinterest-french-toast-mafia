"use strict";

app.controller("SavePinCtrl", function($location, $routeParams, $rootScope, $scope, DataService, PinService) {
	$scope.pins = [];

	// $scope.savePin = (inputData) => {
 //    inputData.uId = $rootScope.uid;
	// };

	const getAllBoards = () => {
    	DataService.getMyBoards($rootScope.uid).then((results) => {
    			$scope.boards = results;
 		}).catch((err) => {
 			console.log("error in getAllBoards", err);
 		}); 	
    };

   getAllBoards();

	const getPinInfo = () => {
		PinService.getSinglePin($routeParams.id).then((results) =>{
			$scope.pin=results.data;
		}).catch((err) => {
			console.log("Err in getSinglePin", err);
			});
		};

		getPinInfo();

		$scope.addSavedPin = (pin) => {
			let updatedPin = PinService.createPinObject(pin);
			updatedPin.uId = $rootScope.uid;
			console.log("Updaed pin", updatedPin);
			PinService.saveSinglePin(updatedPin, $routeParams.id).then((result) => {
				getPinInfo();
				$location.path('/mypins');
				console.log("getPinInfo", result);
			}).catch((err) => {
				console.log("error in update pins", err);
			});	
	};


});