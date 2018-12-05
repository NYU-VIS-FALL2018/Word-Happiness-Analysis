$(document).ready(function(){
  $('input[type="radio"]').click(function() {
    if($(this).attr('id') == 'happy') {
         $('#show-happy').show();
         $('#happy-graph').show();
         $('#show-angry').hide();
         $('#show-normal').hide();
         $('#sad-graph').hide();
         $('#graph1').show();
         $('#graph2').hide();

    }

    if($(this).attr('id') == 'normal') {
     $('#show-normal').show();
     $('#show-happy').hide();
     $('#show-angry').hide();
     }

     if($(this).attr('id') == 'angry') {
          $('#show-angry').show();
          $('#show-happy').hide();
          $('#show-normal').hide();
          $('#happy-graph').hide();
          $('#sad-graph').show();
          $('#graph1').hide();
          $('#graph2').show();
     }


});
});
