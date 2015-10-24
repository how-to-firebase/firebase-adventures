angular.module('fireAdventures')
  .factory('Testimonials', function($firebaseArray, $firebaseObject, FirebaseUrl){
    var testimonialsRef = new Firebase(FirebaseUrl+'/testimonials');
    var testimonials = $firebaseArray(testimonialsRef);

    var Testimonials = {
      all: testimonials
    };

    return Testimonials;
  });
