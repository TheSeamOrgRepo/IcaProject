document.addEventListener('DOMContentLoaded', function () {
    var logoWrapper = document.getElementsByClassName('logo-wrapper')[0];
    var navLink = document.getElementsByClassName('nav-link');
    var navMenu = document.getElementsByClassName('navigation');
    var activeNavItem = document.getElementsByClassName('active-item');
    var sideBar = document.querySelectorAll('nav')[0];
    var timer;
    var delay = 100;

    //Retun to open state when returning to main dashboard
    logoWrapper.addEventListener('click', function () {
        for (var i = 0; i < activeNavItem.length; i++) {
            activeNavItem[i].classList.remove('active-item');
        }
        sideBar.classList.remove('active');
    });

    //Add active-item class to current link and collapse sidebar
    [].forEach.call(navLink, function (el) {
        el.addEventListener('click', function () {
            sideBar.classList.add('active')
            for (var i = 0; i < activeNavItem.length; i++) {
                activeNavItem[i].classList.remove('active-item');
            }
            el.classList.add('active-item')
        })
    })

    //Reveals sidebar on hover
    function toggleNav() {
        if (sideBar.classList.contains('active')) {
            var that = this;
            timer = setTimeout(function () {
                that.classList.toggle('active');
            }, delay);
        }
    }

    //Resets the settimeout from the mouseenter event and will return the menu to the
    //collapsed position if there is an active-item link
    function toggleNavReset() {
        clearTimeout(timer)
        if (!sideBar.classList.contains('active') && activeNavItem.length > 0) {
            sideBar.classList.add('active')
        }
    };

    //Add eventlisteners to sidebar for hover-on and hover-off events
    sideBar.addEventListener('mouseenter', toggleNav)
    sideBar.addEventListener('mouseleave', toggleNavReset)

});