// Styles
require('../css/app.scss');

import Select from './select.js';
import flatpickr from './flatpickr.js';

(function(global) {
    var theseam = {
        // Initialize everything
        init: function() {
            var self = this;
            var main = document.querySelector('main');

            // Login
            if ( main.classList.contains('login') ) self.login.init();

            // Dashboard
            if ( main.classList.contains('dashboard') ) {
                self.navigation.init();
                self.dashboard.init();
            }
        },

        // Navigation
        navigation: {
            $dom: {
                logoWrapper: document.querySelector('.logo-wrapper'),
                navLink: document.querySelectorAll('.nav-link'),
                activeNavItem: document.querySelectorAll('.nav-link.is-active'),
                mainNav: document.querySelector('.main-navigation'),
                mainNavToggle: document.querySelector('.nav-toggle'),
                accountDrawer: document.querySelector('.block--account-info'),
                accountInfo: document.querySelector('.block--account-info__drawer')
            },

            init: function() {
                var self = this;
                self.events();
            },

            events: function() {
                var self = this;

                // Return to open state when returning to main dashboard
                self.$dom.logoWrapper.addEventListener('click', function() {
                    self.$dom.activeNavItem = document.querySelectorAll('.nav-link.is-active');
                    for (var i = 0; i < self.$dom.activeNavItem.length; i++) {
                        self.$dom.activeNavItem[i].classList.remove('is-active');
                    }
                });

                // Toggle account drawer
                self.$dom.accountDrawer.addEventListener('click', function() {
                    self.$dom.accountInfo.classList.toggle('is-active');
                });

                //Remove is-active from old link and add is-active class to current link and collapse mainNav
                [].forEach.call(self.$dom.navLink, function(el) {
                    el.addEventListener('click', function() {
                        self.$dom.activeNavItem = document.querySelectorAll('.nav-link.is-active');
                        for (var i = 0; i < self.$dom.activeNavItem.length; i++) {
                            self.$dom.activeNavItem[i].classList.remove('is-active');
                        }
                        el.classList.add('is-active')
                    })
                })

                self.$dom.mainNavToggle.addEventListener('click', function() {
                    document.documentElement.classList.toggle('is-small-nav');
                    self.$dom.mainNav.classList.toggle('is-active');
                    self.$dom.mainNavToggle.classList.toggle('is-active');
                });
            }
        },

        // Login
        login: {
            activeAction: 'main',
            $dom: {
                login: document.querySelector('.login'),
                loginLeft: document.querySelector('.login__left'),
                loginRight: document.querySelector('.login__right'),
                actions: {
                    main: document.querySelector('.login__actions--main'),
                    mainInput: document.querySelector('.login__actions--main .form-field__input'),
                    email: document.querySelector('.login__actions--email'),
                    uport: document.querySelector('.login__actions--uport')
                },
                trigger: document.querySelectorAll('[data-trigger]'),
                togglePassword: document.querySelector('[data-toggle-password]')
            },

            // Animate elements when they are in view
            init: function() {
                var self = this;
                self.events();

                // Focus the main email input
                self.$dom.actions.mainInput.focus();
            },

            events: function() {
                var self = this;

                // Handle enter on email input
                var $emailInput = self.$dom.actions.main.querySelector('.form-field__input');
                $emailInput.addEventListener('keypress', function(e) {
                    if ( e.which == 13 ) {
                        $emailInput.nextElementSibling.click();
                    }
                }, false);

                // Handle toggling email field
                var $emailHeading = self.$dom.actions.email.querySelector('.action__heading');
                $emailHeading.addEventListener('click', function(e) {
                    self.$dom.actions.email.classList.add('is-editing');
                    self.$dom.actions.email.querySelector('.form-field__input').focus();
                }, false);

                // Handle login section animations
                self.$dom.trigger.forEach(function(el) {
                    el.addEventListener('click', function(e) {
                        e.preventDefault();

                        var action = this.getAttribute('data-trigger');

                        if ( self.activeAction !== action && action !== 'login' ) {
                            // Enable/Disable full-screen panel
                            self.$dom.loginLeft.classList.toggle('is-active', (action !== 'main') );

                            // Enable/Disable email styles
                            self.$dom.loginLeft.classList.toggle('is-email', (action == 'email') );

                            // Enable/Disable uPort styles
                            self.$dom.loginLeft.classList.toggle('is-uport', (action == 'uport') );

                            // Remove the current actions
                            self.clearActions();

                            // Wait to make email active
                            setTimeout(function() {
                                self.$dom.actions[action].classList.add('is-active');

                                // Special functionality depending on the action
                                switch( action ) {
                                    case 'email':
                                        // Update email field
                                        var email = document.querySelector('.login__actions--main .form-field__input').value;
                                        var $inputs = document.querySelectorAll('.login__actions--email .form-field__input');
                                        var $headingEmail = self.$dom.actions.email.querySelector('.action__heading .email');

                                        // Change email action layout
                                        if ( self.activeAction == 'main' ) {
                                            self.$dom.actions.email.classList.remove('is-editing');

                                            // Focus on the password
                                            setTimeout(function() {
                                                $inputs[1].focus();
                                            }, 500);
                                        } else {
                                            self.$dom.actions.email.classList.add('is-editing');

                                            // Focus on the email
                                            setTimeout(function() {
                                                $inputs[0].focus();
                                            }, 500);
                                        }

                                        // Copy over email
                                        $inputs[0].value = email;
                                        $headingEmail.innerHTML = email;

                                        break;

                                    case 'uport':
                                        // Nothing
                                        break;

                                    case 'main':
                                        var $inputs = document.querySelectorAll('.login__actions--main .form-field__input');

                                        // Focus on the email
                                        setTimeout(function() {
                                            self.$dom.actions.mainInput.focus();
                                        }, 500);

                                        break;
                                }

                                self.activeAction = action;
                            }, 500);
                        }

                        if ( action == 'login' ) {
                            self.$dom.loginLeft.classList.remove('is-active');
                            self.$dom.login.classList.add('to-dashboard');
                            setTimeout(function() {
                                window.location = 'dashboard.html';
                            }, 1100);
                        }
                    }, false);
                });

                // Show/hide password input
                self.$dom.togglePassword.addEventListener('click', function() {
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
            },

            clearActions: function() {
                var self = this;

                self.$dom.actions[self.activeAction].classList.add('out');

                setTimeout(function() {
                    for (var key in self.$dom.actions) {
                        // Skip if from prototype
                        if (!self.$dom.actions.hasOwnProperty(key)) continue;

                        self.$dom.actions[key].classList.remove('is-active', 'out');
                    }
                }, 500);
            }
        },

        dashboard: {
            $dom: {
                dashboard: document.querySelector('.dashboard'),
                dropdownBtns: document.querySelectorAll('.btn--dropdown'),
                tabs: {
                    triggers: document.querySelectorAll('[data-tab-trigger]'),
                    items: document.querySelectorAll('[data-tab-item]')
                },
                tables: {
                    dots: document.querySelectorAll('.actions__dots')
                },
                modals: {
                    triggers: document.querySelectorAll('[data-modal]'),
                    items: document.querySelectorAll('.modal')
                },
                selects: document.querySelectorAll('select'),
                dates: document.querySelectorAll('.form-field__date'),
                sidebar: {
                    currentPanel: 1,
                    panels: document.querySelectorAll('.contract-new__sidebar-panel'),
                    prev: document.querySelector('[data-prev-sidebar-panel]'),
                    next: document.querySelector('[data-next-sidebar-panel]')
                },
            },

            init: function() {
                var self = this;

                // Dropdown Buttons
                if ( self.$dom.dropdownBtns.length ) self.dropdownButtons();

                // Tabs
                if ( self.$dom.tabs.items.length ) self.tabs();

                // Tables
                if ( self.$dom.tables.dots.length ) self.tables();

                // Modals
                if ( self.$dom.modals.items.length ) self.modals();

                // Selects
                if ( self.$dom.selects.length ) self.selects();

                // Dates
                if ( self.$dom.dates.length ) self.dates();

                // Sidebar Panels
                if ( self.$dom.sidebar.panels.length ) self.sidebarPanels();
            },

            dropdownButtons: function() {
                var self = this;

                self.$dom.dropdownBtns.forEach(function(el) {
                    el.addEventListener('click', function(e) {
                        // e.preventDefault();
                        this.classList.toggle('is-active');
                    });

                    document.addEventListener('click', function(e) {
                        // Dropdown isn't active
                        if (!el.classList.contains('is-active')) return;

                        // Clicking inside dropdown
                        var dropdown = el.querySelector('.dropdown');
                        if (e.target === dropdown || dropdown.contains(e.target)) return;

                        // Clicking target
                        if (e.target === el.target || el.contains(e.target)) return;

                        // Close the dropdown
                        el.classList.remove('is-active');
                    });
                });
            },

            tabs: function() {
                var self = this;

                self.$dom.tabs.triggers.forEach(function(el) {
                    el.addEventListener('click', function(e) {
                        e.preventDefault();
                        // Remove active class from buttons
                        self.$dom.tabs.triggers.forEach(function(el) {
                            el.classList.remove('is-active');
                        });

                        // Add the correct active class
                        el.classList.add('is-active');

                        // Hide all tab items
                        self.$dom.tabs.items.forEach(function(el) {
                            el.classList.remove('is-active');
                        });

                        // Show all clicked tabs
                        var tab = el.getAttribute('data-tab-trigger');
                        var $tabItems = document.querySelectorAll(`[data-tab-item="${tab}"]`);
                        $tabItems.forEach(function(el) {
                            el.classList.add('is-active');
                        });
                    });
                });
            },

            tables: function() {
                var self = this;

                self.$dom.tables.dots.forEach(function(el) {
                    el.addEventListener('click', function(e) {
                        e.preventDefault();

                        // Check if current active dots
                        if ( ! this.classList.contains('is-active') ) {
                            // Remove current active states
                            self.$dom.tables.dots.forEach(function(el) {
                                el.classList.remove('is-active');
                            });
                        }

                        // Set active state
                        this.classList.toggle('is-active');
                    });
                });
            },

            modals: function() {
                var self = this;

                function closeModals() {
                    // Hide all modal items
                    self.$dom.modals.items.forEach(function(el) {
                        el.classList.remove('is-active');
                    });
                }

                // Handle opening modals
                self.$dom.modals.triggers.forEach(function(el) {
                    el.addEventListener('click', function(e) {
                        e.preventDefault();

                        // Hide all modal items
                        closeModals();

                        // Show clicked modal
                        var modal = el.getAttribute('data-modal');
                        document.getElementById(`modal-${modal}`).classList.add('is-active');
                    });
                });

                // Handle modal close buttons
                document.querySelectorAll('[data-modal-close]').forEach(function(el) {
                    el.addEventListener('click', function(e) {
                        e.preventDefault();
                        closeModals();
                    });
                });

                // Handle closing modal by clicking outside
                self.$dom.modals.items.forEach(function(el) {
                    el.addEventListener('click', function(e) {
                        if ( e.target.classList.contains('modal') ) {
                            closeModals();
                        }
                    });
                });

                // Handle closing modal with "esc" key
                document.body.addEventListener('keyup', function(e) {
                    if (e.keyCode === 27) {
                        closeModals();
                    }
                });
            },

            selects: function() {
                var self = this;

                // Init select elements
                self.$dom.selects.forEach(function(el) {
                    var select = new Select({
                        el: el
                    });
                });
            },

            dates: function() {
                flatpickr('.form-field__date--single', {
                    altInput: true,
                    altFormat: 'm/d/Y',
                    dateFormat: 'Y-m-d',
                });

                flatpickr('.form-field__date--range', {
                    mode: 'range',
                    altInput: true,
                    altFormat: 'm/d/Y',
                    dateFormat: 'Y-m-d',
                });
            },

            sidebarPanels: function() {
                var self = this;

                var panelCount = self.$dom.sidebar.panels.length;

                // Activate the first panel
                document.querySelector('[data-sidebar-panel="1"]').classList.add('is-active');

                // Handle navigating the panels
                // Previous panel
                self.$dom.sidebar.prev.addEventListener('click', function() {
                    var current = self.$dom.sidebar.currentPanel;

                    self.unfocusAll();

                    // Return if on first panel
                    if ( current <= 1 ) return;

                    // Update next text
                    self.$dom.sidebar.next.innerHTML = ( current - 1 <= panelCount ) ? 'Next' : 'Finish';

                    // Swap active panel
                    document.querySelector(`[data-sidebar-panel="${current}"]`).classList.remove('is-active');
                    document.querySelector(`[data-sidebar-panel="${--current}"]`).classList.add('is-active');

                    self.scrollToTop();

                    // Update current panel
                    self.$dom.sidebar.currentPanel--;
                });

                // Next panel
                self.$dom.sidebar.next.addEventListener('click', function() {
                    var current = self.$dom.sidebar.currentPanel;

                    self.unfocusAll();

                    // Return if on last panel
                    if ( current >= panelCount ) {
                        document.querySelector('.modal--contract-complete').classList.add('is-active');
                        return;
                    }

                    // Update next text
                    self.$dom.sidebar.next.innerHTML = ( current >= panelCount - 1 ) ? 'Finish' : 'Next';

                    // Swap active panel
                    document.querySelector(`[data-sidebar-panel="${current}"]`).classList.remove('is-active');
                    document.querySelector(`[data-sidebar-panel="${++current}"]`).classList.add('is-active');

                    self.scrollToTop();

                    // Update current panel
                    self.$dom.sidebar.currentPanel++;
                });
            },

            unfocusAll: function() {
                var body = document.body;
                var tmp = document.createElement('input');
                body.appendChild(tmp);
                tmp.focus();
                body.removeChild(tmp);
            },

            scrollToTop: function() {
                // document.body.scrollTop = 0;
                // document.documentElement.scrollTop = 0;

                window.scrollTo(0, 0);

                // var scroll = new SmoothScroll();
                // var body = document.getElementsByTagName('body')[0];
                // scroll.animateScroll(
                //     body,
                //     {
                //         speed: 1000,
                //         easing: 'easeInOutCubic'
                //     }
                // );
            }
        }
    }

    // Add window object
    global.theseam = theseam;

    // Run it
    theseam.init();
})(window);
