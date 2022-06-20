(function(){
  const utils = window.fizzyUIUtils;
  //console.log(utils);
  const container = document.querySelector('.reviews-slider');
  const elem = container.querySelector('.reviews-slider__inner');
  if (!elem) { return; }
  const flkty = new Flickity( elem, {
    // options
    lazyLoad: true,
    adaptiveHeight: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true //бесконечная прокрутка
  });

  // elements
  const cellsButtonGroup = container.querySelector('.slider-nav__pagination');
  let cellsButtons = utils.makeArray( cellsButtonGroup.children );

  // update buttons on select
  flkty.on( 'select', function() {
    const previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
    let selectedButton = cellsButtonGroup.children[ flkty.selectedIndex ];
    previousSelectedButton.classList.remove('is-selected');
    selectedButton.classList.add('is-selected');
  });

  // cell select
  //matchesSelector() заменил на matches()
  cellsButtonGroup.addEventListener( 'click', function( event ) {
    if ( !(event.target).matches( '.button' ) ) {
      return;
    }
    let index = cellsButtons.indexOf( event.target );
    flkty.select( index );
  });
  // previous
  const previousButton = container.querySelector('.slider-nav__btn--prev');
  previousButton.addEventListener( 'click', function() {
    flkty.previous();
  });
  // next
  const nextButton = container.querySelector('.slider-nav__btn--next');
  nextButton.addEventListener( 'click', function() {
    flkty.next();
  });

}());
