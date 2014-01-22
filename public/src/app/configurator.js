/*
var page={};
var idx=1;
function addBlock(block){
  var highlighted=$('.block-highlight');
  if (!highlighted.length){
    highlighted=$('#viewport');
    page[block.id]=block;
  } else {
    var path=[];
    var p=highlighted;
    do{
      path.push(p.data('id'));
      p=p.parent();
    } while (p.attr('id')!='viewport');
    var scope=page;
    for (var i=path.length-1;i>=0;i--){
      scope=scope[path[i]].blocks;
    }
    scope[block.id]=block;
  }
  var newBlock=$('<div class="block '+block.stretch+' '+block.layout+'" data-id="'+block.id+'"></div>');
  if (block.width){
    newBlock.css('width',block.width+'px');
  }
  if (block.height){
    newBlock.css('height',block.height+'px');
  }
  highlighted.append(newBlock);
}
function genBlockHtml(oBlock, tabulation){
  var res='';
  tabulation=tabulation||1;
  var tab=new Array(tabulation).join('  ');
  for (var b in oBlock){
    var block=oBlock[b];
    res+=tab+'<div class="block '+block.stretch+' '+block.layout+'" data-id="'+block.id+'">\n';
    if (Object.keys(block.blocks).length>0){
      res+=genBlockHtml(block.blocks, tabulation+1);
    }
    res+=tab+'</div>\n'
  }
  return res;
}
$('#gen-html').on('click',function(){
    $('#resultHtml').val(genBlockHtml(page));
});

$('#show_spacing').on('click',function(){
  if (this.checked){
    $('#viewport').addClass('show-spacing');
  } else {
    $('#viewport').removeClass('show-spacing');
  }
});
$('#show_borders').on('click',function(){
  if (this.checked){
    $('#viewport').addClass('show-borders');
  } else {
    $('#viewport').removeClass('show-borders');
  }
});
$(document).on('click','.block',function(e){
  e.stopPropagation();
  $('.block-highlight').removeClass('block-highlight');
  $(this).toggleClass('block-highlight');
  if ($('.block-highlight').length){
    $('#block-config').show();
  } else {
    $('#block-config').hide();
  }
});

$('#addBlockModal').find('form').submit(function(e){
  e.preventDefault();
  $('#addBlockModal').modal('hide');
  var block={
    id:$(this).find('#modal-block_id').val(),
    width:$(this).find('#modal-width').val(),
    height:$(this).find('#modal-height').val(),
    stretch:$(this).find('#modal-stretch').val(),
    layout:$(this).find('input:radio[name="layout"]:checked').val(),
    blocks:{}
  };
  addBlock(block);
});

$('#add-block').on('click',function onAddBlockClick(){
  $('#modal-block_id').val('layout-'+idx);
  $('#modal-width').val('');
  $('#modal-height').val('');
  $('#modal-stretch').val('stretch-1');
  idx++;
  $('#addBlockModal').modal({});
});
  */