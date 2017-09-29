function scrollToSection(event) {
  event.preventDefault();

  var $section = $($(this).attr('href'));

  $('html, body').animate({
    scrollTop: $section.offset().top-20
  }, 1000);
}
$('.scroll-to-section').on('click', scrollToSection);
