require('../css/app.css');

document.addEventListener('DOMContentLoaded', function () {
    var logoWrapper = document.querySelector('.logo-wrapper');
    var navLink = document.getElementsByClassName('nav-link');
    var navMenu = document.getElementsByClassName('navigation');
    var activeNavItem = document.getElementsByClassName('active-item');
    var sideBar = document.querySelector('#sidebar');
    var accountDrawer = document.querySelector('#account-drawer');
    var accountInfo = document.querySelector('#account-info');
    var timer;
    var delay = 250;

    //Retun to open state when returning to main dashboard
    logoWrapper.addEventListener('click', function () {
        for (var i = 0; i < activeNavItem.length; i++) {
            activeNavItem[i].classList.remove('active-item');
        }
    });

    //Remove active-item from old link and add active-item class to current link and collapse sidebar
    [].forEach.call(navLink, function (el) {
        el.addEventListener('click', function () {
            for (var i = 0; i < activeNavItem.length; i++) {
                activeNavItem[i].classList.remove('active-item');
            }
            el.classList.add('active-item')
        })
    })

    //Reveals sidebar on hover
    function toggleAccountDrawer() {
        if (!sideBar.classList.contains('active')) {
            var that = this;
            timer = setTimeout(function () {
                sideBar.classList.toggle('active');
            }, delay);
        }
    }

    //Resets the settimeout from the mouseenter event and will return the menu to the
    //collapsed position if there is an active-item link
    function toggleAccountDrawerReset() {
        clearTimeout(timer)
        if (sideBar.classList.contains('active')) {
            sideBar.classList.remove('active')
        }
    };

    //Add eventlisteners to sidebar for hover-on and hover-off events
    sideBar.addEventListener('mouseenter', toggleAccountDrawer)
    sideBar.addEventListener('mouseleave', toggleAccountDrawerReset)

});