'use strict';

app.controller("NewBoardCtrl", function ($location, $rootScope, $scope, DataService) {
  
  $scope.master = {};

  $scope.addNew = ((boardInfo) => {
    boardInfo.uId = $rootScope.uid;
    $scope.master = angular.copy(boardInfo);
    let newBoard =  DataService.createBoard($scope.master);
    DataService.postNewBoard(newBoard).then((results) => {
      $location.path('/myboards');
    }).catch((err) => {
      console.log("error in addNew board", err);
    }); // end post
  }); // end addNew

}); // end controller
