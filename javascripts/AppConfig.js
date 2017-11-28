'use strict';

app.config(function ($routeProvider) {
  $routeProvider
    .when("/boards/newBoard", {
      templateUrl: 'partials/boards/newBoard.html',
      controller: 'NewBoardCtrl'
    });
});