angular.module('nj-shop', ['ionic', 'nj-shop.controllers'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  $stateProvider
  
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
  .state('tab.orders', {
    url: '/orders',
    views: {
      'tab-orders': {
        templateUrl: 'templates/tab-orders.html',
        controller: 'OrderCtrl'
      }
    }
  })
  
  .state('tab.user', {
    url: '/user',
    views: {
      'tab-user': {
        templateUrl: 'templates/tab-user.html'
      }
    }
  })
  
  $urlRouterProvider.otherwise('/tab/home');
}])