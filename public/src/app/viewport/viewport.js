!function(){
  var module = angular.module('flacky.viewport',[]);
  module.directive('flackyViewport',function(){
    return {
      restrict:'E',
      replace:true,
      templateUrl:'/src/app/viewport/viewport.html',
      link: function linkingFunction($scope, $element, $attributes){}
    }
  });
  function setLabel($element){
    $element.html('<div class="flacky-block-caption">{{ block.id }}</div>');
  }
  function watchComponent($scope, $element, $compile){
    $scope.$watch('block.component', function(){
      if ($scope.block.component){
        var c=angular.extend($scope.block.component, $scope.components[$scope.block.component.id]);
        setLabel($element);
        $element.append('<'+ c.directive+'></'+ c.directive+'>');
        $compile($element.contents())($scope)
      }
    })
  }
  module.directive('flackyBlock',function($compile){
    return {
      restrict:'E',
      replace:true,
      templateUrl:'/src/app/viewport/block.html',
      link: function linkingFunction($scope, $element, $attributes){
        watchComponent($scope, $element, $compile);
      }
    }
  });
  module.directive('flackyBlockItem', function($compile){
    return {
      restrict:'E',
      replace:true,
      templateUrl:'/src/app/viewport/block_item.html',
      link: function($scope, $element, $attributes){
        watchComponent($scope, $element, $compile);
        $scope.$watch('block.blocks',function(){
          if(!$scope.block.component){
            setLabel($element);
            if ($scope.block.blocks) {
              $element.append('<x-flacky-block ng-repeat="block in block.blocks"></x-flacky-block>');
            }
            $compile($element.contents())($scope)
          }
        });
      }
    }
  })
}();
