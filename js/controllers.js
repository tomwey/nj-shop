angular.module('nj-shop.controllers', [])

.controller('HomeCtrl', ['$scope','$http', function($scope,$http) {
  $http.get('http://nongjia.shuiguoshe.com:80/api/v1/products?category_id=1').success(function(data) {
    console.log(data);
      $scope.items = data.data;
    }).
    error(function(err) {
      console.log(err);
    })
}])

.controller('OrderCtrl', ['$scope', function($scope) {
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

.controller('UserCtrl', ['$scope', function($scope) {
  
}])