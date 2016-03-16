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
        // console.log(response.data.data);
        // console.log(response.data.data);
        // var item = angular.fromJson(response.data.data)
        // var images = [];
        // console.log(item)
        // for (var i=0; i<item.images; i++)
        //   images.push({ url: item.images[i] });
        // console.log(images);
        // item.images = images;
        // console.log(item);
        
        var item = response.data.data;
        // var temp = [];
        // for (var i=0; i<item.images.length; i++)
        //   temp.push({ url: item.images[i] });
        // item.images = temp;
        //
        // console.log(item);
        
        return item;
      });
    }
  }
}])