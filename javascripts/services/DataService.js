'use strict';



app.service("DataService", function ($http, $q, FIREBASE_CONFIG) {

  const postNewBoard = (newBoard) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify(newBoard));
  };

  const postNewPin = (newPin) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`, JSON.stringify(newPin));
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

  const createPinObject = (pinInfo) => {
    return {
       "name": pinInfo.name,
        "url": pinInfo.url,
        "img_path": pinInfo.img_path,
        "details": pinInfo.details,
        "boardId": pinInfo.boardId,
        "uId": pinInfo.uId
    };
  };

  

  const getAllBoards = () => {
    let boards = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json`).then((results) => {
        let fbBoards = results.data;
        if (fbBoards != null) {
          Object.keys(fbBoards).forEach((key) => {
            fbBoards[key].id = key;
            if (!fbBoards[key].is_secret) {
              boards.push(fbBoards[key]);
            }
            resolve(boards);
          });
        }
      }).catch((error) => {
        console.log("Error in database getAllBoards", error);
      });
    });
  };

  const getMyBoards = (userUid) => {
    let boards = [];
    return $q((resolve, reject) => {
        $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uId"&equalTo="${userUid}"`).then((results) => {
          let fbBoards = results.data;
          if (fbBoards != null) {
              Object.keys(fbBoards).forEach((key) => {
                  fbBoards[key].id = key;
                  boards.push(fbBoards[key]);
                  resolve(boards);
              });
          }
        }).catch((error) => {
            console.log("Error in database getAllBoards", error);
        });
    });
  };

  const deleteBoard = (userUid) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/boards/${userUid}.json`);
  };



  return {
    getAllPins,
    postNewBoard,
    createBoard,
    getAllBoards,
    createPinObject,
    getMyBoards,
    deleteBoard,
    postNewPin

  };

}); 
