class CustomDOMobject {

    constructor(position, name) {
        this.position = position;
        this.name = name;
    }

}

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
const homePosition = $highlightSections.find(s => s.id === 'home').getBoundingClientRect();
const aboutPosition = $highlightSections.find(s => s.id === 'about').getBoundingClientRect();
const portfolioPosition = $highlightSections.find(s => s.id === 'portfolio').getBoundingClientRect();
const contactPosition = $highlightSections.find(s => s.id === 'contact').getBoundingClientRect();

const home = new CustomDOMobject(homePosition, 'home');
const about = new CustomDOMobject(aboutPosition, 'about');
const portfolio = new CustomDOMobject(portfolioPosition, 'portfolio');
const contact = new CustomDOMobject(contactPosition, 'contact');


const elsThatWillHighlight = [home, about, portfolio, contact];

let link;

function activateSection() {
    const windowPosition = this.pageYOffset;
    console.log(windowPosition);
    console.log(home.position.top)

    for (let el of elsThatWillHighlight) {
        if (windowPosition >= el.position.top && windowPosition < el.position.bottom) {
            document.querySelector('.active').classList.remove('active');
            link = navlinks.find(l => l.innerText.toLowerCase() === el.name);
            link.parentElement.classList.add('active');
        }
        if (windowPosition > 2250) {
            document.querySelector('.active').classList.remove('active');
            link = navlinks.find(l => l.innerText.toLowerCase() === 'contact');
            link.parentElement.classList.add('active');
        }
    }
    
}


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
