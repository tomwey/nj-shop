angular.module('nj-shop.services', [])

// 显示Loading
.factory('LoadingService', ['$ionicLoading', function($ionicLoading) {
  return {
    showLoading: function() {
      $ionicLoading.show({
        // templateUrl: 'templates/loading-spinner.html',
        template: '<ion-spinner class="spinner-light"></ion-spinner>',
        noBackdrop: true,
      })
    },
    hideLoading: function() {
      $ionicLoading.hide();
    }
  }
}])

// 微信登录服务
.factory('AuthService', function() {
  return {
    isLogined: function() {
      
    }
  };
})

// 获取产品
.factory('ItemService', ['$http',function($http) {
  var items = [];
  return {
    getItemsByCategoryId: function(categoryId) {
      return $http.get("http://nongjia.shuiguoshe.com/api/v1/products?category_id=" + categoryId)
        .then(function(response) {
          // console.log(response);
          items = response.data.data;
          console.log(items);
          return response.data.data;
        });
    },
    getItemById: function(itemId) {
      return $http.get("http://nongjia.shuiguoshe.com/api/v1/products/" + itemId).then(function(response) {
        var item = response.data.data;
        return item;
      });
    }
  }
}])