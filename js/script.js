document.addEventListener("DOMContentLoaded", function() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 6,
        direction: 'vertical',
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        setWrapperSize: true,
        autoHeight: true,
        height: '400'
    });
      var galleryTop = new Swiper('.gallery-top', {
        effect: 'fade',
        thumbs: {
          swiper: galleryThumbs
        }
    });
});