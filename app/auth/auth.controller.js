angular.module('fireAdventures')
  .controller('AuthCtrl', function(Auth, Session, Users, Testimonials, $state, $scope){
    var authCtrl = this;
    $scope.adventurers = Users.all;
    $scope.testimonials = Testimonials.all;

    Session.getSession().then(function (session) {
      $scope.session = session;
    });

    authCtrl.user = {
      username: '',
      displayName: '',
      profileImageURL: ''
    };

    authCtrl.login = function() {
      Auth.$authWithOAuthPopup('twitter').then(function(authData) {
        authCtrl.user.username = authData.twitter.username;
        authCtrl.user.displayName = authData.twitter.displayName;
        authCtrl.user.profileImageURL = authData.twitter.profileImageURL;

        Users.all.$add(authCtrl.user).then(function (data){
          //TODO: Show welcome message!
        }, function (error){
          authCtrl.error = error;
        });

      }).catch(function(error) {
        authCtrl.error = error;
      });
    }
  });
