'use strict';

app.controller("AllBoardsCtrl", function ($location, $scope, DataService) {
    const getBoards = () => {
        DataService.getAllBoards().then((results) => {
            $scope.boards = results;
        }).catch((error) => {
            console.log("Error in getAllBoards", error);
        });
    };

    getBoards();

    $scope.seeThisBoardsPins = (boardId) => {
        $location.path(`/pinsbyboard/${boardId}`);
    };
});