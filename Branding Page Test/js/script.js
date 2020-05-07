$(document).ready(function(){
    $(".slide-one").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000
    });

    var $homeSlider = $(".slider-two");
 
$(window).resize(function() {
  showHomeSlider();
});
 
function showHomeSlider() {
  if ($homeSlider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia("(max-width: 660px)").matches) {
      initialHomeSlider();
    } else {
      destroyHomeSlider();
    }
  }
}
showHomeSlider();
 
function initialHomeSlider() {
  $homeSlider.addClass("owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        }
    }
  });
}
 
function destroyHomeSlider() {
  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}
    });