require('../css/app.scss');

var activeAction = 'main';
var DOM = {
    loginPanel: document.querySelector('.login__left'),
    actions: {
        main: document.querySelector('.login__actions--main'),
        email: document.querySelector('.login__actions--email'),
        uport: document.querySelector('.login__actions--uport')
    },
    trigger: document.querySelectorAll('[data-trigger]')
}

function clearActions() {
    DOM.actions[activeAction].classList.add('out');

    setTimeout(function() {
        for (var key in DOM.actions) {
            // Skip if from prototype
            if (!DOM.actions.hasOwnProperty(key)) continue;

            DOM.actions[key].classList.remove('is-active', 'out');
        }

        // DOM.actions.forEach(function(el) {
        //     el.classList.remove('is-active', 'out');
        // });
    }, 500);
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

            // Decide how long to wait
            // var delay = 0;
            // switch( action ) {
            //     case 'email':
            //         delay = 500;
            //         break;
            //     case 'uport':
            //         delay = 500;
            //         break;
            //     case 'main':
            //         delay = 500;
            //         break;
            // }

            // Wait to make email active
            setTimeout(function() {
                DOM.actions[action].classList.add('is-active');
            }, 500);

            // console.log({ activeAction, action });

            activeAction = action;
        }
    });
});
