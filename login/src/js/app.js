// Styles
require('../css/app.scss');

var activeAction = 'main';
var DOM = {
    login: document.querySelector('.login'),
    loginLeft: document.querySelector('.login__left'),
    loginRight: document.querySelector('.login__right'),
    actions: {
        main: document.querySelector('.login__actions--main'),
        email: document.querySelector('.login__actions--email'),
        uport: document.querySelector('.login__actions--uport')
    },
    trigger: document.querySelectorAll('[data-trigger]'),
    togglePassword: document.querySelector('[data-toggle-password]')
}

function clearActions() {
    DOM.actions[activeAction].classList.add('out');

    setTimeout(function() {
        for (var key in DOM.actions) {
            // Skip if from prototype
            if (!DOM.actions.hasOwnProperty(key)) continue;

            DOM.actions[key].classList.remove('is-active', 'out');
        }
    }, 500);
}


// -----


// Focus the email input
var $inputs = document.querySelectorAll('.login__actions--main .form-field__input');
$inputs[0].focus();

// Handle login section animations
DOM.trigger.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();

        var action = this.getAttribute('data-trigger');

        if ( activeAction !== action && action !== 'login' ) {
            // Enable/Disable full-screen panel
            DOM.loginLeft.classList.toggle('is-active', (action !== 'main') );

            // Remove the current actions
            clearActions();

            // Wait to make email active
            setTimeout(function() {
                DOM.actions[action].classList.add('is-active');

                // Special functionality depending on the action
                switch( action ) {
                    case 'email':
                        // Update email field
                        var email = document.querySelector('.login__actions--main .form-field__input').value;
                        var $inputs = document.querySelectorAll('.login__actions--email .form-field__input');

                        // Copy over email
                        $inputs[0].value = email;

                        // Focus on the password
                        setTimeout(function() {
                            $inputs[1].focus();
                        }, 250);
                        break;

                    case 'uport':
                        break;

                    case 'main':
                        var $inputs = document.querySelectorAll('.login__actions--main .form-field__input');

                        // Focus on the email
                        setTimeout(function() {
                            $inputs[0].focus();
                        }, 250);
                        break;
                }
            }, 500);

            activeAction = action;
        }

        if ( action == 'login' ) {
            DOM.loginLeft.classList.remove('is-active');
            DOM.login.classList.add('to-dashboard');
        }
    }, false);
});

// Show/hide password input
DOM.togglePassword.addEventListener('click', function() {
    var $input = document.querySelector('.form-field--password .form-field__input');
    var $icon = document.querySelector('.form-field--password .form-field__icon');

    if ($input.type === "password") {
        $input.type = "text";
        $icon.innerHTML = '<svg width="25" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M18.616 3.195l-1.112 1.113-8.915 8.914-2.306 2.306-2.714 2.714-.966-.965 2.511-2.51a12.788 12.788 0 0 1-3.91-4.665l-.328-.664.327-.663c2.13-4.318 6.508-7.11 11.384-7.11 1.652 0 3.246.32 4.716.912l2.27-2.27.966.965-1.923 1.923zm1.711 1.117a12.792 12.792 0 0 1 3.643 4.463l.327.663-.327.664c-2.129 4.318-6.507 7.11-11.383 7.11-1.526 0-3.003-.273-4.378-.781l1.184-1.184c1.012.302 2.084.465 3.194.465 4.398 0 8.204-2.555 10.038-6.274a11.32 11.32 0 0 0-3.369-4.055l1.071-1.07zm-4.19-.569a11.11 11.11 0 0 0-3.55-.578c-4.399 0-8.205 2.555-10.038 6.273.842 1.708 2.1 3.17 3.64 4.253l2.568-2.568a4.182 4.182 0 0 1 5.514-5.514l1.866-1.866zm.41 4.35A4.182 4.182 0 0 1 11.24 13.4l5.308-5.308z" fill="none" fill-rule="nonzero"/></svg>';
    } else {
        $input.type = "password";
        $icon.innerHTML = '<svg width="25" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M1.117 7.337C3.246 3.019 7.624.227 12.5.227c4.876 0 9.254 2.792 11.383 7.11L24.21 8l-.327.663c-2.129 4.318-6.507 7.11-11.383 7.11-4.876 0-9.254-2.792-11.383-7.11L.79 8l.327-.663zM2.462 8c1.833 3.718 5.64 6.274 10.038 6.274 4.398 0 8.205-2.556 10.038-6.274-1.833-3.718-5.64-6.274-10.038-6.274C8.102 1.726 4.295 4.282 2.462 8zM12.5 12.182a4.182 4.182 0 1 1 0-8.364 4.182 4.182 0 0 1 0 8.364zm0-2.509a1.673 1.673 0 1 0 0-3.346 1.673 1.673 0 0 0 0 3.346z" fill="none" fill-rule="nonzero"/></svg>';
    }
}, false);
