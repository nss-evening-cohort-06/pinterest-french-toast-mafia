'use strict';

app.controller("MyBoardsCtrl", function($location, $scope) {
    $scope.myBoards = "deez my boards";

    $scope.toAddBoard = () => {
        $location.path(`/newboard`);
    };
});
