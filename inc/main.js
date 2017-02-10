/***************************************************
     Driver of all site javascript operations.
***************************************************/

// Smooth scroll down on click 'see portfolio'
$("#down").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

// Using 'Unslider' v2.0 by @idiot and friends
var $slider = $('#testimonials').unslider({
  animation: "fade",
  autoplay: true,
  delay: 7500,
  arrows: false
});

$slider.on('mouseover', function() {
    $slider.data('unslider').stop();
}).on('mouseout', function() {
    $slider.data('unslider').start();
});

/************ Project popup management **************/
// variables from popups.js made into jQuery object
var $projPop = $(projPop),
    $popInner = $(popInner),
    activePop;

// Reveal relevant popup
$('.proj-thumb').click(function() {
    let id = $(this).parents().attr('id');
    for(let i = 0; i < allPopups.length; i++) {
        if(id === allPopups[i].htmlID) {
            $popInner.attr('id', id);
            activePop = allPopups[i];
            activePop.fillContent();
            $projPop.fadeIn();
        }
    }
});

// Hide popup
$('#close').click(function() {
    $('#proj-pop').fadeOut();
});
$projPop.click(function() {
    $(this).fadeOut();
});
$popInner.click(function(e) {
    e.stopPropagation();
});

// Scroll through popups
function scrollProjects(el) {
    $('#' + el).click(function() {
        var dir = (el === 'next' ? 1 : -1),
            index = allPopups.indexOf(activePop) + dir,
            length = allPopups.length;

        // crude but direct
        if(index >= 0 && index < length) {
            activePop = allPopups[index];
        } else {
            if(index < 0) {
                activePop = allPopups[length - 1];
            }
            if(index > length - 1) {
                activePop = allPopups[0];
            }
        }

        // assign correct id to inner popup area for background image
        $popInner.attr('id', activePop.htmlID);

        // now we know which project's information to populate the popup
        $popInner.hide();
        activePop.fillContent();
        $popInner.fadeIn();
    });
}
scrollProjects('next');
scrollProjects('prev');
/************ /Project popup management **************/
