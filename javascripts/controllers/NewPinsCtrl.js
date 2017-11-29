'use strict';

app.controller("NewPinsCtrl", function($location, $rootScope, $scope, DataService) {
    $scope.pins = [];



    $scope.addContact = (inputData) => {
    	inputData.uid = $rootScope.uid;

    		let newPin = DataService.createPinObject(inputData);
    		DataService.postNewPin(newPin).then (() => {
    			$location.path('/pins/mypins');
    		});
    };

    const getAllBoards = () => {
    	DataService.getMyBoards($rootScope.uid).then((results) => {
    			$scope.boards = results;
 		}).catch((err) => {
 			console.log("error in getAllBoards", err);
 		}); 	
    };


});