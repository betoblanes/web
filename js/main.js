$(function () {

    $('.galeria_trabajos').each(function () {
        $(this).isotope({
            itemSelector: '.trabajo',
            masonry: {
                gutter: 20
            }
        });
        var $container = $(this);
        $('.galeria_trabajos_filter').on('click', function () {
            var selector = $(this).data('filter');
            $('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
            $container.isotope({
                filter: selector
            });
        })
    })


    $(window).on('resize', function () {
        $('.footer-cols').equalHeights();
        $('.piedra').equalHeights();
        $('.acabado').equalHeights();
    });

    $('.footer-cols').equalHeights();
    $('.piedra').equalHeights();
    $('.acabado').equalHeights();

    $('#carousel-1').carousel({
        interval: 3000
    });

    var jcarousel = $('.jcarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 1024) {
                width = width / 4;
            } else if (width >= 512) {
                width = width / 2;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

});