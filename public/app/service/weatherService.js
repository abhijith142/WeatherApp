angular.module("app").service("weatherService",function($http){
  this.getReportBasedOnLocation=function(location){
    return $http({
        url:"https://localhost:443/getReportBasedOnLocation",
        method:"GET",
        params:{location:location}
    })
  }
  this.getReportBasedOnLatitude=function(latitude,longitude){
    return $http({
        url:"https://localhost:443/getReportBasedOnLatitude",
        method:"GET",
        params:{latitude:latitude,
        longitude:longitude}
    })
  }
})
