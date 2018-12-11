
function smoothScroll(section) {
    $('.' + section + '-link').click(function() {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + section).offset().top - 50
        }, 1000);
    });
}
var sections = ['home', 'about', 'portfolio', 'contact'];
sections.forEach(function(s) {
    smoothScroll(s);
});



$(window).scroll(function() {

    if ($(this).scrollTop() < $('header#home').offset().top) {
       $('nav a').removeClass('active');
    }
    if ($(this).scrollTop() >= $('header#home').offset().top) {
      $('nav a').removeClass('active');
      $('nav a:eq(0)').addClass('active');
      $('nav').removeClass('sticky');
    }
    if ($(this).scrollTop() >= $('section#about').offset().top - 50) {
      $('nav a').removeClass('active');
      $('nav a:eq(1)').addClass('active');
      $('nav').addClass('sticky');
    }
    if ($(this).scrollTop() >= $('section#portfolio').offset().top - 50) {
      $('nav a').removeClass('active');
      $('nav a:eq(2)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section#testimonials').offset().top - 150) {
      $('nav a').removeClass('active');
      $('nav a:eq(3)').addClass('active');
    }

});


$('.skill-wrapper button').each(function() {
    $(this).click(function() {
        $(this).parent().toggleClass('expanded');
    })
})