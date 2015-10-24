angular.module('fireAdventures')
  .factory('Auth', function($firebaseAuth, FirebaseUrl){
    return $firebaseAuth(new Firebase(FirebaseUrl));
  });
