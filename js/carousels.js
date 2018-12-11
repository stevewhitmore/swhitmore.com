$(document).ready(function() {

    $('.project-inner .slider').slick({
        arrows: false
    });
    $('.prev').click(function() {
        $('.project-inner .slider').slick('slickPrev');
    });
    $('.next').click(function() {
        $('.project-inner .slider').slick('slickNext');
    });

    $('#testimonials .slider').slick({
        dots: true
    });

    let $slides = $('.project-overlay');

    $('.learn-more-link button').click(function() {
        let id = $(this).attr('id');
        
        $slides.find("#" + id).parent().addClass('visible');
    });

    $('.project-nav .close').click(function () {        
        $(this).closest('.project-overlay').removeClass('visible');
    });
    $('.project-overlay').click(function() {
        $(this).removeClass('visible');
    });
    $('.project-inner').click(function(e) {
        e.stopPropagation();
    });
});