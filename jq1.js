
$(document).ready(function(){
    $("#hide").click(function(){
        $("#div1").hide("slow");
    });
    $("#show").click(function(){
        $("#div1").show("slow");
        $("#div1").text("Show!");
    });
    
     $("#buttona").click(function(){
        $("#div2").animate({
            height: '+=150px',
            width: '+=150px',
            fontSize: '+=32px',
               });
         $("#div2 p").animate({
            height: '+=150px',
            width: '+=150px',
            fontSize: '+=32px',
               }); 
          $("#bigger").text("Bigger...");
    });
      $("#buttonb").click(function(){
        $("#div2").animate({
            height: '-=150px',
            width: '-=150px',
            fontSize: '-=32px',
          });
          $("#div2 p").animate({
            height: '-=150px',
            width: '-=150px',
            fontSize: '-=32px',
          });
          $("#bigger").text("Smaller...");
    });

});


