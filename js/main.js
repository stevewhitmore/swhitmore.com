/************************************************
 * Home Hexagons
 ************************************************/
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



/************************************************
 * Navigation 
 ************************************************/
const $viewWork = document.querySelector('#view-work');
const $nav = document.querySelector('nav');
const $navLinks = $nav.querySelectorAll('li a');
const $sections = document.querySelectorAll('section');
const $scrollTop = document.querySelector('#scroll-top');


function smoothScroll() {
    let target, goToId, goToElement;
    let links = [...$navLinks, $viewWork, $scrollTop];
    
    for (let link of links) {
        link.addEventListener('click', e => {
            e.preventDefault();     
            target = e.target.nodeName === 'I' ? e.target.parentElement : e.target;
            goToId = target.attributes['href'].value;
            goToElement = document.querySelector(goToId);
            goToElement.scrollIntoView({behavior:'smooth', block:'start', inline:'start'});
        })
    }
}

smoothScroll();


function stickyNavOnScroll() {
    if (window.pageYOffset > $nav.offsetTop) {
        $nav.classList.add("sticky");
    } else {
        $nav.classList.remove("sticky");
    }
}

window.onscroll = function() {
    stickyNavOnScroll();
}


/************************************************
 * Active Sections 
 ************************************************/
// Array.prototype.forEach.call(sections, function(e) {
//     sections[e.id] = e.pageYOffset;
// });

// window.onscroll = function() {
//     let position = this.pageYOffset;
//     for (i in sections) {
//         console.log(section[i])
//     }
// }






/************************************************
 * Skills Accordion
 ************************************************/
const $skillSetButtons = document.querySelectorAll('#my-skillset button');

Array.from($skillSetButtons, btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('expanded');        
    });
});
