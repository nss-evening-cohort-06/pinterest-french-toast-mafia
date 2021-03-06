'use strict';

app.controller("NewPinsCtrl", function($location, $rootScope, $scope, DataService, PinService) {
    $scope.boards = [];
    $scope.pin = {};


    $scope.addPin = (inputData) => {
    	inputData.uId = $rootScope.uid;
    		let newPin = PinService.createPinObject(inputData);
           
    		PinService.postNewPin(newPin).then (() => {
    			$location.path('/mypins');
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
    
    $scope.boardDropdown = (inputData) => {

    };

 

});