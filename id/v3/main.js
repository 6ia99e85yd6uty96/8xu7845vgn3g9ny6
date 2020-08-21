$(function () {
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    centerMode: false
                }
            },
        ]
    });

    if ($('.slider .slide').length <= 3) {
        $('.sliderArrows').css('display', 'none');
    }

    $('.arrRight').on('click', function () {
        $('.slider').slick('slickNext');
    });

    $('.arrLeft').on('click', function () {
        $('.slider').slick('slickPrev');
    });

    $('.section1 .menu .item a').on('click', function (e) {
        e.preventDefault();

        var data = $(e.currentTarget).data('scroll');
        var $el = $(data);
        $('html, body').animate({ scrollTop: $el.offset().top }, 500);
    })
});