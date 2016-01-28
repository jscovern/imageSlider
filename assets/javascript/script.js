$(document).ready(function() {

  var autoPlayInterval;

  function showNextImage() {
    var currentImageNode = $('div.header img:visible').get(0);
    var allImages = $('div.header img').get();
    var currentIndex = allImages.indexOf(currentImageNode);
    var nextIndex = (currentIndex + 1) % $('div.header img').length;
    $(currentImageNode).hide();
    var nextImageNode = $('div.header img').get(nextIndex);
    $(nextImageNode).show();
  }

  $('div.header img').hide();
  $('div.header img').first().show();

  $('div.header img').on('click', showNextImage);

  function startPlay() {
    $('div.header img').off('click', showNextImage);
    autoPlayInterval = setInterval(function() {
      showNextImage();
    }, 1000);
  }

  function stopPlay() {
    clearInterval(autoPlayInterval);
    $('div.header img').on('click', showNextImage);
  }

  $('.start').on('click',startPlay);

  $('.stop').on('click', stopPlay);


});
