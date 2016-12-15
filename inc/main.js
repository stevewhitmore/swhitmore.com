

// Smooth scroll down on click 'see portfolio'
$("#down").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});


// Reveal relevant popup
$('.proj-thumb').click(function() {
    var id = $(this).parents().attr('id'),
        i;
    for(i = 0; i < allPopups.length; i++) {
        if(id === allPopups[i].htmlID) {
            allPopups[i].fillContent();
        }
    }
});

// Hide relevant popup
$('#close').click(function() {
    $('#proj-pop').hide();
    $('#pop-content ul').html('');
});
$('#proj-pop').click(function() {
    $(this).hide();
    $('#pop-content ul').html('');
});
$('#pop-inner').click(function(e) {
    e.stopPropagation();
});

// Scroll through popups
function scrollProjects(el) {
    let $el = $('.' + el),
        dir = 1, // tells us where to go at the end of a project section
        go;
    $el.click(function() {
        let $proj = $(this).closest('.project');
        // hide current popup
        $proj.find('.proj-pop').fadeOut();
        // figure out which way to go
        if(el === 'next') {
            go = $proj.next();
        } else {
            go = $proj.prev();
            dir = 0;
        }
        // if we reach the end of VisFire or Personal sections, jump to the other one
        if(!go.find('.proj-pop').length) {
            $sec = $proj.closest('.folio-outer').siblings();
            if(dir) {
                $proj = $sec.find('.project').first();
            } else {
                $proj = $sec.find('.project').last();
            }
            $proj.find('.proj-pop').fadeIn();
        } else {
            go.find('.proj-pop').fadeIn();
        }
    });
}
scrollProjects('next');
scrollProjects('prev');
