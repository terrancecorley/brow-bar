// add event handler for role='button'- listen for space and enter trigger
// DISREGARD PREV LINE IF USING BTN ELEMENT


const main = (() => {
  // Site nav btn transitions
  const siteNavBtn = document.querySelector('#site-nav__menu-btn');

  const navMenuTransition = (e) => {
    const elClasses = e.target.classList;
    elClasses.toggle('close');
  };

  // Site nav overlay
  const siteNavOverlayWrap = document.querySelector('#site-nav__overlay-wrapper');
  const siteNavOverlay = document.querySelector('#site-nav__overlay');
  const navOverlayTransition = () => {
    const elClasses = siteNavOverlay.classList;
    elClasses.toggle('is-displayed-mobile--click');
    if (elClasses.contains('is-displayed-mobile--click')) {
      siteNavOverlayWrap.style.backgroundColor = 'initial';
    } else {
      siteNavOverlayWrap.style.backgroundColor = '#c6d4c2';
    }
  };

  siteNavBtn.addEventListener('click', navMenuTransition);
  siteNavBtn.addEventListener('click', navOverlayTransition);

})();