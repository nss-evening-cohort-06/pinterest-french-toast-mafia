'use strict';

app.controller("NewPinsCtrl", function($location, $rootScope, $scope, DataService) {
    $scope.pins = [];



    $scope.addPin = (inputData) => {
    	inputData.uid = $rootScope.uid;
    		getAllBoards();
    		let board = inputData.boardId;
    		let newPin = DataService.createPinObject(inputData);
    		DataService.postNewPin(newPin, board).then (() => {
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

    getAllBoards();
    
    $scope.boardDropdown = (inputData) => {

    };

 

});