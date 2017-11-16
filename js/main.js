// Smooth scroll down on header buttons click
function smoothScroll(el) {
    var jumpTo;
    $(el).click(function() {
        if('#port-jump')
        switch(el) {
            case '#port-jump':
                $('#tab1').click();
                jumpTo = '#portfolio';
                break;
            case '#skills-jump':
                $('#tab2').click();
                jumpTo = '#skillset';
                break;
        }

        $('html, body').animate({
            scrollTop: $(jumpTo).offset().top
        }, 1000);
    });
}
smoothScroll('#port-jump');
smoothScroll('#skills-jump');

/************ Project popup management **************/
/*
    ES6 style of creating popup objects.
    I think it's important for any front-end developer to have
    a solid understanding of vanilla javascript.
*/
class Popup {
    constructor(url, projName, htmlID, respLabel) {
        this.url = url || '#';
        this.projName = projName || 'Untitled Project';
        this.htmlID = htmlID || 'noID';
        this.respLabel = respLabel || 'Some of my responsibilities included:';
        this.creds = "*";
        this.viewText = 'View live project';
        this.contnt = '';
        this.lis = [];
        allPopups.push(this);
    }

    fillContent() {
        // populate popup div
        h3.innerHTML = this.projName;
        p.innerHTML = this.contnt;
        span.innerHTML = this.respLabel;
        ul.innerHTML = '';
        credit.innerHTML = this.creds;
        var li,
            item;
        for(item of this.lis) {
            li = document.createElement('li');
            li.innerHTML = item;
            ul.appendChild(li);
        }

        // add final popup elements
        link.setAttribute('href', this.url);
        link.innerHTML = this.viewText;
    }

}

// Grab DOM elements to populate
var projPop = document.getElementById('proj-pop'),
    popInner = document.getElementsByClassName('pop-inner')[0],
    popContent = document.getElementById('pop-content'),
    credit = document.getElementById('credit'),
    h3 = popInner.getElementsByTagName('h3')[0],
    span = document.getElementById('my-resp'),
    p = popContent.getElementsByTagName('p')[0],
    ul = popContent.getElementsByTagName('ul')[0],
    link = popInner.getElementsByTagName('a')[0],
    allPopups = [];

// define projects and their properties
var netnotes = new Popup('http://netnotes.swhitmore.com', 'Netnotes', 'netnotes');
netnotes.contnt = 'The front-end build of a simple web based note taking app using jQuery as the driving force of activity. Uses the new HTML5 attribute "contentEditable" rather than a textarea element.';
netnotes.respLabel = 'Features:';
netnotes.lis = ['Clean and minimalist interface', 'Sass (Syntactically Awesome Style Sheets)', 'Responsive styling', 'Built with modularity and scalability in mind'];
netnotes.creds = "";
netnotes.viewText = 'View live demo';

var mc = new Popup('https://motionconstrained.com', 'Motion Constrained', 'mc');
mc.contnt = 'As one of the few companies in the United States that offers authentic Hiwin linear motion products, Motion Constrained specializes in the sale and distribution of a variety of machine parts for automation.';
mc.lis = ['Monitor and manage website sales, security, and general activity', 'SEO and speed optimization', 'Code refactoring', 'Clean and modern redesign', 'Responsive styling fixes'];
mc.creds = "";

var escape = new Popup('https://escape.place', 'ConTRAPtions', 'contraptions');
escape.contnt = 'These guys combine the creative power of an artist and a machanical engineer to bring to life a very exciting and unique escape room experience. It has consistently been rated one of the top escape rooms in northern Colorado and has been featured on several major news outvars.';
escape.lis = ['Monitor and manage website security and activity', 'SEO and speed optimization', 'Clean and modern redesign', 'Responsive styling fixes'];
escape.creds = "";

var apfed = new Popup('http://apfed.org', 'American Partnership of Eosinophilic Disorders (APFED)', 'apfed');
apfed.contnt = 'APFED is an organization dedicated to spreading information about eosinophil-associated diseases. They do everything they can to help those suffering from these conditions and their families, including fund raising, volunteer work, education, research, and advocacy.';
apfed.lis = ['Help with implementation of the Doctor Finder, an advanced search filtration system to help users find the health care they need', 'Integration with 3rd party software dedicated to gathering financial support for their cause (SALSA)', 'Adding other custom features', 'Responsive styling fixes and tweaks', 'Site wide content updates', 'Continuing support for the product (front and back end)', 'Regular WordPress and plugin updates'];

var pag = new Popup('http://precisionaviationgroup.com', 'Precision Aviation Group (PAG)', 'pag');
pag.contnt = 'PAG is an international aviation MRO (maintenance, repair, and overhaul) company spanning across the globe. It\'s made up of 12 companies, so VisFire had the unique challange of combining 12 company websites into one.';
pag.lis = ['Adding custom features to existing plugins and templates', 'Responsive styling fixes and tweaks', 'Client training via screen-share', 'Continuing support for the product (front and back end)', 'Regular WordPress and plugin updates'];

