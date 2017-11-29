'use strict';

app.controller("MyBoardsCtrl", function($rootScope, $scope, DataService) {

    const getDaBoards = () => {
        DataService.getMyBoards($rootScope.uid).then((results) => {
            console.log(results);
            $scope.boards = results;
       }).catch((error) => {
            console.log("Error in getMyBoards", error);
       });
    };
    
    getDaBoards();
});