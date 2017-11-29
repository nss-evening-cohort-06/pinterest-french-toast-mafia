'use strict';

app.service("DataService", function ($http, $q, $scope, FIREBASE_CONFIG) {

  const postNewBoard = (newBoard) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify(newBoard));
  };



  const createBoard = (boardInfo) => {
    return {
      "name": boardInfo.name,
      "description": boardInfo.description,
      "is_secret": boardInfo.isSecret,
      "id": boardInfo.id,
      "uId": boardInfo.uId,
    };
  };

  const createPin = (pinInfo) => {
    return {
       "name": pinInfo.name,
        "url": pinInfo.url,
        "img_path": pinInfo.img_path,
        "details": pinInfo.details,
        "boardId": pinInfo.boardID,
        "uId": pinInfo.uId
    };
  };

  const getMyBoards = (userUid) => {
    let boards = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uid"&equalTo="${userUid}`);
    });
   };

  return {
    postNewBoard,
    createBoard,
    createPin,
    getMyBoards
  };

}); 