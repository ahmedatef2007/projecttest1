$(document).ready(function() {
  let $btns = $(".project-area .button-groub button");
  $btns.click(function(e) {
    $(".project-area .button-groub button").removeClass("active");
    e.target.classList.add("active");
    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector
    });
    return false;
  });

  $(".project-area .button-groub #btn1").trigger("click");

  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });
  //owl carousel
  $(".site-main .they-say .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      544: {
        items: 2
      }
    }
  });
  //sticky nav menu
  let nav_offset_top = $(".header").height() + 50;
  function navbarFixed() {
    if ($(".header").length) {
      $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header .main-menu").addClass("navbar_fixed");
        } else {
          $(".header .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
  AOS.init();
});
