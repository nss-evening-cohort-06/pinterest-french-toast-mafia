'use strict';

app.controller("AllPinsCtrl", function ($scope, PinService) {

    const showAllPins = () => {
        PinService.getAllPins().then((results) => {
            $scope.pins = results;
        }).catch((err) => {
            console.log("error in showAllPins", err);
        });
    }; // end showallPins()

    showAllPins();

}); // end controller