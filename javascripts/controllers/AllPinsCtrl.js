'use strict';

app.controller("AllPinsCtrl", function ($scope, DataService) {

    const showAllPins = () => {
        DataService.getAllPins().then((results) => {
            $scope.pins = results;
        }).catch((err) => {
            console.log("error in showAllPins", err);
        });
    }; // end showallPins()

    showAllPins();

}); // end controller