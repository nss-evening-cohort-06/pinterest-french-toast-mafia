'use strict';

app.controller("EditPinCtrl", function($location, $scope, $rootScope, PinService, $routeParams){

const getPins = () => {
        PinService.getMuhPins($rootScope.uid).then((results) => {
            $scope.pins = results.data;
        }).catch((error) => {
            console.log("Error in getPins", error);
        });
    };

$scope.editPins = (boardInfo) => {
        let editedPin = $scope.pin;
        PinService.editPin(editedPin, $routeParams.id).then((results) => {
            $location.path("/myPins");
        }).catch((error) => {
            console.log("Error in editPins", error);
        });
    };



    getPins();



});