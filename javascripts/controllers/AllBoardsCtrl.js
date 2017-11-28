'use strict';

app.controller("AllPinsCtrl", function ($location, $scope, DataServices) {

    const showAllPins = () => {
        DataServices.getAllPins().then((results) => {
            $scope.pins = results;
        }).catch((err) => {
            console.log("error in showAllPins", err);
        });
    }; // end showallPins()

    showAllPins();

}); // end controller