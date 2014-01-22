!function(){
  var module = angular.module('flacky.toolbar', [
    'flacky.toolbar.i18n',
    'flacky.block_properties',
    'ui.bootstrap'
  ]);
  module.directive('flackyToolbar',function(){
    return {
      restrict:'E',
      replace:true,
      templateUrl:'/src/app/toolbar/toolbar.html',
      link: function linkingFunction($scope, $element, $attributes){}
    }
  });
  module.controller('ToolbarController', function($scope, $modal){
    $scope.openAddDialog = function openAddDialog(){
      var modalInstance = $modal.open({
        templateUrl: '/src/app/toolbar/add_block.html',
        controller: ModalInstanceCtrl,
        windowClass:'displayBlock'  // bootstrap 3.0 hack
      });

      modalInstance.result.then(function (blockprop) {
        if (!$scope.current_block.blocks){
          $scope.current_block.blocks={};
        }
        $scope.block_parents[blockprop.id]=$scope.current_block;
        $scope.current_block.blocks[blockprop.id]=blockprop;
      }, function () {

      });
    };
    $scope.openAddComponentDialog = function openAddDialog(){
      var modalInstance = $modal.open({
        templateUrl: '/src/app/toolbar/add_component.html',
        controller: ModalCompInstanceCtrl,
        windowClass:'displayBlock'  // bootstrap 3.0 hack
      });

      modalInstance.result.then(function (cmp_name) {
        var cmp =angular.extend({}, $scope.components[cmp_name]);
        cmp.args=$scope.component_args;
        $scope.current_block.component=cmp;
      }, function () {

      });
    }
  });

  var ModalCompInstanceCtrl = function($scope, $modalInstance){
    $scope.component_args={};
    $scope.component_name='test_component';
    $scope.ok = function () {
      if (!$scope.component_name){
        $modalInstance.dismiss('cancel');
        return;
      }
      $modalInstance.close($scope.component_name);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };
  var layout_idx=1;
  var ModalInstanceCtrl = function ($scope, $modalInstance) {

    $scope.blockprop={
      nodelete:true,
      stretch:'stretch-1',
      layout:'hlayout',
      id:'layout-'+layout_idx
    };
    layout_idx++;

    $scope.ok = function () {
      delete $scope.blockprop.nodelete;
      $modalInstance.close($scope.blockprop);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };
}();
