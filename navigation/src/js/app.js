require('../css/app.css');

$(document).ready(function () {
    $('.logo-wrapper').on('click', function () {
        $("ul.navigation li a.active-item").removeClass("active-item");
        $('nav').removeClass('active');
    });
    $('ul.navigation li a').on('click', function () {
        $('nav').addClass('active');
        $("ul.navigation li a.active-item").removeClass("active-item");
        $(this).addClass("active-item");
    });

    var timer;
    var delay = 100;
    $('ul.navigation').hover(
        function () {
            timer = setTimeout(function () {
                if ($('nav').hasClass('active')) {
                    $('nav').removeClass('active');
                }
            }, delay);
        },
        function () {
            clearTimeout(timer);
            if (!$('nav').hasClass('active') && $("ul.navigation li a.active-item").hasClass('active-item')) {
                $('nav').addClass('active');
            }
        });
});