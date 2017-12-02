'use strict';

app.controller("EditPinCtrl", function($location, $scope, $rootScope, PinService, $routeParams, DataService){

const getPin = () => {
        PinService.getSinglePin($routeParams.id).then((results) => {
            $scope.pin = results.data;
        }).catch((error) => {
            console.log("Error in getPins", error);
        });
    };

$scope.editPin = (pinId) => {
        // $location.path('/edit/pinId')
        let editedPin = $scope.pin;
        PinService.editPin(editedPin, $routeParams.id).then((results) => {
            getPin();
            $location.path("/mypins");
        }).catch((error) => {
            console.log("Error in editPins", error);
        });
    };

const getAllBoards = () => {
    	DataService.getMyBoards($rootScope.uid).then((results) => {
    			$scope.boards = results;
 		}).catch((err) => {
 			console.log("error in getAllBoards", err);
 		}); 	
    };

    getAllBoards();


    getPin();



});