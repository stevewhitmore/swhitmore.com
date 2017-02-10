/*
    ES6 style of creating popup objects. I think it's important for any front end developer to have a solid understanding of vanilla javascript, even if in most cases we usually use jQuery or some other library.
*/

class Popup {
    constructor(url, projName, htmlID, respLabel) {
        this.url = url || '#';
        this.projName = projName || 'Untitled Project';
        this.htmlID = htmlID || 'noID';
        this.respLabel = respLabel || 'Some of my responsibilities included:';
        this.viewText = 'View live project';
        this.contnt = '';
        this.lis = [];
        allPopups.push(this);
    }

    fillContent() {
        // populate popup div
        h2.innerHTML = this.projName;
        p.innerHTML = this.contnt;
        span.innerHTML = this.respLabel;
        ul.innerHTML = '';
        let li,
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

var projPop = document.getElementById('proj-pop'),
    popInner = document.getElementsByClassName('pop-inner')[0],
    popContent = document.getElementById('pop-content'),
    h2 = popInner.getElementsByTagName('h2')[0],
    span = document.getElementById('my-resp'),
    p = popContent.getElementsByTagName('p')[0],
    ul = popContent.getElementsByTagName('ul')[0],
    link = popInner.getElementsByTagName('a')[0],
    allPopups = [];

// define projects and their properties
var netnotes = new Popup('../netnotes/', 'Netnotes', 'netnotes');
netnotes.contnt = 'The frontend build of a simple web based note taking app using jQuery as the driving force of activity. Uses the new HTML5 attribute "contentEditable" rather than a textarea element.';
netnotes.respLabel = 'Features:';
netnotes.lis = ['Clean and minimalist interface', 'Sass (Syntactically Awesome Style Sheets)', 'Responsive styling', 'Built with modularity and scalability in mind'];
netnotes.viewText = 'View live demo';

var subrbn = new Popup('http://www.suburban-bees.com/', 'Suburban B\'s', 'suburban');
subrbn.contnt = 'I was lucky enough to start working with Suburban B\'s right around the time they came onto the scene. Since starting with them I\'ve watched them grow and become featured on prominent websites such as the Pollinate Media Group and the Interior Design Society.';
subrbn.lis = ['Adding custom features to better fit their needs', 'Moving them to a new hosting environment to help facilitate their growth', 'Client training via video creation', 'Continuing support for the product (front and back end)', 'Regular WordPress and plugin updates']

var eval = new Popup('https://github.com/stevewhitmore/equation-eval', 'Equation Eval', 'java');
eval.contnt = 'This small Java project reads lines from a file that contains logical equations, parses them, analyzes them and checks their validity, then builds graphs representing their dependency on each other. The two kinds of graphs are a dependency graph and an adjacency list.';
eval.respLabel = 'Demonstrates:';
eval.lis = ['Different methods of representing relationships through different graphing techniques', 'Object Oriented Programming', 'Recursion in practice', 'Interpreting meaningful data from input files'];
eval.viewText = 'View on GitHub';

var hands = new Popup('https://github.com/stevewhitmore/human-hands', 'Human Hands', 'hands');
hands.contnt = 'This program is a demonstration of C++ knowledge through an image comparison program. It analyzes and compares data captured from 3-dimensional images of a human hand represented by bit values in pgm files.';
hands.respLabel = 'Demonstrates:';
hands.lis = ['Compartmentalization of all classes involved', 'The use of pointers for different data types', 'How Makefiles make compiling and running programs much easier', 'The use of C++ for real world problem solving'];
hands.viewText = 'View on GitHub';

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
