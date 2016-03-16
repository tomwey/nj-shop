angular.module('nj-shop', ['ionic', 'nj-shop.routes', 'nj-shop.controllers', 'nj-shop.services', 'nj-shop.directives'])

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
}])