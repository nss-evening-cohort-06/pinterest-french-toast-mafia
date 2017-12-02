'use strict';

app.controller("MyPinsCtrl", function($rootScope, $scope, PinService) {

    const getUserPins = () => {
        PinService.getMuhPins($rootScope.uid).then((results) => {
            $scope.pins = results;
        }).catch((error) => {
            console.log("Error in getMuhPins", error);
        });
    };

    getUserPins();

    $scope.deletePin = (pinId) => {
        PinService.deleteMyPin(pinId).then((results) => {
            getUserPins();
        }).catch((error) => {
            console.log("Error in deleteMyPin", error);
        });
    };

    
});