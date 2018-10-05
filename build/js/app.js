(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=1)})([function(){},function(a,b,c){'use strict';c(0),function(a){var b={init:function(){var a=this,b=document.querySelector('main');b.classList.contains('login')&&a.login.init(),b.classList.contains('dashboard')&&(a.navigation.init(),a.dashboard.init())},navigation:{$dom:{logoWrapper:document.querySelector('.logo-wrapper'),navLink:document.querySelectorAll('.nav-link'),activeNavItem:document.querySelectorAll('.nav-link.is-active'),mainNav:document.querySelector('.main-navigation'),mainNavToggle:document.querySelector('.nav-toggle'),accountDrawer:document.querySelector('.block--account-info'),accountInfo:document.querySelector('.block--account-info__drawer')},init:function(){var a=this;a.events()},events:function(){var a=this;a.$dom.logoWrapper.addEventListener('click',function(){a.$dom.activeNavItem=document.querySelectorAll('.nav-link.is-active');for(var b=0;b<a.$dom.activeNavItem.length;b++)a.$dom.activeNavItem[b].classList.remove('is-active')}),a.$dom.accountDrawer.addEventListener('click',function(){a.$dom.accountInfo.classList.toggle('is-active')}),[].forEach.call(a.$dom.navLink,function(b){b.addEventListener('click',function(){a.$dom.activeNavItem=document.querySelectorAll('.nav-link.is-active');for(var c=0;c<a.$dom.activeNavItem.length;c++)a.$dom.activeNavItem[c].classList.remove('is-active');b.classList.add('is-active')})}),a.$dom.mainNavToggle.addEventListener('click',function(){document.documentElement.classList.toggle('is-small-nav'),a.$dom.mainNav.classList.toggle('is-active'),a.$dom.mainNavToggle.classList.toggle('is-active')})}},login:{activeAction:'main',$dom:{login:document.querySelector('.login'),loginLeft:document.querySelector('.login__left'),loginRight:document.querySelector('.login__right'),actions:{main:document.querySelector('.login__actions--main'),mainInput:document.querySelector('.login__actions--main .form-field__input'),email:document.querySelector('.login__actions--email'),uport:document.querySelector('.login__actions--uport')},trigger:document.querySelectorAll('[data-trigger]'),togglePassword:document.querySelector('[data-toggle-password]')},init:function(){var a=this;a.events(),a.$dom.actions.mainInput.focus()},events:function(){var a=this,b=a.$dom.actions.main.querySelector('.form-field__input');b.addEventListener('keypress',function(a){13==a.which&&b.nextElementSibling.click()},!1);var c=a.$dom.actions.email.querySelector('.action__heading');c.addEventListener('click',function(){a.$dom.actions.email.classList.add('is-editing'),a.$dom.actions.email.querySelector('.form-field__input').focus()},!1),a.$dom.trigger.forEach(function(b){b.addEventListener('click',function(b){b.preventDefault();var c=this.getAttribute('data-trigger');a.activeAction!==c&&'login'!==c&&(a.$dom.loginLeft.classList.toggle('is-active','main'!==c),a.$dom.loginLeft.classList.toggle('is-email','email'==c),a.$dom.loginLeft.classList.toggle('is-uport','uport'==c),a.clearActions(),setTimeout(function(){switch(a.$dom.actions[c].classList.add('is-active'),c){case'email':var b=document.querySelector('.login__actions--main .form-field__input').value,d=document.querySelectorAll('.login__actions--email .form-field__input'),e=a.$dom.actions.email.querySelector('.action__heading .email');'main'==a.activeAction?(a.$dom.actions.email.classList.remove('is-editing'),setTimeout(function(){d[1].focus()},500)):(a.$dom.actions.email.classList.add('is-editing'),setTimeout(function(){d[0].focus()},500)),d[0].value=b,e.innerHTML=b;break;case'uport':break;case'main':var d=document.querySelectorAll('.login__actions--main .form-field__input');setTimeout(function(){a.$dom.actions.mainInput.focus()},500);}a.activeAction=c},500)),'login'==c&&(a.$dom.loginLeft.classList.remove('is-active'),a.$dom.login.classList.add('to-dashboard'),setTimeout(function(){window.location='dashboard.html'},1100))},!1)}),a.$dom.togglePassword.addEventListener('click',function(){var a=document.querySelector('.form-field--password .form-field__input'),b=document.querySelector('.form-field--password .form-field__icon');'password'===a.type?(a.type='text',b.innerHTML='<svg width="25" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M18.616 3.195l-1.112 1.113-8.915 8.914-2.306 2.306-2.714 2.714-.966-.965 2.511-2.51a12.788 12.788 0 0 1-3.91-4.665l-.328-.664.327-.663c2.13-4.318 6.508-7.11 11.384-7.11 1.652 0 3.246.32 4.716.912l2.27-2.27.966.965-1.923 1.923zm1.711 1.117a12.792 12.792 0 0 1 3.643 4.463l.327.663-.327.664c-2.129 4.318-6.507 7.11-11.383 7.11-1.526 0-3.003-.273-4.378-.781l1.184-1.184c1.012.302 2.084.465 3.194.465 4.398 0 8.204-2.555 10.038-6.274a11.32 11.32 0 0 0-3.369-4.055l1.071-1.07zm-4.19-.569a11.11 11.11 0 0 0-3.55-.578c-4.399 0-8.205 2.555-10.038 6.273.842 1.708 2.1 3.17 3.64 4.253l2.568-2.568a4.182 4.182 0 0 1 5.514-5.514l1.866-1.866zm.41 4.35A4.182 4.182 0 0 1 11.24 13.4l5.308-5.308z" fill="none" fill-rule="nonzero"/></svg>'):(a.type='password',b.innerHTML='<svg width="25" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M1.117 7.337C3.246 3.019 7.624.227 12.5.227c4.876 0 9.254 2.792 11.383 7.11L24.21 8l-.327.663c-2.129 4.318-6.507 7.11-11.383 7.11-4.876 0-9.254-2.792-11.383-7.11L.79 8l.327-.663zM2.462 8c1.833 3.718 5.64 6.274 10.038 6.274 4.398 0 8.205-2.556 10.038-6.274-1.833-3.718-5.64-6.274-10.038-6.274C8.102 1.726 4.295 4.282 2.462 8zM12.5 12.182a4.182 4.182 0 1 1 0-8.364 4.182 4.182 0 0 1 0 8.364zm0-2.509a1.673 1.673 0 1 0 0-3.346 1.673 1.673 0 0 0 0 3.346z" fill="none" fill-rule="nonzero"/></svg>')},!1)},clearActions:function(){var a=this;a.$dom.actions[a.activeAction].classList.add('out'),setTimeout(function(){for(var b in a.$dom.actions)a.$dom.actions.hasOwnProperty(b)&&a.$dom.actions[b].classList.remove('is-active','out')},500)}},dashboard:{$dom:{dashboard:document.querySelector('.dashboard'),dropdownBtns:document.querySelectorAll('.btn--dropdown'),sidebar:{currentPanel:1,panels:document.querySelectorAll('.contract-new__sidebar-panel'),prev:document.querySelector('[data-prev-sidebar-panel]'),next:document.querySelector('[data-next-sidebar-panel]')},tabs:{triggers:document.querySelectorAll('[data-tab-trigger]'),items:document.querySelectorAll('[data-tab-item]')}},init:function(){var a=this;a.$dom.dropdownBtns.length&&a.dropdownButtons(),a.$dom.tabs.triggers.length&&a.tabs(),a.$dom.sidebar.panels.length&&a.sidebarPanels()},dropdownButtons:function(){var a=this;a.$dom.dropdownBtns.forEach(function(a){a.addEventListener('click',function(){this.classList.toggle('is-active')})})},tabs:function(){var a=this;a.$dom.tabs.triggers.forEach(function(b){b.addEventListener('click',function(c){c.preventDefault(),a.$dom.tabs.triggers.forEach(function(a){a.classList.remove('is-active')}),b.classList.add('is-active'),a.$dom.tabs.items.forEach(function(a){a.classList.remove('is-active')});var d=b.getAttribute('data-tab-trigger');document.querySelectorAll('[data-tab-item="'.concat(d,'"]')).classList.add('is-active')})})},sidebarPanels:function(){var a=this,b=a.$dom.sidebar.panels.length;document.querySelector('[data-sidebar-panel="1"]').classList.add('is-active'),a.$dom.sidebar.prev.addEventListener('click',function(){var c=a.$dom.sidebar.currentPanel;a.unfocusAll();1>=c||(a.$dom.sidebar.next.innerHTML=c-1<=b?'Next':'Finish',document.querySelector('[data-sidebar-panel="'.concat(c,'"]')).classList.remove('is-active'),document.querySelector('[data-sidebar-panel="'.concat(--c,'"]')).classList.add('is-active'),a.scrollToTop(),a.$dom.sidebar.currentPanel--)}),a.$dom.sidebar.next.addEventListener('click',function(){var c=a.$dom.sidebar.currentPanel;return a.unfocusAll(),c>=b?void document.querySelector('.modal--contract-complete').classList.add('is-active'):void(a.$dom.sidebar.next.innerHTML=c>=b-1?'Finish':'Next',document.querySelector('[data-sidebar-panel="'.concat(c,'"]')).classList.remove('is-active'),document.querySelector('[data-sidebar-panel="'.concat(++c,'"]')).classList.add('is-active'),a.scrollToTop(),a.$dom.sidebar.currentPanel++)})},unfocusAll:function(){var a=document.body,b=document.createElement('input');a.appendChild(b),b.focus(),a.removeChild(b)},scrollToTop:function(){window.scrollTo(0,0)}}};a.theseam=b,b.init()}(window)}]);
//# sourceMappingURL=app.js.map