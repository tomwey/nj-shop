angular.module('nj-shop.controllers', [])

.controller('HomeCtrl', ['$scope','$http','$state','ItemService','LoadingService','$timeout',
   function($scope,$http, $state, ItemService, LoadingService, $timeout) {
  
  $scope.onSwipeLeft = function() {
    $state.go('tab.orders');
  };
  
  // 加载产品
  LoadingService.showLoading();
  ItemService.getItemsByCategoryId(1).then(function(items) {
    $scope.items = items;
    LoadingService.hideLoading();
  });
  
  // 跳转到产品详情页面
  $scope.showItemDetail = function(item) {
    $state.go('tab.item-detail', {item_id: item.id});
  };
  
}])

.controller('OrderCtrl', ['$scope','$state', function($scope, $state) {
  $scope.onSwipeLeft = function() {
    $state.go('tab.setting');
  };
  
  $scope.onSwipeRight = function() {
    $state.go('tab.home');
  }
  
}])

.controller('ItemDetailCtrl', ['$scope', '$stateParams','ItemService','LoadingService','$ionicSlideBoxDelegate',
 function($scope, $stateParams, ItemService, LoadingService,$ionicSlideBoxDelegate) {
  console.log($stateParams);
  
  // 数字控件操作
  $scope.order = { total: 1 };
  $scope.digitChange = function(flag) {
    if (flag) {
      $scope.order.total ++;
    } else {
      if ( $scope.order.total > 1 ) {
        $scope.order.total --;
      }
    }
  }
  
  // 下单
  $scope.checkout = function() {
    alert($scope.item.id);
  }
  
  // 获取产品详情
  // LoadingService.showLoading();
  ItemService.getItemById($stateParams.item_id).then(function(item) {
    $scope.item = item;
    // console.log(item)
    // LoadingService.hideLoading();
    $ionicSlideBoxDelegate.update();
  });
}])

.controller('SettingCtrl', ['$scope','$state', function($scope, $state) {
  $scope.onSwipeRight = function() {
    $state.go('tab.orders');
  };
}])