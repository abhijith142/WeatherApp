angular.module("app").service("weatherService",function($http){
  this.getReportBasedOnLocation=function(location){
    return $http({
        url:"http://localhost:9090/getReportBasedOnLocation",
        method:"GET",
        params:{location:location}
    })
  }
  this.getReportBasedOnLatitude=function(latitude,longitude){
    return $http({
        url:"http://localhost:9090/getReportBasedOnLatitude",
        method:"GET",
        params:{latitude:latitude,
        longitude:longitude}
    })
  }
})
