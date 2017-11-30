'use strict';

app.controller("MyPinsCtrl", function($rootScope, $scope, PinService, $location) {

    const getUserPins = () => {
        PinService.getMuhPins($rootScope.uid).then((results) => {
            $scope.pins = results;
        }).catch((error) => {
            console.log("Error in getMuhPins", error);
        });
    };

    getUserPins();

     $scope.editPin = (Id) => {
    $location.path(`/pins/edit/${Id}`);
  };

});