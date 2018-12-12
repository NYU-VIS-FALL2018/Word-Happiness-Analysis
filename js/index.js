$(document).ready(function(){
  $('input[type="radio"]').click(function() {



    // $('html, body').animate({
    //     scrollTop: $("#show-happy").offset().top
    // }, 2000);

    if($(this).attr('id') == 'happy') {
         $('#show-happy').show();
         $('#happy-graph').show();
         $('#show-angry').hide();
         $('#show-normal').hide();
         $('#sad-graph').hide();
         // $('#graph1').show();
         // $('#graph2').hide();
         $('#happy-controls').show();
         $('#sad-controls').hide();

         // $("#show-happy").scrollIntoView(true);
         var elmnt = document.getElementById("happy-controls");
         elmnt.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
          // $('#graph1').hide();
          // $('#graph2').show();
          $('#sad-controls').show();
          $('#happy-controls').hide();
          // $("#show-angry").scrollIntoView(true);
          var elmnt2 = document.getElementById("sad-controls");
          elmnt2.scrollIntoView({ behavior: 'smooth', block: 'end' });
     }


});
});
