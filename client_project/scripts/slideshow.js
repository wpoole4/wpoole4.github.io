$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 300,
        slideMargin: 20,
        randomStart: true,
        movdeSlides: 1,
        pause: 3000,
        pagerType: 'short',
        pagerSelector: '#id_pager',
        pager: true,
        captions: true

    });
});