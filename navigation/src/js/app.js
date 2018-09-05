require('../css/app.css');

$(document).ready(function () {
    $('.nav-toggle').on('click', function () {
        $('nav').toggleClass('active');
    });
    $('ul.navigation li a').on('click', function () {
        $('nav').addClass('active');
        $("ul.navigation li a.active-item").removeClass("active-item");
        console.log($(this))
        $(this).addClass("active-item");
    })
});