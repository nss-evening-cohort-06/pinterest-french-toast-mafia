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
		
		const getMuhPins = (userUid) => {
	    let myPins = [];
	    return $q((resolve, reject) => {
	      $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="uId"&equalTo="${userUid}"`).then((results) => {
	        let pins = results.data;
	        Object.keys(pins).forEach((key) => {
	          pins[key].id = key;
	          myPins.push(pins[key]);
	        });
	        resolve(myPins);
	      }).catch((error) => {
	        reject(error);
	      });
	    });
		};
		
		const deleteMyPin = (pinId) => {
			return $http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`);
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

const getPin = (pinId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`);
  };

	const editPin = (editPin, pinId) => {
		let pinObject = createPinObject(editPin);
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`, JSON.stringify(editPin));
};

  

	const getSinglePin = (pinId)=> {
				return $http.get(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`);
		};

	const saveSinglePin = (pin, pinId) => {
			return $http.post(`${FIREBASE_CONFIG.databaseURL}/pins/.json`, JSON.stringify(pin));

		};

    return {getAllPins, createPinObject, postNewPin, getSinglePin, saveSinglePin, deleteMyPin, getMuhPins, editPin};
});
  