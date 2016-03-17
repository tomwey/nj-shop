angular.module('nj-shop.services', [])

.factory('User', ['$scope','$http', function($scope,$http) {
  var storageKey = 'user';
  var authKey     = 'auth';
  var user = Storage.get(storageKey) || {};
  return {
    login: function(auth) {
      Storage.set(authKey, auth);
      var $this = this;
      return $http.post('http://nongjia.shuiguoshe.com/api/v1/auth/login', auth)
        .then(function(response) {
          user = response.data.data;
          user.auth = auth;
          Storage.set(storageKey, user);
          return user;
      });
    },
    
    logout: function() {
      user = {};
      Storage.remove(storageKey);
    },
    
    getCurrentUser: function() {
      return user;
    },
    
    isLogined: function() {
      return !!user.token;
    }
    
  };
}]);