(function(){
  const mobNav = document.querySelector('.mob-nav');
  const menuLink = mobNav.querySelector('.mob-nav__link');
  const burger = document.querySelector('.burger');
  const body = document.querySelector('body');
  if (!mobNav || !burger) { return; }

  const setBlur = function(elem) {
    elem.blur();
  };

  const setFocus = function(elem) {
    elem.focus();
  };

  const addOverflow = function() {
    body.style = 'overflow-y: hidden;'
    // padding-right:6px;
  };

  const deleteOverflow = function() {
    body.style = 'overflow-y: auto;'
  };

  const toggleMobNav = function(e) {
    //console.log(menuLink);
    const btn = e.target;

    if (!mobNav.classList.contains('mob-nav--open')) {
      mobNav.classList.add('mob-nav--open');
      addOverflow();
      setBlur(btn);
      setFocus(menuLink);
      btn.setAttribute('aria-expanded', true);
      btn.classList.add('burger--close');
    }
    else {
      mobNav.classList.remove('mob-nav--open');
      deleteOverflow();
      setBlur(menuLink);
      setFocus(btn);
      btn.setAttribute('aria-expanded', false);
      btn.classList.remove('burger--close');
    }
  };

  burger.addEventListener('click', toggleMobNav);
}());
