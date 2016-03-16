angular.module('nj-shop.services', [])

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
    }
  }
}])