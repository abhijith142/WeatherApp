var app = angular.module("app", ["ngRoute", "nvd3"]);
app.config(function($routeProvider) {
  $routeProvider.when("/", {
    controller: "homeController",
    templateUrl: "app/view/homeView.html",
    resolve: {
      /*"dataBasedOnLocation":function(weatherService){
        return weatherService.getReportBasedOnLocation("Bangalore")
        .then(function(res){
          return res.data;
        })
      },*/
      "dataBasedOnLatitude": function(weatherService, $q) {
        var defered = $q.defer();
        if (navigator.geolocation) {
          console.log("geoLocation")
          navigator.geolocation.getCurrentPosition(function(position) {
              console.log(position);
              var lat = position.coords.latitude;
              var lng = position.coords.longitude;
              geocoder = new google.maps.Geocoder();
              var latlng = new google.maps.LatLng(lat, lng);
              geocoder.geocode({
                  'latLng': latlng
                }, function(results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results)
                    if (results[1]) {
                      for (var i = 0; i < results[0].address_components.length; i++) {
                        for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                          //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                          if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
                            //this is the object you are looking for
                            city = results[0].address_components[i];
                            console.log(city);
                            weatherService.getReportBasedOnLocation(city.long_name)
                              .then(function(res) {
                                res.data.city = city;
                                defered.resolve(res.data);
                              })
                          }
                        }
                      }
                    }
                  }
              });
          },
          function(error){
            console.log(error);
            weatherService.getReportBasedOnLocation("Bangalore")
              .then(function(res) {
                res.data.city={"long_name" : "Bangalore"};
                defered.resolve(res.data);
              })
          });
        } else {
          defered.resolve("Navigator not supported");
        }
        return defered.promise;
      }
    }
  })
})
