'use strict';

app.controller("PinsByBoardCtrl", function ($scope, $routeParams, PinService) {
  const pinsByBoard = () => {
    console.log("rootscope id", $routeParams.id);
    PinService.getPinsByBoard($routeParams.id).then((results) => {
      console.log("results", results);
      $scope.pins = results;
    }).catch((err) => {
      console.log("Error in getPinsByBoard", err);
    });
  };
  pinsByBoard();
}); // end controller