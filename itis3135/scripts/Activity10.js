$(document).ready(function() {


    // preload the image for each link
    $("#image_list a").each(function() {


    
    // set up the event handlers for each link
    let imgCaption = $(this).attr("title");
    let images = new Image();
    images.src = $(this).attr("href");
       });
       $("#image_list a").click(function(event) {
           let imgUrl = $(this).attr("href");

           $("#image").fadeOut(500, function() {
               $("#image").attr("src", imgUrl).fadeIn(500);
           });
           $("#caption").fadeout(500, function(){
               $("#caption").text(imgCaption).fadeIn(500);
           });

           // cancel the default action of each link
           event.preventDefault();
       });
// move the focus to the first link
$("li:first-child a").focus();
}); // end ready


//SOURCES USED: Textbook AND W3Schools