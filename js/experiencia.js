 $(function(){

   $("#titulo_datos1").click(function(){
      if ($('.titulo_datos1').is(':visible')) {
          $('.titulo_datos1').hide();
          console.log('hide')
      }
   });

   $("#titulo_datos2").click(function(){
      if ($('.titulo_datos2').is(':visible')) {
          $('.titulo_datos2').hide();
          console.log('hide')
      }
   });

   $("#titulo_datos3").click(function(){
      if ($('.titulo_datos3').is(':visible')) {
          $('.titulo_datos3').hide();
          console.log('hide')
      }
   });

   $("#titulo_datos4").click(function(){
      if ($('.titulo_datos4').is(':visible')) {
          $('.titulo_datos4').hide();
          console.log('hide')
      }
   });

   $("#titulo_datos5").click(function(){
      if ($('.titulo_datos5').is(':visible')) {
          $('.titulo_datos5').hide();
          console.log('hide')
      }
   });


   $("#work1").hover(function() {
            $('.work1').show(1);
        
        $("#titulo_datos_exp").css("opacity", "0.0");
        $(".work2").hide(0);
        $(".work3").hide(0);
        $(".work4").hide(0);
        $(".work5").hide(0);
  });

  $("#work2").hover(function() {
            $('.work2').show(1);

        $("#titulo_datos_exp").css("opacity", "0.0");
        $(".work1").hide(0);
        $(".work3").hide(0);
        $(".work4").hide(0);
        $(".work5").hide(0);
  });

  $("#work3").hover(function() {
            $('.work3').show(1);

        $("#titulo_datos_exp").css("opacity", "0.0");
        $(".work1").hide(0);
        $(".work2").hide(0);
        $(".work4").hide(0);
        $(".work5").hide(0);
  });


  $("#work4").hover(function() {
            $('.work4').show(1);
    
        $("#titulo_datos_exp").css("opacity", "0.0");
        $(".work1").hide(0);
        $(".work2").hide(0);
        $(".work3").hide(0);
        $(".work5").hide(0);
  });

  $("#work5").hover(function() {
            $('.work5').show(1);
    
        $("#titulo_datos_exp").css("opacity", "0.0");
        $(".work1").hide(0);
        $(".work2").hide(0);
        $(".work3").hide(0);
        $(".work4").hide(0);
  });


});