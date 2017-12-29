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

                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                geocoder = new google.maps.Geocoder();

                var latlng = new google.maps.LatLng(lat, lng);
                geocoder.geocode({'latLng': latlng}, function(results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                  console.log(results)
                    if (results[1]) {
                     //formatted address
                     alert(results[0].formatted_address)
                    //find country name
                         for (var i=0; i<results[0].address_components.length; i++) {
                          for (var b=0;b<results[0].address_components[i].types.length;b++) {

                          //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                              if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                                  //this is the object you are looking for
                                  city= results[0].address_components[i];
                                  break;
                              }
                          }
                      }
                    }
                  }
                });








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
