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


    $scope.deleteMyBoard = (Id) => {
        DataService.deleteBoard(Id).then((result) => {
            getDaBoards();
        }).catch((err) => {
            console.log("error in deleteMyBoard", err);
        });


    };

    $scope.editMyBoard = (boardId) => {
        $location.path(`/board/${boardId}`);
    };

    $scope.seeMyPins = () => {
        $location.path(`/mypins`);
    };

    const getUserName = () => {
        DataService.getUserInfo($rootScope.uid).then((results) => {
            $scope.user = results[0];
        }).catch((err) => {
            console.log("error in getUserName", err);
        });
    };

    getUserName();


});

