'use strict';

app.controller("MyBoardsCtrl", function($location, $scope) {

    $scope.toAddBoard = () => {
        $location.path(`/newboard`);
    };
});
