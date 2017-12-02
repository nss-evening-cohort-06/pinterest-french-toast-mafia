'use strict';



app.service("DataService", function ($http, $q, FIREBASE_CONFIG) {

  const postNewBoard = (newBoard) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify(newBoard));
  };


  const createBoard = (boardInfo) => {
    return {
      "name": boardInfo.name,
      "description": boardInfo.description,
      "is_secret": boardInfo.is_secret,
      "uId": boardInfo.uId,
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
            if (fbBoards[key].is_secret === 'true') {
              fbBoards[key].is_secret = true;
            } else {
              fbBoards[key].is_secret = false;
            }
            boards.push(fbBoards[key]);
            resolve(boards);
          });
        }
      }).catch((error) => {
        console.log("Error in database getAllBoards", error);
      });
    });
  };

  const getBoard = (boardId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`);
  };

  const deleteBoard = (userUid) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/boards/${userUid}.json`);
  };

  const editMyBoard = (editedBoard, boardId) => {
    let boardObject = createBoard(editedBoard);
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`, JSON.stringify(editedBoard));
  };

  const getUserInfo = (userUid) => {
    let user = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/users.json`).then((results) => {
        let fbUsers = results.data;
        if (fbUsers != null) {
          Object.keys(fbUsers).forEach((key) => {
            fbUsers[key].id = key;
            if (fbUsers[key].uId === userUid) {
              user.push(fbUsers[key]);
            }
            resolve(user);
          });
        }
      }).catch((error) => {
        console.log("Error in database getAllBoards", error);
      });
    });
  };

  return {
    postNewBoard,
    createBoard,
    getAllBoards,
    getMyBoards,
    deleteBoard,
    getBoard,
    editMyBoard,
    getUserInfo

  };

}); 
