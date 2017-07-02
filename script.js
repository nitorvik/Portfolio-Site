// ------------------------------
//  Credit to Matt Litherland 
//  CodePen @mattsince87
//  https://twitter.com/mattsince87
// ------------------------------
function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 50
    }, 600); //set to 50px to offset navbar height - default is 50px, also messed with timing of scroll
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

