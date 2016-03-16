angular.module('nj-shop.routes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/tab/home');
  
  $stateProvider
  
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
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
  
  .state('tab.setting', {
    url: '/setting',
    views: {
      'tab-setting':{
        templateUrl: 'templates/tab-setting.html',
        controller: 'SettingCtrl'
      }
    }
  })
  
  .state('tab.item-detail', {
    url: '/item-detail/:item_id',
    views: {
      'tab-home': {
        templateUrl: 'templates/item-detail.html',
        controller: 'ItemDetailCtrl',
      }
    }
  })
  
}])