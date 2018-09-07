require('../css/app.css');

document.addEventListener('DOMContentLoaded', function () {
    var logoWrapper = document.querySelector('.logo-wrapper');
    var navLink = document.getElementsByClassName('nav-link');
    var navMenu = document.getElementsByClassName('navigation');
    var activeNavItem = document.getElementsByClassName('active-item');
    var sideBar = document.querySelector('#sidebar');
    var sideBarToggle = document.querySelector('#nav-toggle');
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

    function toggleNav() {
        sideBar.classList.toggle('active');
        sideBarToggle.classList.toggle('active');
    }
    
    sideBarToggle.addEventListener('click', toggleNav);
});