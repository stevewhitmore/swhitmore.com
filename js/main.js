new Vue({ el: '#components-demo' })
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
    activateSection();
}


/************************************************
 * Active Sections 
 ************************************************/

const $home = document.querySelector('#home');
const $contact = document.querySelector('#contact');
const $highlightSections = [$home, ...$sections, $contact];    
const navlinks = [...$navLinks];


function activateSection() {
    let link;

    for (let el of $highlightSections) {
        // link = navlinks.find(l => l.innerText.toLowerCase() === el.id);
        // if (isInViewport(el)) {            
        //     link.classList.add('active');
        // } else {
        //     link.classList.remove('active');
        // }
    }
    
}

function isInViewport (el) {
    const bounding = el.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};



/************************************************
 * Skills Accordion
 ************************************************/
const $skillSetButtons = document.querySelectorAll('#my-skillset button');

Array.from($skillSetButtons, btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('expanded');        
    });
});
