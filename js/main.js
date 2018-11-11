// const viewWorkLink = document.querySelector('#view-work');
// const navBar = document.querySelectorAll('nav a');
// const scrollTopLink = document.querySelector('#scroll-top');
// const linkAssignmentList = [ viewWorkLink, scrollTopLink, ...navBar ];

// Array.from(linkAssignmentList, link => {
//     link.addEventListener('click', e => {
//         e.preventDefault();
//         call = setInterval(scroll);
//         target = e.srcElement.dataset.scroll;
//         console.log('target: ', target);
//         offset = document.getElementById(target).offsetTop
//         console.log('offset: ', offset);
//         // console.log('offset: ', offset)
//     })
// });


// let offset = 0;
// let call;
// function scroll() {
//     console.log(offset - document.documentElement.scrollTop)
//     if ((offset - document.documentElement.scrollTop) > 0) {
//         document.documentElement.scrollTop += 8
//     }
//     else if ((offset - document.documentElement.scrollTop) < 0) {
//         document.documentElement.scrollTop -= 8
//     }
//     else {
//         clearInterval(call)
//     }
// };

/** Home Hexagons **/
const backdrop = document.querySelector('#home-backdrop');
const hex = document.createElement('i');
const colors = [ 
    '#02b802;',
    '#02b8b5;',
    '#b8025d;'
];

hex.classList.add('mdi');
hex.classList.add('mdi-hexagon-outline');

backdrop.appendChild(hex);


/** END Home Hexagons **/


/** Sticky Navbar **/
const $nav = document.querySelector('nav');
const navOffset = $nav.offsetTop;

function stickyNavOnScroll() {
    if (window.pageYOffset > navOffset) {
        $nav.classList.add("sticky");
    } else {
        $nav.classList.remove("sticky");
    }
}

window.onscroll = function() {
    stickyNavOnScroll();
}
/** END Sticky Navbar **/



/** Skills Accordion **/
const $skillSetButtons = document.querySelectorAll('#my-skillset button');

Array.from($skillSetButtons, btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('expanded');        
    });
});
/** END Skills Accordion **/
