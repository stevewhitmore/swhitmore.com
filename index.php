<!DOCTYPE html>
<html lang='en'>
<head>
    <title>Steve Whitmore | Web Developer | Fort Collins, Colorado</title>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale = 1.0'>
    <meta name='description' content="Hi, I'm Steve Whitmore, a freelance web developer based out of Fort Collins, Colorado.">
    <meta name='keywords' content='web,developer,code,programmer,website,computer,student'>
    <meta name='author' content='Steve Whitmore'>
    <link rel='icon' type='image/png' href='favicon.png'>
    <link type='text/css' rel='stylesheet' href='./css/unslider.css'>
    <link type='text/css' rel='stylesheet' href='./css/style.css'>

    <script type="text/javascript">
    	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    	ga('create', 'UA-39951532-1', 'auto');
    	ga('require', 'displayfeatures');
    	ga('send', 'pageview');
    </script>
    <!--[if lt IE 9]>
    <script src='http://html5shiv.googlecode.com/svn/trunk/html5.js'></script>
    <![endif]-->
</head>
<body>

<header>
    <div class="main-content">
        <div class="me-image">
            <img src="./images/me.png" alt="steve whitmore cartoonized headshot">
        </div>
        <h1>Steve Whitmore</h1>
        <p>Code Enthusiast + Well Rounded Web Magician + Web Admin at <a href="https://motionconstrained.com" target="_blank">Motion Constrained</a></p>
    </div>
    <div id="down">
        <span id="port-jump">Portfolio</span>
        <span id="skills-jump">Skillset</span>
        <div id="social-wrap">
            <a id="github" href='https://github.com/stevewhitmore' target='_blank'></a>
            <a id="linkdin" href='https://www.linkedin.com/in/steve-whitmore' target='_blank'></a>
            <a id="tel" href='tel:19702379599' target='_blank'></a>
            <a id="mail" href='mailto:steve@swhitmore.com'></a>
        </div>
    </div>
</header>

<section id="tabbed">
    <input checked="checked" id="tab1" name="tabs" type="radio">
    <label for="tab1">Portfolio</label>
    <input id="tab2" name="tabs" type="radio">
    <label for="tab2">Skillset</label>

    <article class="tabbed-content" id="portfolio">
        <div class="folio-inner">
            <?php
            require_once('./Thumb.php');
            foreach($thumbs as $thumb) { ?>
                <div class="project" id="<?php echo $thumb->id; ?>">
                    <div class="proj-thumb">
                        <span class="proj-title">
                            <p><?php echo $thumb->name; ?></p>
                        </span>
                        <img src="<?php echo $thumb->imgUrl; ?>" alt="<?php echo $thumb->alt ?>"/>
                    </div>
                </div>
            <?php
            } ?>
            <div id="cred-expln"><a href="http://visfire.com"><span>*</span> VisFire project</a></div>
        </div>
    </article>
    <article class="tabbed-content" id="skillset">
        <div class="folio-inner">
            <p>Below is a look at my skillset so you can get a better feel for what my strengths are and where I hope to grow.</p>
            <p>3 - Ninja/Expert/Always improving<br/>2 - Pretty well versed<br/>1 - I've experimented but have a lot to explore</p>
            <div class="category">
                <h2>Front-end Development</h2>
                <ul>
                    <li>3 - HTML5</li>
                    <li>3 - CSS3</li>
                    <li>3 - JavaScript</li>
                    <li>3 - jQuery</li>
                    <li>3 - UI/UX Design</li>
                    <li>2 - AngularJS</li>
                    <li>2 - Sass</li>
                    <li>2 - Adobe Photoshop/GIMP</li>
                    <li>1 - Less.js</li>
                    <li>1 - Adobe Illustrator</li>
                    <li>1 - ReactJS</li>
                </ul>
            </div>
            <div class="category">
                <h2>Back-end Development</h2>
                <ul>
                    <li>3 - PHP</li>
                    <li>2 - Bash</li>
                    <li>2 - NodeJS</li>
                    <li>2 - MySQL</li>
                    <li>1 - Django</li>
                    <li>1 - RoR</li>
                </ul>
            </div>
            <div class="category">
                <h2>Content Management Systems</h2>
                <ul>
                    <li>3 - WordPress</li>
                    <li>3 - Magento</li>
                    <li>2 - NetSuite</li>
                    <li>2 - CS Cart</li>
                    <li>2 - Drupal</li>
                    <li>2 - ExpressionEngine</li>
                    <li>1 - Joomla</li>
                </ul>
            </div>
            <div class="category">
                <h2>Web/System Administration</h2>
                <ul>
                    <li>3 - Troubleshooting Issues</li>
                    <li>3 - Customer Service</li>
                    <li>3 - Communication</li>
                    <li>3 - Unix/Linux</li>
                    <li>3 - Apple OS X</li>
                    <li>2 - Microsoft Windows</li>
                    <li>2 - Security best practices</li>
                </ul>
            </div>
            <div class="category">
                <h2>Other</h2>
                <ul>
                    <li>3 - Java</li>
                    <li>3 - C/C++</li>
                    <li>3 - Git</li>
                    <li>2 - Assembly Language</li>
                    <li>2 - Ruby</li>
                    <li>2 - Python</li>
                    <li>2 - Algorithm Optimization</li>
                    <li>2 - Computer Architecture</li>
                    <li>2 - Hardware Assembly</li>
                </ul>
            </div>
            <a id="pdf" href="./SteveWhitmoreResume.pdf" target="_blank">View Full Resume (PDF)</a>
        </div>
    </article>
