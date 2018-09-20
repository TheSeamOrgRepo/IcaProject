require('../css/app.scss');

var uportButton = document.querySelector('.uport');
var emailButton = document.querySelector('.email');
var backButtonEmail = document.querySelector('#email--back');
var backButtonuPort = document.querySelector('#uport--back');
var mainWrapper = document.querySelectorAll('.section--login__main')[0]
var uportWrapper = document.querySelectorAll('.section--uport')[0]
var emailWrapper = document.querySelectorAll('.section--email')[0]

function toggleMainuPort(e) {
    mainWrapper.classList.toggle('active');
    uportWrapper.classList.toggle('active');
}

function toggleMainEmail(e) {
    mainWrapper.classList.toggle('active');
    emailWrapper.classList.toggle('active');
    document.forms[0].elements[0].focus();
}

function backToggleEmail(e) {
    console.log('click')
    mainWrapper.classList.remove('active');
    emailWrapper.classList.remove('active');
}

function backToggleuPort(e) {
    console.log('click')
    mainWrapper.classList.remove('active');
    uportWrapper.classList.remove('active');
}

uportButton.addEventListener('click', toggleMainuPort);
emailButton.addEventListener('click', toggleMainEmail);
backButtonEmail.addEventListener('click', backToggleEmail);
backButtonuPort.addEventListener('click', backToggleuPort);