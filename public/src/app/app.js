!function(){
  var module = angular.module('flacky', [
    'flacky.viewport',
    'flacky.toolbar',
    'test_component'// TODO: dynamic injection
  ]);
  module.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }]);
}();