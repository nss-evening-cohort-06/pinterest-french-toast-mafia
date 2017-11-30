'use strict';

app.controller("EditPinCtrl", function($location, $scope, $rootScope, PinService, $routeParams, DataService){

const getPin = () => {
	console.log("getpin routeParams", $routeParams.id);
        PinService.getPin($routeParams.id).then((results) => {
            $scope.pin = results;
            console.log("getpin", $scope.pin);
        }).catch((error) => {
            console.log("Error in getPins", error);
        });
    };

$scope.editPin = (userUid) => {
        let editedPin = $scope.pin;
        PinService.editPin(editedPin, $routeParams.id).then((results) => {
            $location.path("/pins/myPins");
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