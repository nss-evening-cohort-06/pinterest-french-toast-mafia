'use strict';

<<<<<<< HEAD
app.config(function ($routeProvider) {
  $routeProvider
    .when("/boards/newBoard", {
      templateUrl: 'partials/boards/newBoard.html',
      controller: 'NewBoardCtrl'
    });
=======

app.config(function($routeProvider)  {

    $routeProvider
        .when("/mypins", {
            templateUrl: "partials/pins/myPins.html",
            controller: "MyPinsCtrl"
        })
        .when("/newpin", {
            templateUrl: "partials/pins/newPins.html",
            controller: "NewPinsCtrl"
        })
        .when("/allpins", {
            templateUrl: "partials/pins/allPins.html",
            controller: "AllPinsCtrl"
        })
        .when("/myboards", {
            templateUrl: "partials/boards/myBoards.html",
            controller: "MyBoardsCtrl"
        })
        .when("/newboard", {
            templateUrl: "partials/boards/newBoard.html",
            controller: "NewBoardCtrl"
        })
        .when("/allboards", {
            templateUrl: "partials/boards/allBoards.html",
            controller: "AllPinsCtrl"
        })
        .when("/auth", {
            templateUrl: "partials/auth.html",
            controller: "AuthCtrl"
        })
        .otherwise("/auth");
>>>>>>> master
});