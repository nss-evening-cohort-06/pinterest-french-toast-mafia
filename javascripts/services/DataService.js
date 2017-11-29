
'use strict';

app.service("DataService", function ($http, $q, FIREBASE_CONFIG) {

  const postNewBoard = (newBoard) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify(newBoard));
  };

  const getAllPins = () => {
    let allPins = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json`).then((results) => {
        let pins = results.data;
        Object.keys(pins).forEach((key) => {
          pins[key].id = key;
          allPins.push(pins[key]);
        });
        resolve(allPins);
      }).catch((error) => {
        reject(error);
      });
    });
  }; // end getAllPins() service

  const createBoard = (boardInfo) => {
    return {
      "name": boardInfo.name,
      "description": boardInfo.description,
      "is_secret": boardInfo.isSecret,
      "id": boardInfo.id,
      "uId": boardInfo.uId,
    };
  };

  return {
    getAllPins,
    postNewBoard,
    createBoard
  };

}); 