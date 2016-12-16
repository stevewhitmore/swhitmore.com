
// Smooth scroll down on click 'see portfolio'
$("#down").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});


var $projPop = $(projPop),
    $popInner = $(popInner),
    activePop;

// Reveal relevant popup
$('.proj-thumb').click(function() {
    let id = $(this).parents().attr('id');
    for(let i = 0; i < allPopups.length; i++) {
        if(id === allPopups[i].htmlID) {
            activePop = allPopups[i];
            activePop.fillContent();
            $projPop.fadeIn();
        }
    }
});

// Hide relevant popup
$('#close').click(function() {
    $('#proj-pop').fadeOut();
});
$(projPop).click(function() {
    $(this).fadeOut();
});
$popInner.click(function(e) {
    e.stopPropagation();
});

// Scroll through popups
function scrollProjects(el) {
    $('#' + el).click(function() {
        $popInner.hide();
        var dir = (el === 'next' ? 1 : -1),
            index = allPopups.indexOf(activePop) + dir,
            length = allPopups.length;
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
        activePop.fillContent();
        $popInner.fadeIn();
    });
}
scrollProjects('next');
scrollProjects('prev');
