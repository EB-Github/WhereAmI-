var app = angular.module('App', ['ngCordova',
'ngMaterial',
'ngRoute',
'uiGmapgoogle-maps']);

app.controller('appCtrl', function($scope) {
});
app.controller('locCtrl', function($scope) {
  $scope.onlyZIP = /^\d{5}(?:[-\s]\d{4})?$/;
  $scope.zipcode = null
  uiGmapGoogleMapApi.then(function(maps) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

   });
});

app.controller('factsCtrl', function($scope) {
});
app.controller('weatherCtrl', function($scope, $http) {

});

app.config(function(uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.configure({
        key: 'AIzaSyCIFs1cZyZmVf_OAgoxfjRW5P-4CsQmtq0',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'locCtrl'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'weatherCtrl'
      })

      .when('/facts', {
        templateUrl: 'views/facts.html',
        controller: 'factsCtrl'
      })
      .otherwise({
        redirectTo: '/location'
        });
  }]);
