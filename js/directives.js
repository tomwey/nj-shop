angular.module('nj-shop.directives', [])

// 隐藏TabBar
.directive('hideTabs', ['$rootScope',function($rootScope){
  return {
    restrict: 'A',
    link: function($scope, $el) {
      $rootScope.hideTabs = true;
      $scope.$on('$destroy', function() {
        $rootScope.hideTabs = false;
      });
    }
  };
  // return {
  //     restrict: 'A',
  //     link: function($scope, $el) {
  //       $scope.$on("$ionicView.beforeEnter", function () {
  //         $rootScope.hideTabs = true;
  //       });
  //       $scope.$on("$ionicView.beforeLeave", function () {
  //         $rootScope.hideTabs = false;
  //       });
  //     }
  //   };
}])