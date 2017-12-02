'use strict';

app.controller("PinsByBoardCtrl", function ($scope, $routeParams, PinService) {
  const pinsByBoard = () => {
    PinService.getPinsByBoard($routeParams.id).then((results) => {
      $scope.pins = results;
    }).catch((err) => {
      console.log("Error in getPinsByBoard", err);
    });
  };
  pinsByBoard();
}); // end controller