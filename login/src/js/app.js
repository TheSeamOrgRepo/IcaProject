require('../css/app.scss');

var activeAction = 'main';
var DOM = {
    loginPanel: document.querySelector('.login__left'),
    actionsMain: document.querySelector('.login__actions--main'),
    actionsEmail: document.querySelector('.login__actions--email'),
    actionsUport: document.querySelector('.login__actions--uport'),
    trigger: document.querySelectorAll('[data-trigger]')
}

function clearActions() {
    DOM.actionsMain.classList.remove('is-active');
    DOM.actionsEmail.classList.remove('is-active');
    DOM.actionsUport.classList.remove('is-active');
}

DOM.trigger.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();

        var action = this.getAttribute('data-trigger');

        if ( activeAction !== action ) {
            // Enable/Disable full-screen panel
            DOM.loginPanel.classList.toggle('is-active', (action !== 'main') );

            // Remove the current actions
            clearActions();

            // Decide what actions to show and how long to wait
            var $actions;
            var delay = 0;
            switch( action ) {
                case 'email':
                    $actions = DOM.actionsEmail;
                    // delay = 1000;
                    break;
                case 'uport':
                    $actions = DOM.actionsUport;
                    // delay = 500;
                    break;
                case 'main':
                    $actions = DOM.actionsMain;
                    // delay = 800;
                    break;
            }

            // Wait to make email active
            setTimeout(function() {
                $actions.classList.add('is-active');
            }, delay);

            console.log({ action, $actions, delay });
        }

        activeAction = action;
    });
});
