angular.module("app").service("weatherService",function($http){
  this.getReportBasedOnLocation=function(location){
    return $http({
        url:"https://weathereporterair.herokuapp.com/getReportBasedOnLocation",
        method:"GET",
        params:{location:location}
    })
  }
  this.getReportBasedOnLatitude=function(latitude,longitude){
    return $http({
        url:"https://weathereporterair.herokuapp.com/getReportBasedOnLatitude",
        method:"GET",
        params:{latitude:latitude,
        longitude:longitude}
    })
  }
})
