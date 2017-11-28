'use strict';

app.controller("NewBoardCtrl", function ($location, $rootScope, $scope, DataService) {
  
  $scope.master = {};
  console.log("here!");

  $scope.addNew = ((boardInfo) => {
    boardInfo.uId = $rootScope.uid;
    $scope.master = angular.copy(boardInfo);
    let newBoard =  DataService.createNewBoard($scope.master);
    console.log("newBoard", newBoard);
    DataService.postNewBoard(newBoard).then((results) => {
      $location.path('/boards/myBoards');
    }).catch((err) => {
      console.log("error in addNew board", err);
    }); // end post
  }); // end addNew

}); // end controller