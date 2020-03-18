$(document).ready(function () {


    if (window.innerWidth < 960) {

        $('#slider').slick({
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            arrows:false,
            adaptiveHeight: true

        });


        $(".prevSlide").on("click", function () {
            $('#slider').slick('slickPrev');
        });

        $(".nextSlide").on("click", function () {
            $('#slider').slick('slickNext');
        });

        $("#pagination span").on("click", function (e) {
            var el = parseInt($(e.currentTarget).text());
            $('#slider2').slick("slickGoTo", el);
            $("#pagination span").each(function (index, element) {
                $(element).removeClass("active")
            });
            $(e.currentTarget).addClass("active");


        });

    }



});

