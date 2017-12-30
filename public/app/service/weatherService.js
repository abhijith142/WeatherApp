angular.module("app").service("weatherService",function($http){
  this.getReportBasedOnLocation=function(location){
    return $http({
        url:"https://localhost:9091/getReportBasedOnLocation",
        method:"GET",
        params:{location:location}
    })
  }
  this.getReportBasedOnLatitude=function(latitude,longitude){
    return $http({
        url:"https://localhost:9091/getReportBasedOnLatitude",
        method:"GET",
        params:{latitude:latitude,
        longitude:longitude}
    })
  }
})
