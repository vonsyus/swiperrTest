document.addEventListener("DOMContentLoaded", function() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 6,
        direction: 'vertical',
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        autoHeight: true
    });
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        effect: 'fade',
        thumbs: {
          swiper: galleryThumbs
        }
    });
});