</section>

<section id="testimonials">
    <ul>
        <li class="testi-single">
            <p><q cite="http://www.suburban-bees.com/">My blogging partner Erin and I started working with Steve right after starting our blog. Technology is not a natural fit for either of us and Steve was instrumental in taking over the more technically involved aspects of the site & Wordpress. Best of all he created easy to understand videos that allowed us to figure out how to take over many of the tasks ourselves. We always found Steve extremely easy and pleasant to work with, very responsive to our needs, always willing to explain any aspect of his work and absolutely scrupulous in his work. Steve is a highly motivated, hard working individual and I don't hesitate to give him my highest recommendation.</q></p>
            <span>- Tricia, co-founder of <a href="http://www.suburban-bees.com/" target="_blank" class="testi-source">Suburban B's</a></span>
        </li>
        <li class="testi-single">
            <p><q cite="http://visfire.com/">Steve has assisted our team on numerous complex projects where a straightforward answer wasn’t always clear. He always seems able to find an outside perspective and a creative solution. He excels in front end development, responsive websites, content management systems, and customer service.  Many developers lack the communication skills to convey technical tasks to the client or management, but Steve has always excelled in this area. He also takes direction well and is self motivated.</q></p>
            <span>- Cory, co-owner of <a href="http://visfire.com/" target="_blank" class="testi-source">VisFire</a></span>
        </li>
        <li class="testi-single">
            <p><q cite="http://www.cs.colostate.edu/~wilcox/">Steve was in my sophomore computer science course during Spring 2016, and did very well, receiving an A- letter grade. This course combines computer architecture, combinational and sequential logic, state machines, assembly programming, numerical representation, and C programming. The course is traditionally very challenging for sophomore students, and many do not pass the first time through. Steve completed all assignments with an average of over 98.5%, thus showing a high degree of diligence. He also had perfect attendance on all labs, quizzes, and exams. In my opinion Steve is easily is in the top 20% of the students I see, and I’m delighted to give him a recommendation.</q></p>
            <span>- Dr. Wilcox, professor at <a href="http://www.cs.colostate.edu/~wilcox/" target="_blank" class="testi-source">Colorado State University</a></span>
        </li>
    </ul>
</section>

<footer>
    <span>Made with &hearts; in Fort Collins, CO</span>
</footer>

<div id="proj-pop">
    <div class="pop-inner" id="">
        <h3></h3>
        <div id="pop-content">
            <p></p>
            <span id="my-resp"></span>
            <ul></ul>
        </div>
        <a href="" target="_blank"></a>
        <span id="credit"></span>
        <span id="prev"><img src="./images/arrow-prev.png" alt="previous arrow"/></span>
        <span id="next"><img src="./images/arrow-next.png" alt="next arrow"/></span>
        <span id="close"></span>
    </div>
</div>

<script defer src="./js/jquery-3.1.1.min.js"></script>
<script defer src="./js/unslider.min.js"></script>
<script defer src="./js/main.js"></script>


