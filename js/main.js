/* ===============================
Preloader
================================ */

$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});


/* ===============================
Navbar Show
================================ */
/* Show and Hide White Navigation */

$(function() {
  $(window).scroll(function() {

    if( $(window).scrollTop() > 50 )  {
        // Show White Nav
        $("nav").addClass("white-nav-top");


        // Show Back To Top Button
        $("#back-to-top").fadeIn();

    } else {
      //Hide White Nav
      $("nav").removeClass("white-nav-top");

      // Hide Back To Top Button
      $("#back-to-top").fadeOut();

    }

  });
});

/* ===============================
Portofolio
================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ===============================
Testimonial Slider
================================ */

$(function() {
  $("#test-2").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    nav: true,
    dots: false
  });
});

/* ===============================
Location Slider
================================ */

$(function() {
  $("#location").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    nav: true,
    dots: false
  });
});
