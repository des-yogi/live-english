(function(){
  const elem = document.querySelector('.logo-slider');
  if (!elem) { return; }
  const flkty = new Flickity( elem, {
    // options
    lazyLoad: 10,
    prevNextButtons: false,
    pageDots: false,
    dragThreshold: 30,
    //autoPlay: 1500,
    wrapAround: true //бесконечная прокрутка
  });
}());
