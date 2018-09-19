// add event handler for role='button'- listen for space and enter trigger
// DISREGARD PREV LINE IF USING BTN ELEMENT


const main = (() => {
  // Nav Btn Transitions
  const siteNavBtn = document.querySelector('#site-nav__menu-btn');

  const navMenuTransition = (e) => {
    const elClasses = e.target.classList;
    elClasses.toggle('close');
  };

  // Nav overlay
  const siteNavOverlay = document.querySelector('#site-nav__overlay');
  const navOverlayTransition = () => {
    const elClasses = siteNavOverlay.classList;
    elClasses.toggle('is-displayed-mobile--click');
  };

  siteNavBtn.addEventListener('click', navMenuTransition);
  siteNavBtn.addEventListener('click', navOverlayTransition);

})();