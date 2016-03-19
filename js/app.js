angular.module('nj-shop', ['ionic', 'ionicLazyLoad', 'nj-shop.routes', 'nj-shop.controllers', 'nj-shop.services', 'nj-shop.directives'])

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
}])

.run(['$rootScope','$window', '$state', 'AuthService',
  function($rootScope, $window, $state, AuthService) {
  $rootScope.$on('$stateChangeStart', function(event, nextRoute, currentRoute) {
    // if ( nextRoute.access.requireLogin && !AuthService.isLogined() ) {
    //   event.preventDefault();
    //   
    //   $window.location.href = AuthService.getWechatAuthorizeUrl();
    // }
  })  
}])