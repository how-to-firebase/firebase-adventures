angular.module('fireAdventures')
  .controller('TestimonialCtrl', function(Testimonials, Session, $state, $scope){
    var testimonialCtrl = this;

    testimonialCtrl.newTestimonial = {
      feedback: '',
      displayName: '',
      profileImageURL: ''
    };

    testimonialCtrl.createTestimonial = function() {
      Session.getSession().then(function(session) {
        testimonialCtrl.newTestimonial.displayName = session.twitter.displayName;
        testimonialCtrl.newTestimonial.profileImageURL = session.twitter.profileImageURL;

        Testimonials.all.$add(testimonialCtrl.newTestimonial).then(function (data){
          $state.go('home');

        }, function (error){
          testimonialCtrl.error = error;
        });
      });
    }
  });
