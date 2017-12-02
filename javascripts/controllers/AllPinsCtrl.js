'use strict';

app.controller("AllPinsCtrl", function ($location, $scope, PinService) {

    const showAllPins = () => {
        PinService.getAllPins().then((results) => {
            $scope.pins = results;
        }).catch((err) => {
            console.log("error in showAllPins", err);
        });
    }; // end showallPins()

	$scope.savePin = (pinId) => {
		$location.path(`/pin/${pinId}`);
	};
	
    showAllPins();

}); // end controller