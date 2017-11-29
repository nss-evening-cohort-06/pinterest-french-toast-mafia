'use strict';

app.service("AuthService", function () {
  const authenticateGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };
  const isAuthenticated = () => {
   return firebase.auth().currentUser ? true : false;
};

 return {authenticateGoogle, isAuthenticated};
});