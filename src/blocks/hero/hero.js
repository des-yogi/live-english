(function(){
  const elem = document.querySelector('.hero__carousel');
  if (!elem) { return; }
  const flkty = new Flickity( elem, {
    // options
    //cellAlign: 'left',
    //contain: true, // не работает, если "wrapAround: true"
    lazyLoad: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true //бесконечная прокрутка
  });
}());
