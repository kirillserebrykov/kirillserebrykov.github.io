$(document).ready(function () {
    $('#slider1').slick({
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        adaptiveHeight: false

    });

    $('#slider2').slick({
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        adaptiveHeight: true

    });

    var pack = 30;
    var timerId = setInterval(function() {
        pack--;
        $('.pack_value').html(pack);
    }, 30000);

    setTimeout(function() {
        clearInterval(timerId);
    }, 150000);

});

