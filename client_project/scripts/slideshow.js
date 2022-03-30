$(document).ready(function() {
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;
    // start slide show
    setInterval(
        function() {
            $("#slide").fadeOut(1000,
                function() {
                    if (nextSlide.next().length == 0) {
                        nextSlide = $("#slides img:first-child");
                    }
                    else {
                        nextSlide = nextSlide.next();
                    }
                    nextSlideSource = nextSlide.attr("src");
                    nextCaption = nextSlide.attr("alt");
                    $("#slide").attr("src",nextSlideSource).fadeIn(1000);
                })
        },
    3000);
})

//start slide show
var timer1 = setInterval(runSlideShow, 7000);

//starting and stopping the slideshow

$("#slide").toggle(
    function() {
        clearInterval(timer1);
    },
    function() {
        timer1 = setInterval(runSlideShow, 7000);
    }
)