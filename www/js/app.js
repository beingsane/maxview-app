// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller('indexController', ['$scope','$http','$interval', function($scope, $http, $interval){
  $scope.urlImage = "http://192.168.0.8:8090/getimage";
  $scope.getStarted = false;
  var pega = function(){
    if($scope.getStarted){
      var timeStamp =  new Date().getTime();
      $scope.urlImage = "http://192.168.0.8:8090/getimage?a="+timeStamp;
    }
  }

  pega();
  
  $scope.started = function (){
    $scope.getStarted = !$scope.getStarted;
    pega();
  }

}]);