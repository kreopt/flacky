angular.module('flacky').controller('FlackyController', function($scope){
  $scope.show_spacing=true;
  $scope.show_borders=true;
  $scope.show_captions=true;
  $scope.block_parents={};
  $scope.dependencies=[];
  $scope.components={
    'test_component':{
      directive:'x-test-component'
    }
  };
  $scope.page={
    nodelete:true,
    layout:'vlayout',
    blocks:{
      'layout1':{
        id:'layout1',
        stretch:'stretch-1',
        layout:'hlayout',
        blocks:{
          'a':{
            id:'layout2',
            stretch:'stretch-1',
            layout:'hlayout'
          },
          'b':{
            id:'layout3',
            stretch:'stretch-2',
            layout:'vlayout',
            blocks:{
              'c':{
                id:'layout4',
                stretch:'stretch-1',
                layout:'hlayout',
                component:{
                  id:'test_component',
                  args:{}
                }
              },
              'd':{
                id:'layout5',
                stretch:'stretch-3',
                layout:'hlayout'
              }
            }
          }
        }
      }
    }
  };
  $scope.current_block=$scope.page;
  $scope.blockprop=$scope.current_block;
  $scope.deleteBlock= function deleteBlock(){
    if (confirm('Удалить блок?')){
      var id=$scope.current_block.id;
      delete $scope.block_parents[id].blocks[id];
      $scope.current_block = $scope.page;
    }
  };
  $scope.selectBlock = function selectBlock($event){
    $event.stopPropagation();
    this.block.selected=!this.block.selected;
    if (this.block.selected){
      $scope.current_block.selected=false;
      $scope.current_block=this.block;
    } else {
      $scope.current_block=$scope.page;
    }
    $scope.blockprop=$scope.current_block;
//    $scope.$apply();
  }
});