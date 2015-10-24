angular.module('fireAdventures')
  .factory('Session', function(Auth, $q) {
    var sessionDefer = $q.defer();

    Auth.$onAuth(function(authData) {
      sessionDefer.resolve(authData);
    });

    return {
      getSession: function() {
        return sessionDefer.promise;
      }
    };
  });
