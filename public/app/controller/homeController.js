angular.module("app").controller("homeController",function($scope,dataBasedOnLatitude,weatherService){
  $scope.name="Name";
  console.log(dataBasedOnLatitude);
})
