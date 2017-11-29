'use strict';

app.service("DataService", function ($http, $q, FIREBASE_CONFIG) {

  const postNewBoard = (newBoard) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify(newBoard));
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


  

  return {
    postNewBoard,
    getAllBoards
  };

}); 