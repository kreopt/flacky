!function(){
  var module = angular.module('test_component',[]);
  module.directive('testComponent', function(){
    return {
      restrict:'E',
      replace:true,
      templateUrl:'/src/common/test_component/test.html',
      link: function linkingFunction($scope, $element, $attributes){}
    }
  });
}();