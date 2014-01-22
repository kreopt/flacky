!function(){
  var module = angular.module('flacky.block_properties',[]);
  module.directive('flackyBlockProperties',function(){
    return {
      restrict:'E',
      replace:true,
      templateUrl:'/src/app/block_properties/block_properties.html',
      link: function linkingFunction($scope, $element, $attributes){

      }
    }
  })
}();
