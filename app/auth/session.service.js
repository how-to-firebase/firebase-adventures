angular.module('fireAdventures')
  .factory('Session', function(Auth, $q) {
    var session,
        sessionDefer;

    Auth.$onAuth(function(authData) {
      session = authData;
      // if someone is already waiting for session - we return it
      if (sessionDefer) {
        sessionDefer.resolve(authData);
      }
    });

    return {
      getSession: function() {
        sessionDefer = $q.defer();
        // if session is already set - we return it
        if (session) {
          sessionDefer.resolve(session);
        }
        return sessionDefer.promise;
      }
    };
  });
