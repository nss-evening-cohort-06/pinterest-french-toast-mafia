'use strict';

app.controller("AllBoardsCtrl", function($scope, DataService) {
    const getBoards = () => {
        DataService.getAllBoards().then((results) => {
            $scope.boards = results;
            console.log(results);
        }).catch((error) => {
            console.log("Error in getAllBoards", error);
        });
       };
    
       getBoards();
       
});