var itsec = new Popup('http://itsecurityleaders.com', 'Executive Alliance: The Security Leaders Summit', 'itsec');
itsec.contnt = 'Every year Executive Alliance hosts summits for IT security leaders all over the nation. Over the years I\'ve worked closely with the team to train them on the management of the site and to build in custom features as they were needed.';
itsec.lis = ['Adding custom features to make site management easier for the client', 'Client training via screen-share', 'Continuing support for the product (front and back end)', 'Regular WordPress and plugin updates'];

var eye = new Popup('http://eyeconsultants.net', 'Eye Consultants of Atlanta', 'eye');
eye.contnt = 'Eye Consultants of Atlanta are the leading care providors for LASIK, cataract surgery, glaucoma treatment, and other general eye care in the Atlanta metro area. VisFire worked closely with them to come up with a design that would be optimal for their audience.';
eye.lis = ['Responsive styling fixes and tweaks', 'Initial content upload', 'Client training via screen-share', 'Continuing support for the product (front and back end)', 'Regular WordPress and plugin updates'];

var rmc = new Popup('http://rmcbmwcca.org', 'BMW Car Club of America: Rocky Mountain Chapter (BMWCCA: RMC)', 'rmc');
rmc.contnt = 'RMC is just one of many chapters of the BMW Car Club of America. This website is a place for members and enthusiasts to gather, plan events, and stay up to date on the latest news of their chapter.';
rmc.lis = ['Integrating a user forum and functioning sponsors widget', 'Implementation of new design', 'Client training via screen-share', 'Continuing support for the product (front and back end)', 'Regular WordPress and plugin updates'];

var bw = new Popup('http://bimmerworld.com', 'BimmerWorld', 'bimmerworld');
bw.contnt = 'BimmerWorld is a top of the line BMW parts company who own several high ranking racing teams that compete annually in the IMSA Continental Tire series. We were tasked with implementing a sleek responsive design with custom features inside of a very rigid framwork. It was a very challanging project that taught me quite a few lessons. In the end it all came together beautifully.';
bw.lis = ['Design implementation of the category menu and advanced search menu', 'Meticulous design tweaks to most areas of the site (heavy concentration on the header and footer)', 'Helping with the integration of custom features (product reviews, RSS feed, etc)', 'Responsive styling fixes and tweaks aided with jQuery', 'Continuing support for the product (front and back end)'];

var subrbn = new Popup('http://www.suburban-bees.com/', 'Suburban B\'s', 'suburban');
subrbn.contnt = 'I was lucky enough to start working with Suburban B\'s right around the time they came onto the scene. Since starting with them I\'ve watched them grow and become featured on prominent websites such as the Pollinate Media Group and the Interior Design Society.';
subrbn.lis = ['Adding custom features to better fit their needs', 'Moving them to a new hosting environment to help facilitate their growth', 'Client training via video creation', 'Continuing support for the product (front and back end)', 'Regular WordPress and plugin updates']
subrbn.creds = "";

var eval = new Popup('https://github.com/stevewhitmore/equation-eval', 'Equation Eval', 'java');
eval.contnt = 'This small Java project reads lines from a file that contains logical equations, parses them, analyzes them and checks their validity, then builds graphs representing their dependency on each other. The two kinds of graphs are a dependency graph and an adjacency list.';
eval.respLabel = 'Demonstrates:';
eval.lis = ['Different methods of representing relationships through different graphing techniques', 'Object Oriented Programming', 'Recursion in practice', 'Interpreting meaningful data from input files'];
eval.creds = "";
eval.viewText = 'View on GitHub';

var hands = new Popup('https://github.com/stevewhitmore/human-hands', 'Human Hands', 'hands');
hands.contnt = 'This program is a demonstration of C++ knowledge through an image comparison program. It analyzes and compares data captured from 3-dimensional images of a human hand represented by bit values in pgm files.';
hands.respLabel = 'Demonstrates:';
hands.lis = ['Compartmentalization of all classes involved', 'The use of pointers for different data types', 'How Makefiles make compiling and running programs much easier', 'The use of C++ for real world problem solving'];
hands.creds = "";
hands.viewText = 'View on GitHub';

// Alright, enough of that verbose stuff.
// let's save some time here...
var $projPop = $(projPop),
    $popInner = $(popInner),
    activePop;

// Reveal relevant popup
$('.proj-thumb').click(function() {
    var id = $(this).parents().attr('id');
    for(var i = 0; i < allPopups.length; i++) {
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

var $slider = $('#testimonials').unslider({
  animation: 'fade',
  autoplay: true,
  delay: 30000,
  arrows: false
});
