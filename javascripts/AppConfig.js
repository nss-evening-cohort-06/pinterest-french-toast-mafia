'use strict';


let isAuth = (AuthService) => new Promise ((resolve, reject) => {
  if(AuthService.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthService){
  firebase.initializeApp(FIREBASE_CONFIG);

  //watch method that fires on change of a route.  3 inputs. 
  //event is a change event
  //currRoute is information about your current route
  //prevRoute is information about the route you came from
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    // checks to see if there is a current user
    var logged = AuthService.isAuthenticated();

    var appTo;

    // to keep error from being thrown on page refresh
    if (currRoute.originalPath) {
      // check if the user is going to the auth page = currRoute.originalPath
      // if user is on auth page then appTo is true
      // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
      appTo = currRoute.originalPath.indexOf('/login') !== -1;
      // appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    //if not on /auth page AND not logged in redirect to /auth
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
      // $location.path('/login');
    }
  });
});



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
            controller: "AllBoardsCtrl"
        })
        .when("/auth", {
            templateUrl: "partials/auth.html",
            controller: "AuthCtrl"
        })
        .otherwise("/auth");
});

