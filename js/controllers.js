angular.module('nj-shop.controllers', [])

.controller('HomeCtrl', ['$scope','$http','$state','ItemService','LoadingService','$timeout',
   function($scope,$http, $state, ItemService, LoadingService, $timeout) {
  $scope.onSwipeLeft = function() {
    $state.go('tab.orders');
  };
  
  LoadingService.showLoading();
  ItemService.getItemsByCategoryId(1).then(function(items) {
    
    $timeout(function(){
      $scope.items = items;
      LoadingService.hideLoading();
    }, 3000);
  })
}])

.controller('OrderCtrl', ['$scope','$state', function($scope, $state) {
  $scope.onSwipeLeft = function() {
    $state.go('tab.setting');
  };
  
  $scope.onSwipeRight = function() {
    $state.go('tab.home');
  }
  
  $scope.orders = [
  {
    order_no: '201603150494940',
    order_time: '2016-03-15 22:30:30',
    item_thumb: 'http://nongjia.shuiguoshe.com/uploads/category/image/1/thumb_2c7ac056-f6a0-4439-bc45-4273f9d6b2b8.jpg',
    item_title: '2-3年母鸡/林间散养',
    total: 1,
    total_price: 169,
    state: '待发货'
  },
  {
    order_no: '201603150494940',
    order_time: '2016-03-15 22:30:30',
    item_thumb: 'http://nongjia.shuiguoshe.com/uploads/category/image/1/thumb_2c7ac056-f6a0-4439-bc45-4273f9d6b2b8.jpg',
    item_title: '2-3年母鸡/林间散养2-3年母鸡/林间散养2-3年母鸡/林间散养2-3年母鸡/林间散养',
    total: 1,
    total_price: 169,
    state: '待发货'
  },
  {
    order_no: '201603150494940',
    order_time: '2016-03-15 22:30:30',
    item_thumb: 'http://nongjia.shuiguoshe.com/uploads/category/image/1/thumb_2c7ac056-f6a0-4439-bc45-4273f9d6b2b8.jpg',
    item_title: '2-3年母鸡/林间散养',
    total: 1,
    total_price: 169,
    state: '待发货'
  },
  ];
}])

.controller('SettingCtrl', ['$scope','$state', function($scope, $state) {
  $scope.onSwipeRight = function() {
    $state.go('tab.orders');
  };
}])