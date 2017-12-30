angular.module("app").controller("homeController", function($scope, $filter, dataBasedOnLatitude, weatherService) {
  $scope.error = dataBasedOnLatitude.error;
  console.log(dataBasedOnLatitude);
  $scope.city = dataBasedOnLatitude.city;
  $scope.dataBasedOnLatitude = dataBasedOnLatitude.data;
  $scope.currentCondition = $scope.dataBasedOnLatitude.current_condition[0];
  $scope.weather = $scope.dataBasedOnLatitude.weather[0];
  $scope.dates = getDates($scope.dataBasedOnLatitude.weather);
  console.log($scope.city);
  console.log($scope.currentCondition)
  console.log($scope.dataBasedOnLatitude);
  $scope.currentDate = $scope.dataBasedOnLatitude.weather[0].date;
  var weatherHourly = $scope.dataBasedOnLatitude.weather[0].hourly;
  $scope.hourlyWeather = weatherHourly;
  $scope.data = getData(weatherHourly);
  $scope.xAxis = ["12:00 AM", "3:00 AM", "6:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"];
  $scope.options = {
    chart: {
      type: 'lineChart',
      height: 200,
      margin: {
        top: 20,
        right: 40,
        bottom: 40,
        left: 55
      },
      showValues: true,
      interpolate: 'basis',
      x: function(d) {
        return d.x;
      },
      y: function(d) {
        return d.y;
      },
      useInteractiveGuideline: true,
      xAxis: {
        axisLabel: 'Hours',
        tickFormat: function(d) {
          return $scope.xAxis[d];
        }
      },
      yAxis: {
        axisLabel: 'Temperature',
        tickFormat: function(d) {
          return d;
        },
        axisLabelDistance: -10
      }
    },
    title: {
      enable: true,
      text: 'Hourly Temprature'
    }
  };

  $scope.data = getData(weatherHourly);




  function getDates(weather){
    var dates=[];
    angular.forEach(weather,function(value){
      dates.push(value.date);
    })
    console.log(dates);
    return dates;
  }

  $scope.datesChanged = function($event,date){
    $scope.currentDate = date;
    var weatherHourly = null;
    angular.forEach($scope.dataBasedOnLatitude.weather,function(value){
      if(value.date == date){
        weatherHourly=value.hourly
        $scope.data = getData(weatherHourly);
        $scope.hourlyWeather = weatherHourly;
      }
    })
  }
  $scope.changeLocation = function(){
    console.log($scope.searchLocation);
    weatherService.getReportBasedOnLocation($scope.searchLocation)
      .then(function(res,err) {
        res.data.city = {long_name : $scope.searchLocation};
        console.log(res.data);
        if(res.data.data.hasOwnProperty("error")){
          console.log("Unable to find any matching weather location to the query submitted!")
          $scope.error=true;
        }
        else{
          var dataBasedOnLatitude = res.data;
          $scope.city = dataBasedOnLatitude.city;
          $scope.dataBasedOnLatitude = dataBasedOnLatitude.data;
          $scope.currentCondition = $scope.dataBasedOnLatitude.current_condition[0];
          $scope.weather = $scope.dataBasedOnLatitude.weather[0];
          $scope.dates = getDates($scope.dataBasedOnLatitude.weather);
          console.log($scope.city);
          console.log($scope.currentCondition)
          console.log($scope.dataBasedOnLatitude);
          $scope.currentDate = $scope.dataBasedOnLatitude.weather[0].date;
          var weatherHourly = $scope.dataBasedOnLatitude.weather[0].hourly;
          $scope.hourlyWeather = weatherHourly;
          $scope.data = getData(weatherHourly);
        }
      }).catch(function(){
        $scope.error = true;
      })
  }
  function getData(weatherHourly) {
    let celcius = [];
    let fahrenheit = [];
    let windSpeed = [];
    let humidity = [];
    for (var i = 0; i < weatherHourly.length; i++) {
      let value = weatherHourly[i];
      celcius.push({
        x: i,
        y: value.tempC
      });
      fahrenheit.push({
        x: i,
        y: value.tempF
      });
      windSpeed.push({
        x: i,
        y: value.windspeedKmph
      });
      humidity.push({
        x: i,
        y: value.humidity
      })
    }
    return [{
        values: celcius,
        key: "Celcius",
        area: true
      },
      {
        values: fahrenheit,
        key: "Fahrenheit",
        area: true
      },
      {
        values: windSpeed,
        key: "Wind Speed",
        area: true
      },
      {
        values: humidity,
        key: "Humidity",
        area: true
      }
    ];
  }
})