<!--                                           .x+!?T!!+:.
                                            x?!!!!!!!!!!!!!?x
                                          /!!!!!!!!!!!!!!XXX!Xh.
                                         !!!!!!!X!!""`            `
                                        !!X%"`                     \
                                     :-"
        +++x.                                            :.x:x+!+!i-~
       'X!!!!!!%.                                 :..!?!!!!!!!!!!!!
         "X!!!!!!!%.                .        xx!!!!!!!!!!!!!!!!!!!!!
          '!!!!!!!!!?.              '-+!!?!!!!!!!!!!!tU@?!!!!?!!!!!!
           X!!!!!!!!!!!               X!!!!!!!!!!!!!XM!!!!!!!!!!!!!!X
            "!!!!!!!!!!!             '!XM!!!!!!!!!!!!!!!!!!XUW~"!!!!!>
            '!!!!!!!!!!!!             ?!!!!!!!!!!!!!!!X*"      X!!!!!X
             %!!!!!!!!!!!!            !!!!!!!!!!!!!!X          !!!!!!!\
    !h        ?!!!!!!!!!!!>           !!XX*""#$``?!!!!.      /!!!!!!!!!L
    X!!       X!!!!!!!!!!!!           ^          X!!!!!!???!!!!!!!!!!!!!:
    !!!!\      "!!!!!!!!!!!              -.....+M!!!!!!!!!!!!!!!!!!!!!!!!:
    !!!!!!:     /!!!!!!!!!!                ~!!!X!!!!!!!!!!!!!!!9$$K!!!!!!!\
    4!!!!!!!%. 4!!!!!!!!!!>                 4!X!!!!!!!!!!!!!!!!$$$R!!!!!!!!!
    '!!!!!!!!!!M!!!!!!!!!X                   'X!!!!!!!X!!!!X!!!M$$R!!!!!!!!!!x
     !!!!!!!!!!!M!!!!!!!!f    ???+x.          X!!!!!!!!X!!!M!!!X$#!!!!!!!!!!!!!:
      !!!!!!!!!!!!!!!!!!"     'X!!!!!!.       !!!!!X!!!M!!!!X!!!X!!!!!!!!!!!!!!!!x
       `!!!!!!!!!!!!!!~  `      %!!!!!!!:     4!!!!M!!!M!!!!X!!!X!!!!!!!!!!!!!!!   '(
         4!!!!!!!!X"      ~     !!!!!!!!!!    '!!!!M!!!?!!!!M!!!X!!!!!!!!!!!!!      :(x
           ?""``                 %!!!!!!!!!:  '!!!!X!!!M!!!X?X!X!!!!!!!!!!!!f    x!!!!!!x
           .              h      !!!!!!!!!!!\ X!!!9M!!XMMX@!!!!!!!!!!!!!!!X"   :!!!!!!!!!!x
            (         ..!!!!:    '!!!!!!!!!!!M!'" '!!!!!!!!!!!!!!!!!!!!!!X~   :!!!!!!!!!!!!!:
             `!%xx:x!?!!!!!!!!x    X!!!!!!!!!!X   '!!!!!!!!!!!!!!!!!!!!!X    :!!!!!!!!!!!!!!!!:
              `!!!!!!!!!!!!!!!!!!x:!!!!!!!!!!!M    X!!!!!!!!!!!!!!!!!!!X    '!!!!!!!!!!!!!!!!!!X
               !!!!!!!!!!!!!!!!!!!!M!!!!!!!!!!!>   X!!!!!!!!!!!!!!!!!!X~    !!!!!!!!!!!!!!!!!!!!!
               '!!!!!!!!MX!!!!!!!!!!X!!!!!!!!!!!   '!!!!!!!!!!!!!!!!!!~    X!!!!!!!!!!!!!!!!!!!!!X
                4!!!!!X!!!!?@XX!!!!!X!!!!!!!!!!X    X!!!!!!!!!!!!!!!!"    X!!!!!!!!!!!!!!!!!!!!!!!L
                 !!!!!MX!!!!!!!!!!!!M!!!!!!!!!!!.    !!!!!!!!!!!!!!X~    :!!!!!!!!!!!!!!!!!!!!!!!!~
                  X!!!!?X!!!!!!!!!!!!!X!!!!!!!!!> "(  X!!!!!!!!!!!f      X!!!!!!!!!!!!!!!!!!!M!!!!
                   %!!!!!X!!!!!!!!!!!!!?X!!!!!!X~   "( ^4X!!!!!X"       '!!!!!!!!!!!!!!!!!!!X!!X!!
                    `X!!!!?X!!!!!!!!!!!!!!!!!!X!      '+:x....          X!!!!!!!!!!!!!!!!!!!MX!!!>
                      4!!!!!?X!!!!!!!!!!!!!!!X        d!!!!!!!!!!!!!?!+xX!!!!!!!!!!!!!!!!!!X?!!!!
                       `X!!!!!!?tX!!!!!!!!!!X         !!!!!!!!!!!!!!!!!!!!!M!!!!!!!!!!!!!!!X!!!!f
                         "X!!!!!!!!!?%@!*"            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!M!!!!!
                           ^4X!!!!!!!!!!.           '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X!!!!X
                               '""~~~""" `>       (!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X!!!!X~
                                           /-.. :!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X!!!!X
                                         ~      `X!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X!!!X"
                                                   "X!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X`""
                                      ~               "X!!!!!!!!!!!!!!!!!!!!!!!!!!!!f
                                   @Hxu                  "4X!!!!!!!!!!!!!!!!!!!!!!X
                                 :MRM8MMMRhL                 "%X!!!!!!!!!!!!!!!!X`
                                @MRM$MMMMMMMMRs                   ^"*!XXXXXXX*"             -->
</body>
</html>
