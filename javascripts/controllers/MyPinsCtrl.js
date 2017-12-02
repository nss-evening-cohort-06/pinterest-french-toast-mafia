'use strict';

app.controller("MyPinsCtrl", function($location, $rootScope, $scope, DataService, PinService) {

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

    
    $scope.seeMyBoards = () => {
        $location.path(`/myboards`);
    };

    const getUserName = () => {
        DataService.getUserInfo($rootScope.uid).then((results) => {
            $scope.user = results[0];
        }).catch((err) => {
            console.log("error in getUserName", err);
        });
    };

    getUserName();
});