'use strict';

app.controller("BoardDetailCtrl", function($location, $routeParams, $scope, DataService) {
    const getSingelBoard = () => {
        DataService.getBoard($routeParams.id).then((results) => {
            $scope.board = results.data;
        }).catch((error) => {
            console.log("Error in getSingleBoard", error);
        });
    };

    $scope.editBoard = (boardInfo) => {
        let editedBoard = $scope.board;
        editedBoard.is_secret = boardInfo.is_secret;
        DataService.editMyBoard(editedBoard, $routeParams.id).then((results) => {
            
            $location.path("/myboards");
        }).catch((error) => {
            console.log("Error in editBoard", error);
        });
    };

    getSingelBoard();
});