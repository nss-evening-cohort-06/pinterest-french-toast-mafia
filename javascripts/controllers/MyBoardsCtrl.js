'use strict';
app.controller("MyBoardsCtrl", function ($location, $rootScope, $scope, DataService) {

    const getDaBoards = () => {
        DataService.getMyBoards($rootScope.uid).then((results) => {
            $scope.boards = results;
        }).catch((error) => {
            console.log("Error in getMyBoards", error);
        });
    };

    getDaBoards();

    $scope.toAddBoard = () => {
        $location.path(`/newboard`);
    };
});

