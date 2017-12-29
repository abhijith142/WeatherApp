var app = angular.module("app",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/",{
    controller:"homeController",
    templateUrl:"app/view/homeView.html",
    resolve:{
      /*"dataBasedOnLocation":function(weatherService){
        return weatherService.getReportBasedOnLocation("Bangalore")
        .then(function(res){
          return res.data;
        })
      },*/
      "dataBasedOnLatitude":function(weatherService){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
          });
        }
        return weatherService.getReportBasedOnLatitude("4567","1234")
        .then(function(res){
          return res.data;
        })
      }
    }
  })
})
