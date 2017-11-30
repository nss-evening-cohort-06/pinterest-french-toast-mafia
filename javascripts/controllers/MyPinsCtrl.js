'use strict';

app.controller("MyPinsCtrl", function($scope, $location) {
    








    


























    $scope.editDetail = (Id) => {
    $location.path(`/pins/edit/${Id}`);
  };
});