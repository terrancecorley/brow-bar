// add event handler for role='button'- listen for space and enter trigger
// DISREGARD PREV LINE IF USING BTN ELEMENT
'use strict';

const main = (() => {
  const siteNavBtn = document.querySelector('#site-nav__menu-btn');

  const navMenuTransition = (e) => {
    // toggle class
    // perform different transform depending on class
    const elClasses = e.target.classList;
    elClasses.toggle('close');
  };

  siteNavBtn.addEventListener('click', navMenuTransition);
})();