'use strict';



app.service("PinService", function ($http, $q, FIREBASE_CONFIG) {

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

    return {getAllPins, createPinObject,  postNewPin};
});
  