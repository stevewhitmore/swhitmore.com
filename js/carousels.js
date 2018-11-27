$(document).ready(function() {

    $('.project-inner .slider').slick({
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('#testimonials .slider').slick({
        dots: true
    });

    let $slides = $('.project-overlay');

    $('.portfolio-single-wrapper button').click(function() {    
        let id = $(this).attr('id');
        
        $slides.find("#" + id).parent().addClass('visible');
    });

    $('.project-nav .close').click(function () {
        $(this).closest('.project-overlay').removeClass('visible');
    });


});